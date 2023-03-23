<template>
    <div>
        <h1>Cadastro do Chassi</h1>
        <form @submit.prevent="cadastrarChassi">
            <label>Número:</label>
            <input type="number" v-model="chassi.id">
            <br>
            <label>Status:</label>
            <select v-model="chassi.status">
                <option value="Teste 1">Teste 1</option>
                <option value="Teste 2">Teste 2</option>
            </select>
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
    data() {

        return {
            chassi: {
                id: '',
                status: '',
            }
        }

    },

    methods: {

        async cadastrarChassi() {
            await axios.post('REQUISICAO', 
                { 
                    id: this.chassi.id,
                    status: this.chassi.status
            });

        },


    }

}
    
</script>

<style scoped>
form {

}
</style>