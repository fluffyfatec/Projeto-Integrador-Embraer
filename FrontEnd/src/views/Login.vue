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
import globalData from '@/globals'

export default {
  data() {
    return {
      username: '',
      password: '',
      g: globalData,
    };
  },

  mounted() {
        if (this.g.userRole == "PILOT" || this.g.userRole == "EDITOR" || this.g.userRole == "ADMIN") {
          this.$router.go(-1);
        } else {
            return
        }

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

            location.reload(); // recarrega a página para reiniciar o mounted()
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
  padding-top: 12%;
    padding-left: 10%;
    padding-right: 10%;
    margin-left: 20rem;
    margin-right: 20rem;
    text-align: center;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
}

.login {
    display: flex;
    justify-content: center;
    background-color: var(--white);
    padding-top: 3rem;
    padding-bottom: 3rem;
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
    margin: 1rem;
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
  max-width: 50%;
  height: auto;
}

/* --------------- Media Queries -------------------- */

/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .login-container {
    padding-top: 50%;
    margin-left: 50px;
    margin-right: 50px;
    vertical-align: middle;
  }

  input {
    width: 80%;
  }

  button {
    width: 80%;
  }
}

/* Estilos para mobile */
@media only screen and (max-width: 767px) {

  app {
    vertical-align: middle;
  }
  .login-container {
    padding-top: 50%;
    margin: 0 auto;
    }

    .login {
      width: 100%;
      border-radius: 1rem;
      
    }
    input {
    width: 80%;
  }

  button {
    width: 80%;
  }
  }  
  @media only screen and (width: 1440px) {

    .login-container {
    padding-top: 20%;
    padding-left: 10%;
    padding-right: 10%;
    margin-left: 20rem;
    margin-right: 20rem;
    text-align: center;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
}


  }
</style>