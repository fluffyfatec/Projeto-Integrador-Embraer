<template>
  <div id="app">

    <div class="wrapper" v-if="!$route.meta.appVueHide">

      <nav v-if="isMobile" class="mobile-header">
        <div class="mobile-header-itens">
          <a class="mobile-logo">
            <img src="@/assets/logo.png" alt="Logo">
          </a>
          <div class="mobile-icons">
            <a v-if="g.adminAuth || g.editorAuth" class="mobile-notification">
              <router-link to="/notificacoes"><i class="fa-solid fa-bell"></i></router-link>
            </a>
            <li class="mobile-user" @click="showDropdown = !showDropdown" v-bind:class="{ 'active': showDropdown }">
              <a><i class="fa-solid fa-circle-user"></i></a>
              <ul v-if="showDropdown" class="dropdown-menu-mobile">
                <li v-if="g.adminAuth"><router-link to="/logs"><i class="fa-solid fa-lock"></i> Logs</router-link></li>
                <li v-if="g.adminAuth"><router-link to="/register-condition"><i class="fa-sharp fa-solid fa-sitemap"></i> Condition</router-link></li>
                <li v-if="g.adminAuth"><router-link to="/register-owner"><img src="./assets/plane.png"> Register Owner</router-link></li>
                <li v-if="g.editorAuth"><router-link to="/register-pilot"><img src="./assets/plane.png"> Register Pilot</router-link></li>
                <li v-if="g.adminAuth"><router-link to="/upload"><i class="fa-solid fa-file-import"></i> Import Data</router-link></li>
                <li><a href="#" @click.prevent="logout"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
              </ul>
            </li>
          </div>
        </div>
      </nav>

      <nav v-else-if="isDesktop" class="desktop-navbar">
        <div class="desktop-navbar-header">
          <img src="@/assets/logo.png" alt="Logo">
        
          <ul class="desktop-nav">
            <li id="user-icone" @click="showDropdown = !showDropdown" v-bind:class="{ 'active': showDropdown }"
            :style="showDropdown && g.adminAuth ? { 'padding-bottom': '225px', 'padding-left':'60px' } : {} ||
            showDropdown && g.editorAuth ? { 'padding-bottom': '100px' } : {} || 
            showDropdown && g.pilotAuth ? { 'padding-bottom': '50px', 'padding-left':'50px' } : {}">
              <a><i class="fa-solid fa-circle-user"></i></a>
              <ul v-if="showDropdown" class="dropdown-menu">
                <li v-if="g.adminAuth"><router-link to="/logs"><i class="fa-solid fa-lock"></i> Logs</router-link></li>
                <li v-if="g.adminAuth"><router-link to="/register-condition"><i class="fa-sharp fa-solid fa-sitemap"></i> Condition</router-link></li>
                <li v-if="g.adminAuth"><router-link to="/register-owner"><img src="./assets/plane.png"> Register Owner</router-link></li>
                <li v-if="g.editorAuth"><router-link to="/register-pilot"><img src="./assets/plane.png"> Register Pilot</router-link></li>
                <li v-if="g.adminAuth"><router-link to="/upload"><i class="fa-solid fa-file-import"></i> Import Data</router-link></li>
                <li><a href="#" @click.prevent="logout"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
              </ul>
            </li>
            <li v-if="g.adminAuth || g.editorAuth" id="notification-icone"><router-link to="/notifications"><i class="fa-solid fa-bell"></i></router-link></li>
            <li v-if="g.adminAuth"><router-link to="/analytics">Analytics</router-link></li>
            <li v-if="g.adminAuth || g.editorAuth"><router-link to="/sbs">SBs</router-link></li>
            <li v-if="g.adminAuth || g.editorAuth"><router-link to="/planes">Planes</router-link></li>
            <li v-if="g.adminAuth || g.editorAuth"><router-link to="/items">Items</router-link></li>
          </ul>
        </div>  
      </nav>

      <ContainerSearch></ContainerSearch>

    </div>  


    <router-view />


    <footer v-if="isMobile && !$route.meta.appVueHide && (g.adminAuth || g.editorAuth)" class="mobile-navbar">
          <nav>
            <ul class="mobile-navbar-itens" 
            :style="() => {
                return {
                  '.mobile-navbar-itens li': {
                    'grid-template-columns': g.adminAuth ? '26.6% 26.6% 26.6%' : '20% 20% 20% 20%'
                  }
                };
              }"
            >
              <li>
                <router-link to="/items">
                  <i class="fa-solid fa-clipboard"></i>
                  <span>Items</span>
                </router-link>
              </li>
              <li>
                <router-link to="/planes">
                  <i class="fa-solid fa-plane-departure"></i>
                  <span>Planes</span>
                </router-link>
              </li>
              <li>
                <router-link to="/sbs">
                  <i class="fa-sharp fa-solid fa-screwdriver-wrench"></i>
                  <span>SBs</span>
                </router-link>
              </li>
              <li v-if="g.adminAuth">
                <router-link to="/analytics">
                  <i class="fa-solid fa-chart-line"></i>
                  <span>Analytics</span>
                </router-link>
              </li>
            </ul>
          </nav>
    </footer>
  </div>
</template>


<script lang="ts">
import ContainerSearch from './components/ContainerSearch.vue'
import clickOutside from '@/utils/click-outside.js';
import globalData from '@/globals'
import router from '@/router';

export default {
  data() {
    return {
      isMobile: false,
      isDesktop: false,
      showDropdown: false,
      g: globalData,     
    }
  },

  directives: {
    clickOutside,
  },

  mounted() {
    window.addEventListener('resize', this.checkIfMobile);
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfDesktop);
    this.checkIfDesktop();

  },

  beforeDestroy() {
    window.removeEventListener('resize', this.checkIfMobile);
    window.removeEventListener('resize', this.checkIfDesktop);

  },

  async beforeUpdate() {

    if (this.$route.path !== this.g.previousPath) {
        this.g.previousPath = this.$route.path;
        await this.g.getUserAuthenticated();
    };     
  
  },

  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth < 768; // Define como mobile para telas menores que 768px de largura
    },
    checkIfDesktop() {
      this.isDesktop = window.innerWidth >= 768; // Define como desktop e tablet para telas maiores ou iguais a 768px de largura
    },

    logout() {

      localStorage.removeItem('token');

      router.push('/login');

      location.reload(); // recarrega a página para reiniciar o mounted()
   
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

.dropdown-menu-mobile {
  position: absolute;
  background-color: var(--white);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  list-style-type: none;
  text-align: center;
  width: 60%;
  padding-top: 10px;
  top: 50%;
  left: 43%;
  transform: translate(-50%, -50%);
  margin-left: 25px;
  margin-right: 25px;
  padding: 40px;
  box-shadow: 2px 2px 20px 5px var(--silver);
  transition: 2s;
  z-index: 9999;
}

.dropdown-menu-mobile li a {
  opacity: 0;
  font-size: 20pt;
  text-decoration: none;
  color: var(--azul-principal);
}

.dropdown-menu-mobile li a:visited {
  text-decoration: none;
}

.dropdown-menu-mobile li a i {
  font-size: 30px;
}

.dropdown-menu-mobile li a img {
  height: 43px;
  width: auto;
  vertical-align: middle;
}

.mobile-header li.active i {
    background-color: var(--white);
    border: 2px;
    border-radius: 50%;
  }

.mobile-header li.active li a {
  opacity: 1;
  transition: 5s;
}


.mobile-notification{
  list-style-type: none;
  padding-right: 10px;
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
  padding-bottom: 10px;
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
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  align-items: center;
  margin-left: 10px;
  margin-right: 55px;
  position: relative;
}
.mobile-navbar-itens i {
  color: var(--azul-principal);
  font-size: 25px;
}

span {
  display: block; 
  text-align: center; 
  position: absolute; 
  left: 50%; 
  transform: translateX(-50%);
  color: var(--azul-principal);
  text-decoration: none;
  list-style-type: none;
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
.desktop-nav li a:hover:not(#user-icone, .dropdown-menu li a, #notification-icone) {
  color: var(--white); 
  transition: 0.3s;
}

#user-icone {
  transition: 2s;
}

#user-icone i:hover {
  opacity: 0.7;
  transition: 0.1s;
}

#notification-icone {
  transition: 2s;
}

#notification-icone:hover {
  opacity: 0.7;
  transition: 0.1s;
}

.dropdown-menu {
  position: absolute;
  background-color: transparent;
  border-radius: 10px;
  right: 0px;
  display: grid;
  grid-template-columns: 100%;
  list-style-type: none;
  text-align: center;
  width: 15%;
  padding-top: 10px;
}

.dropdown-menu li a {
  opacity: 0;
  padding-bottom: 15px;
}

.dropdown-menu li a:hover {
  opacity: 0.7;
  transition: 1s;
}

.dropdown-menu li a i {
  font-size: 21px;
}

.dropdown-menu li a img {
  height: 30px;
  width: auto;
  padding-right: 2px;
  vertical-align: middle;
}

.desktop-nav li.active i {
    background-color: var(--white);
    border: 2px;
    border-radius: 50%;
  }

.desktop-nav li.active {
  right: 0;
  background-color: var(--white);
  padding-bottom: 225px;
  padding-left: 60px;
  padding-right: 50px;
  border-radius: 10px;
  box-shadow: 2px 2px 20px 5px var(--silver);
  transition: 2s;
  margin-right: 0;
  
}

.desktop-nav li.active ul {
    right: 10px;
    transition: 2s;
}

.desktop-nav li.active li a {
  opacity: 1;
  transition: 5s;
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
  
  /* Navbar Desktop */
  .desktop-navbar {
    margin-left: 2%;
    margin-right: 2%;
  }
  .desktop-navbar-header {
    margin-top: 0.5%
  }
  .desktop-navbar-header img {
    height: 30px;
  }
  .desktop-nav a i {
    font-size: 28px;
  }
  .desktop-nav li {
    font-size: 16px;
  }
  .desktop-nav li a {
    padding: 5px 15px;
  }

  .dropdown-menu {
    right: 0px;
    display: grid;
    grid-template-columns: 100%;
    width: 22%;
    padding-top: 5px;
  }

  .dropdown-menu li a {
    padding-bottom: 10px;
  }

  .dropdown-menu li a i {
    font-size: 20px;
  }

  .dropdown-menu li a img {
  height: 30px;
  width: auto;
  padding-right: 1px;
}

  .desktop-nav li.active {
    right: 0;
    padding-bottom: 190px;
    padding-left: 70px;
    padding-right: 50px;
    border-radius: 10px;
    box-shadow: 2px 2px 20px 5px var(--silver);
    transition: 2s;
    margin-right: 0;  
  }

  .desktop-nav li.active ul {
      right: 10px;
      transition: 2s;
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

