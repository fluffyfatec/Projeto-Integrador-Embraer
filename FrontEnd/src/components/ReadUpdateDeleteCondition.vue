<template>

    <div>
        <div class="div-header">
            <h1 class="title">List of Items</h1>
            <div class="div-btn-download">
                <button class="btn-download" @click.prevent="showPdfOptions = true">
                    <i class="fa-solid fa-file-arrow-down"></i>
                    <i class="txt-btn-download">Download PDF</i>
                </button>
            </div>
            <div v-if="showPdfOptions" class="filter-download">
                    <h3 class="title-popup">Choose what you want in the report</h3>

                <div class="check-conatiner">
                    <div class="check-label-adm">
                        <input type="checkbox" v-model="pdf.active" :value="true">
                        <label>Show Active</label>

                    </div>

                    <div class="check-label-adm">
                        <input type="checkbox" v-model="pdf.inactive" :value="true">
                        <label>Show Inactive</label>

                    </div>
                </div>
                    <button v-if="pdf.active !== false || pdf.inactive !== false" class="btn-popup" 
                            @click.prevent="downloadPDF">Confirm</button>
                    <button @click.prevent="showPdfOptions = false" class="btn-popup btn-popup2">Cancel</button>        
            </div>
        </div>
        
        
        <div class="table-wrapper">
            <table cellspacing="0">
                <thead>
                    <tr class="table-header">
                        <th>Item</th>
                        <th>Date Register</th>
                        <th>Status</th>
                        <th>Option</th>
                    </tr>
                </thead>    
                <tbody v-for="item in items" :key="item.id">
                    <tr>
                        <td>{{ item.name }}</td>
                        <td>{{ item.dt_register }}</td>
                        <td class="status-item" @click="itemUpdateStatus(item.id, item.status)"
                        :style="item.status === 'Active' ? 'color: #548644' : 'color: #AE2A32'">{{ item.status }}</td>
                        <td class="edit-item" v-if="itemSelected !== item.id">
                            <button @click.prevent="ItemEdit(item.id)">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>   
                        </td>
                        <td v-else></td> 
                    </tr>
                    <tr>
                        <td colspan="4" class="full-width">
                        <div v-if="edition && itemSelected === item.id" class="table-new-line">


                            <select class="select-condit-formula" v-model="condition_formula" placeholder="Select a formula...">
                                <option>chassis ></option>
                                <option>sb1</option>
                                <option>(sb1 OR sb2) AND sb3</option>
                                <option>sb1 AND sb2</option>
                                <option>sb1 OR sb2</option>
                                <option v-if="condition_formula !== 'chassis >' && condition_formula !== 'chassis >' && 
                                    condition_formula !== 'chassis >' && condition_formula !== 'chassis >' && 
                                    condition_formula !== 'chassis >' && condition_formula !== 'others'">{{ condition_formula }}</option> 
                                <option>others</option>        
                            </select>
                            <EditFormula1 v-if="condition_formula === 'chassis >'" :itemId="item.id" :toString="item.id" :toLocaleString="item.id"></EditFormula1>
                            <EditFormula2 v-else-if="condition_formula === 'sb1'" :itemId="item.id" :toString="item.id" :toLocaleString="item.id""></EditFormula2>
                            <EditFormula3 v-else-if="condition_formula === '(sb1 OR sb2) AND sb3'" :itemId="item.id" :toString="item.id" :toLocaleString="item.id"></EditFormula3>
                            <EditFormula4 v-else-if="condition_formula === 'sb1 AND sb2'" :itemId="item.id" :toString="item.id" :toLocaleString="item.id"></EditFormula4>
                            <EditFormula5 v-else-if="condition_formula === 'sb1 OR sb2'" :itemId="item.id" :toString="item.id" :toLocaleString="item.id"></EditFormula5>
                            <EditFormulaX v-else :itemId="item.id" :toString="item.id" :toLocaleString="item.id"></EditFormulaX>
                        </div>
                        </td>
                    </tr>
                </tbody>    
                                  
                    
            </table>
        </div>     

    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main';
import EditFormula1 from './EditCrudCondition/EditFormula1.vue';
import EditFormula2 from './EditCrudCondition/EditFormula2.vue';
import EditFormula3 from './EditCrudCondition/EditFormula3.vue';
import EditFormula4 from './EditCrudCondition/EditFormula4.vue';
import EditFormula5 from './EditCrudCondition/EditFormula5.vue';
import EditFormulaX from './EditCrudCondition/EditFormulaX.vue';
import FileSaver from 'file-saver';

export default {
    data() {
        return {
            items: [],
            edition: false,
            condition_formula: null,    
            itemSelected: '',  
            pdf: {
                active: false,
                inactive: false,
            },
            showPdfOptions: false,     
        }
    },

    mounted() {
        
       this.getItems();      

    },

    methods: {

        async getCondition(itemId: string) {

            this.condition_formula = (await axios.get('http://localhost:8080/list/condition/' + itemId)).data.formulaDesc;
        },
        
        async getItems() {
	        
            const response = await axios.get('http://localhost:8080/list-all/items');

            this.items = response.data.map((item: String) => ({ 
                id: item.itemId,
                name: item.itemName,
                dt_register: item.itemDtregister, 
                status: item.status
            }));


            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].status === 'A') {
                    this.items[i].status = 'Active';
                }

                if (this.items[i].status === 'I') {
                    this.items[i].status = 'Inactive';
                }
            };    

         },

        ItemEdit(itemId: string) {

            this.itemSelected = itemId;
            
            this.getCondition(itemId);
            
            this.edition = true;

        },

        async itemUpdateStatus(itemId: String, status: String) {
            await axios.get('http://localhost:8080/update-item-status/' + itemId + '/' + status);

            this.getItems();
        },

        async downloadPDF() {

            // Faz a requisição para o método do Spring Boot
            const response = await axios.get('http://localhost:8080/report-condition/' + this.pdf.active + '/' + this.pdf.inactive, {
                responseType: 'blob' // Define o tipo de resposta como Blob
            });

            // Obtém o nome do arquivo a partir do cabeçalho Content-Disposition
            const contentDispositionHeader = response.headers['content-disposition'];
            const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            const matches = filenameRegex.exec(contentDispositionHeader);
            const filename = matches != null && matches[1] ? matches[1].replace(/['"]/g, '') : 'report.pdf';

            // Cria um objeto Blob com a resposta recebida do servidor
            const blob = new Blob([response.data], { type: 'application/pdf' });

            // Salva o arquivo com o nome obtido do cabeçalho Content-Disposition
            FileSaver.saveAs(blob, filename);

        },
        
    },

    created() {
        eventBus.$on('edition', (edition: boolean) => {
            this.edition = edition
            this.itemSelected = '';
        });

        eventBus.$on('update-getItems', (edition: boolean) => {
            this.getItems();
        });
    },


    components: {
        EditFormula1,
        EditFormula2,
        EditFormula3,
        EditFormula4,
        EditFormula5,
        EditFormulaX,
    }

}
</script>


<style scoped>
@import "../assets/base.css";
.table-new-line{

    margin: 0;
    padding: 0;
}
.full-width {
  width: 100%;
  
}


button{

    color: aliceblue;
    background-color: var(--azul-principal);
    width: 30px;
    height: 30px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.title {
    color: var(--azul-principal);
    margin-left: 25px;
    font-weight: var(--medium);
}

.table-wrapper {
    padding-bottom: 50px;
}

table {
    background-color: white;
    border-radius: 15px;
    border-collapse: separate;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 20px;
    margin-bottom: 30px;
    overflow: hidden;
    box-shadow: 2px 2px 20px 5px var(--silver);
    width: 96%;
    
}

.table-header {
    background-color: var(--azul-principal);
    border-radius: 15px;
    
}

th {
    padding: 25px;
    color: var(--white);
}

td {
    padding: 10px;
    color: var(--azul-claro);
    text-align: center;
    vertical-align: middle;
}

tbody:nth-child(even)    { background-color: rgba(224, 224, 225, 0.5);}

.status-item {
    cursor: pointer;
}

.edit-item {
    height: fit-content;
}
input[type=checkbox] {
        border: 1px solid var(--silver);
        width: 15px;
        height: 15px;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        -ms-transform: scale(1.5); /* IE */
        -moz-transform: scale(1.5); /* FF */
        -webkit-transform: scale(1.5); /* Safari and Chrome */
        -o-transform: scale(1.5); /* Opera */
        transform: scale(1.5);
        margin: 10px;
    }

.filter-download {
    position: fixed;
    background-color: var(--white);
    border-radius: 10px;
    text-align: center;
    width: 60%;
    padding-top: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left: 25px;
    margin-right: 25px;
    padding: 40px;
    box-shadow: 2px 2px 20px 5px var(--silver);
    transition: 2s;
    z-index: 9999;
}


/* --------------- Media Queries -------------------- */

/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {

    .title {
        margin-left: 25px;
    }

    .table-wrapper {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        max-width: 100vw;
        padding-bottom: 50px;
    }

    .table-wrapper::-webkit-scrollbar {
        display: none;
    }    

    table {
        margin-left: 25px;
        margin-right: 25px;
        margin-top: 20px;
        margin-bottom: 30px;
        box-shadow: 2px 2px 20px 5px var(--silver);
        width: 93%;
        
    }

    th {
        padding: 25px;
    }

    td {
        padding: 10px;
    }

}

/* Estilos para mobile */
@media only screen and (max-width: 767px) {

    .title {
        margin-left: 25px;
    }

    .table-wrapper {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        max-width: 100vw;
        padding-bottom: 80px;
    }

    .table-wrapper::-webkit-scrollbar {
        display: none;
    }    

    table {
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 20px;
        margin-bottom: 30px;
        box-shadow: 2px 2px 20px 5px var(--silver);
        width: 96%;
    }

    th {
        padding: 25px;
    }

    td {
        padding: 10px;
    }

}    
</style>