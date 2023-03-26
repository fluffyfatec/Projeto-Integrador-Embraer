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
                    <td><button @click.prevent="editarChassi">Editar</button></td>
                    <td><button @click.prevent="deletarChassi(chassi.id)">Deletar</button></td>
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
</style>