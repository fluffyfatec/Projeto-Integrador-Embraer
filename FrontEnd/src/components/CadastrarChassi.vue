<template>
    <div>
        <h1>Cadastro do Chassi</h1>
        <form @submit.prevent="cadastrarChassi" class="form-container">
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
    max-width: 300px;
    margin: 40px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
}
.form-container {
    position: relative;
    border: 1px solid #ccc; 
    padding: 20px; 
    border-radius: 5px;
}


h1{
    font-size: 2rem;
    color: var(--azul-principal);
    font-weight: var(--medium);
    margin: 40px;
    margin-top: 2%;
}

label {
    font-weight: var(--medium);
    color: var(--azul-claro-dark);
    font-size: 15pt;
}

input[type=number], select {
    padding: 10px;
    border-radius: 5px;
    border: none;
    width: 100%;
    box-sizing: border-box;      
}

input[type=number]:focus, select:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem var(--azul-claro-light);
}

button[type=submit] {
    padding: 10px 20px;
    background-color: var(--azul-embraer);
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 4%;
    margin-left: auto;
}

button[type=submit]:hover {
    background-color: #0056b3;
}

/* --------------- Media Queries -------------------- */

/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {

}

/* Estilos para mobile */
@media only screen and (max-width: 767px) {

    form {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: auto;
}
.form-container {
    border: 1px solid #ccc; 
    padding: 20px; 
    border-radius: 5px;
}


h1{
    font-size: 1.5rem;
    color: var(--azul-principal);
    font-weight: var(--medium);
    margin: 10px 30px;
}

label {
    font-weight: var(--medium);
    color: var(--azul-claro-dark);
    font-size: 15pt;
}

input[type=number], select {
    padding: 10px;
    border-radius: 5px;
    border: none;
    width: 100%;
    box-sizing: border-box;      
}

input[type=number]:focus, select:focus {
    outline: none; 
    box-shadow: 0 0 0 0.2rem var(--azul-claro-light);
}

button[type=submit] {
    padding: 10px 20px;
    background-color: var(--azul-embraer);
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 4%;
    margin-left: auto;
}

button[type=submit]:hover {
    background-color: #0056b3;
}

    
}


</style>