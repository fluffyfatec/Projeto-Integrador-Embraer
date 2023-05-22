<template>
    <div>
        <ReturnSbs v-if="searchTerm"></ReturnSbs>
        <div v-else>
            <div class="div-header">
                <h1 class="title">Chassis of {{ $route.params.sb }} ({{ $route.params.part === 'UNICO' ? 'UNIQUE' : $route.params.part }})</h1>
                <div class="div-btn-download">
                    <button class="btn-download" @click.prevent="showPdfOptions = true">
                        <i class="fa-solid fa-file-arrow-down"></i>
                        <i class="txt-btn-download">Download PDF</i>
                    </button>
                </div>
                <div v-if="showPdfOptions" class="filter-download">
                    <h3 class="title-popup">Choose what you want in the report</h3>
                    <div class="check-container">
                        <div class="check-label">
                            <input type="checkbox" v-model="pdf.incorporated" :value="true">
                            <label>Show Incorporated</label>
                        </div>

                        <div class="check-label">
                            <input type="checkbox" v-model="pdf.applicable" :value="true">
                            <label>Show Applicable</label>
                        </div>

                        <div class="check-label">
                            <input type="checkbox" v-model="pdf.notApplicable" :value="true">
                            <label>Show Not Applicable</label>
                        </div>                
                    </div>
                    
                    <button v-if="pdf.incorporated !== false || pdf.applicable !== false || pdf.notApplicable !== false" class="btn-popup" 
                            @click.prevent="downloadPDF">Confirm</button>
                    <button @click.prevent="showPdfOptions = false" class="btn-popup btn-popup2">Cancel</button>        
                </div>
            </div>
            <div class="filter-container">
                <div class="filter">
                    <div class="micro-container">
                        <input type="checkbox" v-model="ApplicableFilter">
                        <label>Applicable</label>
                    </div>
                    <div class="micro-container">
                        <input type="checkbox" v-model="NotApplicableFilter">
                        <label>Not Applicable</label>
                    </div>
                    <div class="micro-container">
                        <input type="checkbox" v-model="IncorporatedFilter">
                        <label>Incorporated</label>
                    </div>               
                </div>
                <div v-if="!createNew" class="new-sb">
                        <button @click.prevent="createNew = true">
                            <i class="fa-solid fa-plus"></i> New Chassis
                        </button>
                    </div>
            </div> 
            <div class="table-wrapper">
                <table cellspacing="0">
                    <tr class="table-header">
                        <th>Chassis</th>
                        <th>Applicable</th>
                        <th>Not Applicable</th>
                        <th>Incorporated</th>
                        <th>Options</th>
                    </tr>
                    <tr v-if="createNew">
                        <td colspan="4" class="full-width">
                                <div class="create-container">
                                    <div class="chassis">
                                        <select v-model="newSb.chassis">
                                            <option v-for="c in select_chassis">{{ c.chassi }}</option>
                                        </select>
                                    </div>
                                    <div class="sb-status">
                                        <select v-model="newSb.status">
                                            <option>APPLICABLE</option>
                                            <option>NOT APPLICABLE</option>
                                            <option>INCORPORATED</option>
                                        </select>
                                    </div>
                                    
                                </div> 
                        </td>
                        <td>
                            <div class="create-btn">
                                        <div class="button-submit">
                                            <button v-if="newSb.chassis !== null && newSb.status !== null" @click.prevent="registerNew" class="submit">
                                                <i class="fa-solid fa-check"></i>            
                                            </button>
                                        </div>
                                        <div class="button-cancel">
                                            <button @click.prevent="createNew = false">
                                                <i class="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    </div>
                        </td>
                    </tr>
                    <tr v-for="plane in planes" :key="plane.chassi">
                        <td>{{ plane.chassi }}</td>
                        <td>
                            <input v-if="!plane.edition" type="checkbox" :class="{ 'disabled': !plane.edition }" v-model="plane.checkbox1" value="APPLICABLE" :checked="plane.status == 'APPLICABLE' ? plane.checkbox1 = true : plane.checkbox1 = false">
                            <input v-else type="checkbox" :value="plane.id" :checked="plane.selectedStatus === 'APPLICABLE'" @change="plane.selectedStatus = 'APPLICABLE'">
                        </td>
                        <td>
                            <input v-if="!plane.edition" type="checkbox" :class="{ 'disabled': !plane.edition }" v-model="plane.checkbox2" value="NOT APPLICABLE" :checked="plane.status != 'APPLICABLE' && plane.status != 'INCORP' && plane.status != 'INCORPORATED' && plane.status != 'INCOPORATED' ? plane.checkbox2 = true : plane.checkbox2 = false">
                            <input v-else type="checkbox" :value="plane.id" :checked="plane.selectedStatus === 'NOT APPLICABLE'" @change="plane.selectedStatus = 'NOT APPLICABLE'">
                        </td>
                        <td>
                            <input v-if="!plane.edition" type="checkbox" :class="{ 'disabled': !plane.edition }" v-model="plane.checkbox3" value="INCORPORATED" :checked="plane.status == 'INCORP' || plane.status == 'INCORPORATED' || plane.status == 'INCOPORATED' ? plane.checkbox3 = true : plane.checkbox3 = false">
                            <input v-else type="checkbox" :value="plane.id" :checked="plane.selectedStatus === 'INCORPORATED'" @change="plane.selectedStatus = 'INCORPORATED'">
                        </td>                    
                        <td>
                            <button v-if="!plane.edition" @click.prevent="plane.edition = true">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button v-if="plane.edition" @click.prevent="saveNewStatus(plane.chassi, plane.selectedStatus); plane.edition = false">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button v-if="plane.edition" @click.prevent="plane.edition = false" class="x-btn">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>    
        </div>    
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main';
import ReturnSbs from '@/components/ReturnSbs.vue';
import globalData from '@/globals';
import FileSaver from 'file-saver';

export default {
    
    data() {
        return {
            createNew: false,
            planes: [],
            select_chassis: [],
            searchTerm: '',
            ApplicableFilter: true,
            NotApplicableFilter: true,
            IncorporatedFilter: true,
            planesApplicable: [],
            planesNotApplicable: [],
            planesIncorporated: [],
            g: globalData,
            newSb: {
                name: this.$route.params.sb,
                part: this.$route.params.part,
                status: null,
                chassis: null,
            },
            pdf: {
                incorporated: false,
                applicable: false,
                notApplicable: false,
            },
            showPdfOptions: false,
        }
    },

    mounted() {
        this.getPlanes();
        this.getSelectChassis();

        if (this.g.userRole == "EDITOR" || this.g.userRole == "ADMIN") {
            return
        } else {
            this.$router.push('/items');
        };
    },

    created() {
        
        eventBus.$on('search-term-updated', (searchTerm: string) => {
            this.searchTerm = searchTerm
        });
        
        eventBus.$on('click-event-url', (searchTerm: string) => {
            this.searchTerm = '';
            this.getPlanes();
        });


        this.filterApplicable();
        this.filterNotApplicable();
        this.filterIncorporated();
        
    },

    watch: {
    ApplicableFilter: function() {
      this.filterApplicable();
    },

    NotApplicableFilter: function() {
      this.filterNotApplicable();
    },

    IncorporatedFilter: function() {
      this.filterIncorporated();
    },

  },

    updated() {

    },
    
    methods: {
        async getPlanes() {
            const sb = this.$route.params.sb;
            const part = this.$route.params.part;

            if (this.g.userRole === 'ADMIN') {
            const response = await axios.get('http://localhost:8080/chassi/sb/' + sb + '/' + part);
            this.planes = response.data.map((item: String, index: number) => ({
                id: index,
                chassi: item.chassi,
                status: item.sb_status,
                checkbox1: false,
                checkbox2: false,
                checkbox3: false,
                edition: false,
                selectedStatus: null
                }));
            };

            if (this.g.userRole === 'EDITOR') {
            const response = await axios.get('http://localhost:8080/chassi/sb/editor/' + sb + '/' + part);
            this.planes = response.data.map((item: String, index: number) => ({
                id: index,
                chassi: item.chassi,
                status: item.sb_status,
                checkbox1: false,
                checkbox2: false,
                checkbox3: false,
                edition: false,
                selectedStatus: null
                }));
            };

        },

        filterApplicable() {
            if (!this.ApplicableFilter) {
                this.planesApplicable = this.planes.filter(item => String(item.status) === 'APPLICABLE');
                this.planes = this.planes.filter(item => String(item.status) !== 'APPLICABLE');
                console.log(this.planesApplicable);
            } else {
               this.planes.push(...this.planesApplicable);
               
               
            }
        },

        filterNotApplicable() {
            if (!this.NotApplicableFilter) {
                this.planesNotApplicable = this.planes.filter(item => String(item.status) !== 'APPLICABLE' && String(item.status) !== 'INCORP' && 
                                                   String(item.status) !== 'INCORPORATED' && String(item.status) !== 'INCOPORATED'); 
                this.planes = this.planes.filter(item => String(item.status) === 'APPLICABLE' || String(item.status) || 'INCORP' || 
                                                   String(item.status) === 'INCORPORATED' || String(item.status) === 'INCOPORATED');
            } else {
                this.planes.push(...this.planesNotApplicable);
            }
        },

        filterIncorporated() {
            if (!this.IncorporatedFilter) {
                this.planesIncorporated = this.planes.filter(item => String(item.status) === 'INCORP' || String(item.status) === 'INCORPORATED' || String(item.status) === 'INCOPORATED'); 
                this.planes = this.planes.filter(item => String(item.status) !== 'INCORP' && String(item.status) !== 'INCORPORATED' && String(item.status) !== 'INCOPORATED');
            } else {
                this.planes.push(...this.planesIncorporated);
            }
        },

        async saveNewStatus(chassis: number, status: string) {

            var sb = this.$route.params.sb;
            var part = this.$route.params.part;

            if (part === 'UNIQUE') {
                part = 'UNICO';
            };
            
            const response = await axios.get('http://localhost:8080/edit-sb-status/' + sb + '/' + part + '/' + chassis + '/' + status);

            if (response.data === 'The sb already has this status.') {
                
                alert('The Service Bulletin already has this status.');

            }

            this.getPlanes();
        },

        async registerNew() {

            if (this.newSb.part === 'UNIQUE') {
                this.newSb.part = 'UNICO';
            };

            await axios.post('http://localhost:8080/register-new-sb-or-chassi', this.newSb, {
                    headers: {
                    'Content-Type': 'application/json'
                    }

                });

            this.getPlanes();
            this.getSelectChassis();   
            
            this.createNew = false;
            this.newSb.status = null;
            this.newSb.chassis = null;

        },

        async getSelectChassis() {
            var sb = this.$route.params.sb;
            var part = this.$route.params.part;

            if (part === 'UNIQUE') {
                part = 'UNICO';
            };

            if (this.g.userRole === 'ADMIN') {
            const response = await axios.get('http://localhost:8080/chassi/list/admin/exclude-how-have-sb/' + sb + '/' + part);
            this.select_chassis = response.data.map((item: String) => ({
                chassi: item.chassi_id,
                }));
            };

            if (this.g.userRole === 'EDITOR') {
            const response = await axios.get('http://localhost:8080/chassi/list/editor/exclude-how-have-sb/' + sb + '/' + part);
            this.select_chassis = response.data.map((item: String) => ({
                chassi: item.chassi_id,
                }));
            };

        },

        async downloadPDF() {

            var sb = this.$route.params.sb;
            var part = this.$route.params.part;

            if (part === 'UNIQUE') {
                part = 'UNICO';
            };

            // Faz a requisição para o método do Spring Boot
            if (this.g.userRole === 'ADMIN') {
                const response = await axios.get('http://localhost:8080/report-sbs-admin/' + sb + '/' + part + '/' + this.pdf.incorporated + '/' + this.pdf.applicable + '/' + this.pdf.notApplicable, {
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
            };

            if (this.g.userRole === 'EDITOR') {
                const response = await axios.get('http://localhost:8080/report-sbs-editor/' + sb + '/' + part, {
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
            };

        },
   
    },

    computed: {
        filteredApplicable() {
        return this.planes;
        },

        filteredNotApplicable() {
        return this.planes;
        },

        filteredIncorporated() {
        return this.planes;
        },

    },


    components: {
        ReturnSbs,
    },
}
</script>

<style scoped>
@import "../assets/base.css";
.filter{
    display: flex;  
    justify-content: center;
    padding-left: 3.8rem;
        
    }
    .micro-container{
    border: 1px solid;
    border-color: var(--azul-principal);
    border-radius: 5px;
    background-color: var(--platinum);
    margin-right: 20px;
    padding: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        
    }

    .div-header{
        display: flex;
        flex-direction: column;
        padding-bottom: 1rem;
    }

  .btn-download{
    align-self:flex-end;
    margin-left: 2rem;
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

    input[type="checkbox"]:checked {
        background-color: var(--azul-principal) !important; /* define a cor vermelha para o checkbox quando selecionado */
        border-color: var(--azul-claro);
    }
    label{
        color: var(--azul-principal);
    }
    .micro-container{
    border: 1px solid;
    border-color: var(--azul-principal);
    border-radius: 5px;
    background-color: var(--platinum);
    margin-right: 20px;
    padding: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
   
    }

    input[type=checkbox].disabled {
    pointer-events: none;
    }

    tr:nth-child(even)    { background-color: rgba(224, 224, 225, 0.5);}

    .select-part{
        border-color: var(--azul-claro-light);
        border-radius: 5px;
        width: 7rem;
        height: 6rem;
        font-size:large;
    }

    .sb-status select{
        border-color: var(--azul-claro-light);
        border-radius: 5px;
        width: 12rem;
        height: 2.1rem;
        font-size:large;
    }

    .create-container{
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    input{
        margin: 0;
    }

    .create-btn{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .new-sb{
        display: flex;
        justify-content: center;
        padding-top: 1rem;
    }
    .new-sb button{
        font-size: 18px;
        margin-left: 10px;
        width: 14rem;
        height: 3rem;
        border-radius: 5px;
        background-color: var(--azul-principal);
        color: var(--white);
        border-color: var(--azul-claro-light);
    }

    button{
        height: 30px;
        width: 30px;
    }

    .filter-container{
        display: flex;
        flex-direction: column;
    }

    .button-cancel button{
        background-color: #f55133;
        border-color: rgb(44, 41, 41);
    }

    .x-btn{
        background-color: #f55133;
        border-color: rgb(44, 41, 41);

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

    .table-header {
        
    }

    th {
        padding: 25px;
    }

    td {
        padding: 10px;
    }

    input[type=checkbox] {
        -ms-transform: scale(1.5); /* IE */
        -moz-transform: scale(1.5); /* FF */
        -webkit-transform: scale(1.5); /* Safari and Chrome */
        -o-transform: scale(1.5); /* Opera */
        transform: scale(1.5);
        padding: 10px;
    }

    

}

/* Estilos para mobile */
@media only screen and (max-width: 767px) {
    .filter{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0;
        
    }

    
    .micro-container{
        display: flex;
        align-self: center;
        width: 40%;
        height: auto;
        margin-left: 2rem;
        margin-bottom: 1rem;
        
    }
    .micro-container label{
        display: flex;
        align-self: center;
    }


    .div-header{
        display: flex;
        flex-direction: column;
        padding-bottom: 1rem;
    }

    .btn-download{
    align-self:center;
    margin-left: 2rem;
     }
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

    .table-header {
        
    }

    th {
        padding: 25px;
    }

    td {
        padding: 10px;
    }

    input[type=checkbox] {
        -ms-transform: scale(1); /* IE */
        -moz-transform: scale(1); /* FF */
        -webkit-transform: scale(1); /* Safari and Chrome */
        -o-transform: scale(1); /* Opera */
        transform: scale(1);
        padding: 10px;
    }

}    

</style>