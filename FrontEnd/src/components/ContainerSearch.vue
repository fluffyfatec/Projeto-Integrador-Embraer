<template>
    <div class="container-pesquisa">
        <div class="container-pesquisa">
          <div class="pesquisar">
              <input v-if="$route.meta.showSearchChassis" 
              type="text" 
              class="formulario" 
              :placeholder="$route.meta.placeHolderValue"
              v-model="searchTermChassis"
              @input="updateSearchTermChassis">

              <input v-if="$route.meta.showSearchSbs" 
              type="text" 
              class="formulario" 
              :placeholder="$route.meta.placeHolderValue"
              v-model="searchTermSbs"
              @input="updateSearchTermSbs">

              <h3 v-if="$route.meta.showH3">{{ $route.meta.tituloValue }}</h3>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import { eventBus } from '@/main.js'

export default {
  data() {
    return {
      searchTermChassis: '',
      searchTermSbs: '',
    }
  },

  methods: {
    updateSearchTermChassis() {
        eventBus.$emit('search-term-updated', this.searchTermChassis)
    },
    
    updateSearchTermSbs() {
        eventBus.$emit('search-term-updated', this.searchTermSbs)
    }
  },

}
</script>


<style scoped>


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