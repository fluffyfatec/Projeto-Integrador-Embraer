<template>
  <div id="app">

    <div class="wrapper">

      <nav v-if="isMobile" class="mobile-header">
        <div class="mobile-header-itens">
          <a class="mobile-logo">
            <img src="@/assets/logo.svg" alt="Logo">
          </a>
          <a class="mobile-user">
            <router-link to="/"><i class="fas fa-user"></i></router-link> 
          </a>
        </div>
      </nav>

      <nav v-else-if="isDesktop" class="desktop-navbar">
        <div class="desktop-navbar-header">
          <img src="@/assets/logo.svg" alt="Logo">
        
          <ul class="desktop-nav">
            <li><router-link to="/">Aviões</router-link></li>
            <li><router-link to="/about">SBs</router-link></li>
            <li><router-link to="/">Admin</router-link></li>
            <li><router-link to="/about">Notificações</router-link></li>
            <li><router-link to="/"><i src="fas fa-user"></i></router-link></li>
          </ul>
        </div>  
      </nav>

      <div class="container-pesquisa">
          <div class="pesquisar">
              <input type="text" class="formulario" placeholder="Pesquise um filme..." id="pesquisa-filme" onkeyup="jsAcharFilmes()" onclick="jsAcharFilmes()">
          </div>
      </div>

    </div>    

    
    

    <router-view />
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      isMobile: false,
      isDesktop: false,
    };
  },
  mounted() {
    window.addEventListener('resize', this.checkIfMobile);
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfDesktop);
    this.checkIfDesktop();
  },
  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth < 768; // Define como mobile para telas menores que 768px de largura
    },
    checkIfDesktop() {
      this.isDesktop = window.innerWidth >= 768; // Define como desktop e tablet para telas maiores ou iguais a 768px de largura
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfMobile);
  },
};
</script>

<style scoped>

/* Header Mobile */
.mobile-header {
  background-color: transparent;
  overflow: hidden;
  margin-left: 2%;
  margin-right: 2%;
}

.mobile-header-itens {
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
}

.mobile-logo img {
  float: left;
  height: 25px;
}

.mobile-user {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  float: right;
}

.mobile-user i {
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  .mobile-header-itens {
    
  }
  
  .mobile-user {
    
  }
}

/* Navbar Mobile */


/* Navbar Desktop */
.desktop-navbar {
  background-color: transparent;
  overflow: hidden;
  margin-left: 2%;
  margin-right: 2%;
}

.desktop-navbar-header {
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
}

.desktop-navbar-header img {
  float: left;
  height: 25px;
}

.desktop-nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.desktop-nav li {
  float: right;
}

.desktop-nav li a {
  display: block;
  color: black;
  text-align: center;
  padding: 5px 20px;
  text-decoration: none;
}

.desktop-nav li a:hover {
  background-color: #111;
}

@media screen and (max-width: 600px) {
  .desktop-logo, .desktop-nav {
    text-align: center;
  }
  
  .desktop-navbar-header {
    width: 100%;
  }
  
  .desktop-nav li {
    float: none;
    display: block;
  }
  
  .desktop-nav li a {
    border-bottom: 1px solid black;
  }
}


/* Classe wrapper */
.wrapper {
  background-image: url(@/assets/aeroporto.jpg);
  background-size: cover;                     
  background-repeat: no-repeat;
  background-position: center center;
  height: 377px;
}


/* Container Pesquisa */
.container-pesquisa {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-top: 8%;
}

/* Classes referentes ao formulário de pesquisa */
.pesquisar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
        -ms-flex-align: stretch;
            align-items: stretch;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    position: relative;
}

.pesquisar h3 {
    -ms-flex-item-align: center;
        align-self: center;
    margin-right: 1rem;
    font-size: 2rem;
    color: var(--azul-profundo);
    font-weight: 500;
    margin-bottom: 1.5rem;
}

.pesquisar .formulario {
    opacity: 0.7;
    padding: 1rem 2rem;
    font-size: 18pt;
    border: none;
    border-radius: 5px;
    outline: none;
    color: var(--light-dark-color);
    width: 500px;
}



</style>
