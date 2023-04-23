<template>
    <div>
        <h1 class="title">List of Items</h1>
        <div class="table-wrapper">
            <table cellspacing="0">
                <thead>
                    <tr class="table-header">
                        <th>Item</th>
                        <th>Date Register</th>
                        <th>Option</th>
                    </tr>
                </thead>    
                <tbody v-for="item in items" :key="item.id">
                    <tr>
                        <td>{{ item.name }}</td>
                        <td>{{ item.dt_register }}</td>
                        <td v-if="itemSelected !== item.id">
                            <button @click.prevent="ItemEdit(item.id)">
                                <font-awesome-icon :icon="['fas', 'pen-to-square']"></font-awesome-icon>
                            </button>
                        </td>
                    </tr>
                        <td colspan="3" class="full-width">
                        <div v-if="edition && itemSelected === item.id" class="table-new-line">
                            <select class="select-condit-formula" v-model="condition_formula" placeholder="Select a formula...">
                                <option>chassis ></option>
                                <option>sb1</option>
                                <option>(sb1 OR sb2) AND sb3</option>
                                <option>sb1 AND sb2</option>
                                <option>sb1 OR sb2</option>
                                <option>others</option>        
                            </select>
                            <EditFormula1 v-if="condition_formula === 'chassis >'" :itemId="item.id" :toString="item.id" :toLocaleString="item.id"></EditFormula1>
                            <EditFormula2 v-else-if="condition_formula === 'sb1'" :itemId="item.id" :toString="item.id" :toLocaleString="item.id""></EditFormula2>
                            <EditFormula3 v-else-if="condition_formula === '(sb1 OR sb2) AND sb3'" :itemId="item.id" :toString="item.id" :toLocaleString="item.id"></EditFormula3>
                            <EditFormula4 v-else-if="condition_formula === 'sb1 AND sb2'" :itemId="item.id" :toString="item.id" :toLocaleString="item.id"></EditFormula4>
                            <EditFormula5 v-else-if="condition_formula === 'sb1 OR sb2'" :itemId="item.id" :toString="item.id" :toLocaleString="item.id"></EditFormula5>
                            <EditFormulaX v-else-if="condition_formula === 'others'"></EditFormulaX>
                        </div>
                        </td>
                    
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


export default {
    data() {
        return {
            items: [],
            edition: false,
            condition_formula: null,    
            itemSelected: '',       
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
                dt_register: item.itemDtregister 
            }));

         },

        ItemEdit(itemId: string) {

            this.itemSelected = itemId;
            
            this.getCondition(itemId);
            
            this.edition = true;

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
    display: flex;
    flex-direction: row;
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

    .table-header {
        
    }

    th {
        padding: 25px;
    }

    td {
        padding: 10px;
    }

}    
</style>