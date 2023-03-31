<template>
  <div id="app">

    <div class="wrapper">

      <nav v-if="isMobile" class="mobile-header">
        <div class="mobile-header-itens">
          <a class="mobile-logo">
            <img src="@/assets/logo.png" alt="Logo">
          </a>
          <div class="mobile-icons">
            <a class="mobile-notification">
              <router-link to="/notificacoes"><i class="fa-solid fa-circle-exclamation"></i></router-link>
            </a>
            <a class="mobile-user">
              <router-link to="/"><i class="fa-solid fa-circle-user"></i></router-link> 
            </a>
          </div>
        </div>
      </nav>

      <nav v-else-if="isDesktop" class="desktop-navbar">
        <div class="desktop-navbar-header">
          <img src="@/assets/logo.png" alt="Logo">
        
          <ul class="desktop-nav">
            <li id="user-icone"><router-link to="/"><i class="fa-solid fa-circle-user"></i></router-link></li>
            <li><router-link to="/notifications">Notifications</router-link></li>
            <li><router-link to="/admin-panel">Admin</router-link></li>
            <li><router-link to="/sbs">SBs</router-link></li>
            <li><router-link to="/planes">Planes</router-link></li>
            <li><router-link to="/items">Items</router-link></li>
          </ul>
        </div>  
      </nav>

      <ContainerSearch></ContainerSearch>

    </div>  


    <router-view />


    <footer v-if="isMobile" class="mobile-navbar">
          <nav>
            <ul class="mobile-navbar-itens">
              <li><router-link to="/planes"><i class="fa-solid fa-plane-departure"></i></router-link></li>
              <li><router-link to="/sbs"><i class="fa-sharp fa-solid fa-screwdriver-wrench"></i></router-link></li>
              <li><router-link to="/items"><i class="fa-solid fa-clipboard-check"></i></router-link></li>
              <li><router-link to="/admin-panel"><i class="fa-solid fa-chart-line"></i></router-link></li>
            </ul>
          </nav>
    </footer>
  </div>
</template>


<script lang="ts">
import ContainerSearch from './components/ContainerSearch.vue'

export default {
  data() {
    return {
      isMobile: false,
      isDesktop: false,      
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkIfMobile);
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfDesktop);
    this.checkIfDesktop();

  },

  created() {
    
  },

  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth < 768; // Define como mobile para telas menores que 768px de largura
    },
    checkIfDesktop() {
      this.isDesktop = window.innerWidth >= 768; // Define como desktop e tablet para telas maiores ou iguais a 768px de largura
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.checkIfMobile);
    },

  },
  
  components: {
    ContainerSearch,
  }
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
  height: 30px;
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
.mobile-notification{
  list-style-type: none;
  padding: 0;
  overflow: hidden;
}
.mobile-notification i{
  vertical-align: middle;
  color: var(--azul-principal);
  font-size: 25px;
}
.mobile-icons{
  float: right;
  display: flex;
  gap: 20px;
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
  height: 40px;
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
  background-image: url(@/assets/webplanner-desktop.gif);
  background-size: 100% 377px;                     
  background-repeat: no-repeat;
  background-position: center center;
  height: 377px;
}


/* --------------- Media Queries -------------------- */
/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  /* Classe wrapper */
.wrapper {
  background-image: url(@/assets/webplanner-mobile.gif);
  background-size: 100% 200px;
  height: 200px;
} 
}

/* Estilos para mobile */
@media only screen and (max-width: 767px) {

  /* Classe wrapper */
.wrapper {
  background-image: url(@/assets/webplanner-mobile.gif);
  background-size: 100% 188px;
  height: 188px;
}
}
</style>

