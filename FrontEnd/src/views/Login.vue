<template>
    <div class="login-container">
        
        <div class="login">
            <form @submit.prevent="login">
                <img src="@/assets/logo.png">
                <br>
                <input type="text" id="username" placeholder="USERNAME" v-model="username">
                <br>
                <input type="password" id="password" placeholder="PASSWORD" v-model="password">
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
    display: flex;
    flex-direction: column;
}

.login {
    background-color: var(--white);
    padding-top: 50px;
    padding-bottom: 50px;
    left: 50%;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

}

input {
    transition: 0.5s;
    width: 50%;
    height: 30px;
    border:2px solid ; 
    border-top:none;
    border-left: none;
    border-right: none ;
    border-color: var(--azul-embraer-dark);
    
}
input:focus{
  outline: none !important;
  border-radius: 3px;
  border-color: var(--azul-embraer-light);
  background-color: var(--platinum);
}


button {
    width: 50%;
    height: 30px;
    border-radius: 5px;
    border-color: var(--azul-embraer-light) ;
    background-color: var(--azul-principal);
    color: var(--white);
    padding: 5px;
    cursor:pointer;
}

img {
    padding-right: 5px;
    height: 50px;
    width: auto;
}

</style>