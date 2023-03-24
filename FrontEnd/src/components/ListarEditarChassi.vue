<template>
    <div>
        <table>
            <tr>
                <th>Nº Chassi</th>
                <th>Data de Cadastro</th>
                <th>Status</th>
            </tr>
                <tr v-for="chassi in chassis" :key="chassi.id">
                    <td>{{ chassi.id }}</td>
                    <td>{{ chassi.data }}</td>
                    <div v-if="edicao">
                    <td>
                        <select>
                            <option value="Teste 1">Teste 1</option>
                            <option value="Teste 2">Teste 2</option>
                        </select>
                    </td>
                    <td><button @click.prevent="confirmarEdicao(chassi.status)">Confirmar</button></td>
                    <td><button @click.prevent="cancelarEdicao">Cancelar</button></td>
                    </div>           
                    <div v-else>
                    <td>{{ chassi.status }}</td>
                    <td><button @click.prevent="editarChassi"><i class="fa-solid fa-pen"></i></button></td>
                    <td><button @click.prevent="deletarChassi(chassi.id)"><i class="fa-sharp fa-solid fa-trash"></i></button></td>
                    </div>    
                </tr>
        </table> 

    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue'

export default {
    data() {
        return {
            chassis: [{id: 3, data: '03/07/1996', status: 'Teste 1'},
                       {id: 5, data: '05/08/2004', status: 'Teste 2'}],
            edicao: false,           
        }
    },

    mounted() {
        
       this.listarChassis();

        setInterval(() => {
            this.listarChassis()
        }, 1000);

    },

    methods: {
        
        async listarChassis() {
	        
            this.chassis = (await axios.get('REQUISIÇÃO')).data
         },

        editarChassi() {
            this.edicao = true;
        },
        
        async deletarChassi(chassiID: number) {
            await axios.get('REQUISIÇÃO/' + chassiID)
        },

        cancelarEdicao() {
            this.edicao = false;
        },

        async confirmarEdicao(status: string) {
            this.edicao = false;

            await axios.get('REQUISIÇÃO/' + status)
        }

    },
}
</script>


<style scoped>

table, th, td {
    border: 1px solid rgb(216, 210, 210);
    height: 30px;
}

table {
        width: 50%;
        font-size: 0.8em;
        border-collapse: collapse;
        margin: 0 auto;
        height: 100px;
        margin-top: -19%;
        margin-left: 550px;

    }
    
    th {
        text-align: center;
        color: var(--azul-embraer);
        width:100px;
        padding: 15px;
    }
    
    td {
        text-align: center;
        width:100px;
		height:30px;
        padding: 15px;

    }

    
    
    tr {
        background-color: #f2f2f2;
    }
    

    select {
        width: 70%;
        padding: 5px;
        border-radius: 4px;
        border: none;
    }

    select:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem var(--azul-claro-light);
    }
    
    button {
        background-color: var(--azul-embraer);
        border: none;
        color: white;
        padding: 3px 10px;
        display: inline-block;
        cursor: pointer;
        border-radius: 4px;
        transition: 0.1s all;
    }
    
    button:hover {
        opacity: 0.8;
    }
/* --------------- Media Queries -------------------- */

/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {

}

/* Estilos para mobile */
@media only screen and (max-width: 767px) {
    table {
        width: 90%;
        font-size: 0.8em;
        padding: 40px;
        border-collapse: collapse;
        margin: 0 auto;
        margin-top: 6%;
        height: 100px;

    }
    
    th {
        text-align: left;
    }
    
    td {
        text-align: center;
        width:150px;
		height:30px;
    }
    
    tr {
        background-color: #f2f2f2;
        
    }
    

    select {
        width: 70%;
        padding: 5px;
        border-radius: 4px;
        border: none;
    }

    select:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem var(--azul-claro-light);
    }
    
    button {
        background-color: var(--azul-embraer);
        border: none;
        color: white;
        padding: 3px 10px;
        display: inline-block;
        cursor: pointer;
        border-radius: 4px;
        transition: 0.1s all;
    }
    
    button:hover {
        opacity: 0.8;
    }
}

</style>