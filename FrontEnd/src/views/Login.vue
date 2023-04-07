<template>
    <div class="login-container">
        <img src="@/assets/logo.png">
        <div class="login">
            <form @submit.prevent="login">
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username">
                <br>
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password">
                <br>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
</template>


<script lang="ts">
import axios from 'axios';
import router from '@/router';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const data = {
        username: this.username,
        password: this.password
      };
      
      try {
        const response = await axios.post('http://localhost:8080/login-user', data);
        const token = response.data.token;

        if (response.data.token !== null) {
          
            // Salva o token JWT em localStorage
            localStorage.setItem('token', token);

            router.push('/items'); // redireciona para a rota /items
        } 

      } catch (error) {
        alert("username or password is invalid");
      }
    },

  },

};

</script>


<style scoped>
@import "../assets/base.css";

.login-container {
    padding: 150px;
    margin-left: 300px;
    margin-right: 300px;
    text-align: center;
    vertical-align: middle;
    
}

.login {
    background-color: var(--white);
    padding-top: 50px;
    padding-bottom: 50px;
    left: 50%;
    border-radius: 15px;
}

label {
    color: var(--azul-principal);
    margin-left: 15px;
    text-align: left !important;
}

input {
    border-radius: 5px;
    margin-left: 15px;
    width: 30%;
    height: 30px;
}

button {
    border-radius: 5px;
    background-color: var(--azul-principal);
    color: var(--white);
    padding: 5px;
}

img {
    left: 50%;
    height: 50px;
    width: auto;
}

</style>