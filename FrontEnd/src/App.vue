<template>
  <div id="app">

    <div class="wrapper">

      <nav v-if="isMobile" class="mobile-header">
        <div class="mobile-header-itens">
          <a class="mobile-logo">
            <img src="@/assets/logo.svg" alt="Logo">
          </a>
          <a class="mobile-user">
            <router-link to="/"><i class="fa-solid fa-circle-user"></i></router-link> 
          </a>
        </div>
      </nav>

      <nav v-else-if="isDesktop" class="desktop-navbar">
        <div class="desktop-navbar-header">
          <img src="@/assets/logo.svg" alt="Logo">
        
          <ul class="desktop-nav">
            <li id="user-icone"><router-link to="/"><i class="fa-solid fa-circle-user"></i></router-link></li>
            <li><router-link to="/notificacoes">Notificações</router-link></li>
            <li><router-link to="/painel-adm">Admin</router-link></li>
            <li><router-link to="/sbs">SBs</router-link></li>
            <li><router-link to="/avioes">Aviões</router-link></li>
          </ul>
        </div>  
      </nav>

      <div class="container-pesquisa">
        <div class="container-pesquisa">
          <div class="pesquisar">
              <input v-if="$route.meta.showPesquisar" type="text" class="formulario" :placeholder="$route.meta.placeHolderValue">
              <h3 v-if="$route.meta.showH3">{{ $route.meta.tituloValue }}</h3>
          </div>
        </div>
      </div>

    </div>  


    <router-view />


    <footer v-if="isMobile" class="mobile-navbar">
          <nav>
            <ul class="mobile-navbar-itens">
              <li><router-link to="/avioes"><i class="fa-solid fa-plane-departure"></i></router-link></li>
              <li><router-link to="/sbs"><i class="fa-sharp fa-solid fa-screwdriver-wrench"></i></router-link></li>
              <li><router-link to="/painel-adm"><i class="fa-solid fa-chart-line"></i></router-link></li>
              <li><router-link to="/notificacoes"><i class="fa-regular fa-bell"></i></router-link></li>
            </ul>
          </nav>
    </footer>
  </div>
</template>


<script lang="ts">

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
@import "./assets/base.css";

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
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 3%;
}
.mobile-logo img {
  float: left;
  height: 25px;
}
.mobile-user {
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  float: right;
}
.mobile-user i {
  vertical-align: middle;
  color: var(--azul-principal);
  font-size: 25px;
}
/* Navbar Mobile */
footer {
  background-color: var(--silver);
  width: 100%;
}
.mobile-navbar {
  bottom: 0;
  position: fixed;
}
.mobile-navbar-itens {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
}
.mobile-navbar-itens li {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 0 27%;
}
.mobile-navbar-itens i {
  color: var(--azul-principal);
  font-size: 25px;
}
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
  margin-top: 0.5%
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
.desktop-nav a i {
  font-size: 28px;
  color: var(--azul-principal);
}
.desktop-nav li {
  font-size: 18px;
  font-weight: var(--semi-bold);
  float: right;
}
.desktop-nav li a {
  display: block;
  color: var(--azul-principal);
  text-align: center;
  padding: 5px 20px;
  text-decoration: none;
}
.desktop-nav li a:hover:not(#user-icone) {
  color: var(--white); 
  transition: 0.3s;
}
#user-icone i:hover {
  opacity: 0.7;
  transition: 0.1s;
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
    opacity: 0.6;
    padding: 1rem 2rem;
    font-size: 18pt;
    border: none;
    border-radius: 5px;
    outline: none;
    color: var(--light-dark-color);
    width: 500px;
}
/* --------------- Media Queries -------------------- */
/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  /* Classe wrapper */
.wrapper {
  background-image: url(@/assets/aeroporto.jpg);
  height: 200px;
}
/* Container Pesquisa */
.container-pesquisa {
  margin-top: 6%;
}
/* Classes referentes ao formulário de pesquisa */
.pesquisar h3 {
    margin-right: 1rem;
    font-size: 2rem;
    color: var(--azul-profundo);
    font-weight: 500;
    margin-bottom: 1.5rem;
}
.pesquisar .formulario {
    opacity: 0.7;
    padding: 1rem 1rem;
    font-size: 14pt;
    border: none;
    border-radius: 5px;
    outline: none;
    color: var(--light-dark-color);
    width: 300px;
    height: auto;
}
  
}
/* Estilos para mobile */
@media only screen and (max-width: 767px) {
  /* Classe wrapper */
.wrapper {
  background-image: url(@/assets/aeroporto-mobile.jpg);
  height: 188px;
}
/* Container Pesquisa */
.container-pesquisa {
  margin-top: 9%;
}
/* Classes referentes ao formulário de pesquisa */
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
    padding: 1rem 0.8rem;
    font-size: 12pt;
    border: none;
    border-radius: 5px;
    outline: none;
    color: var(--light-dark-color);
    width: 180px;
    height: 10px;
}
}
</style>

