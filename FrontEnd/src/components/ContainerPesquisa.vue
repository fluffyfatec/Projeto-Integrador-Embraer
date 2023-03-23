<template>
    <div class="container-pesquisa">
        <div class="container-pesquisa">
          <div class="pesquisar">
              <input v-if="$route.meta.showPesquisar" type="text" class="formulario" :placeholder="$route.meta.placeHolderValue">
              <h3 v-if="$route.meta.showH3">{{ $route.meta.tituloValue }}</h3>
              <button v-if="$route.meta.showPesquisar" id="btnBusca"><i class="fa-solid fa-magnifying-glass fa" style="color: #ffffff;"></i></button>
          </div>
        </div>
    </div>
</template>

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
  margin-top: 5%;
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
    position: absolute;
    flex-direction: row;
}
.pesquisar h3 {
    -ms-flex-item-align: center;
        align-self: center;
    margin-right: 1rem;
    font-size: 2rem;
    color: var(--azul-principal);
    font-weight: 500;
    margin-bottom: 1.5rem;
}
.pesquisar .formulario {
    opacity: 0.6;
    padding: 1rem 2rem;
    font-size: 18pt;
    border: none;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: var(--light-dark-color);
    width: 250px;
}

#btnBusca{
  border:none;
  float:left;
  height:40px;
  border-radius: 0 5px 5px 0;
  width:100px;
  background: var(--azul-principal);
  height: auto;
  transition-duration: 0.4s;
  cursor: pointer;
  transition: 0.1s all;
}

#btnBusca:hover {
  background-color: var(--azul-claro);
  color: white;
}

#btnBusca:active {
  transform: scale(1);
  box-shadow: 1px 1px 1px 1px var(--azul-principal);
}

.fa{
    width: 100%;
    font-size: 30px;
}

/* --------------- Media Queries -------------------- */

/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  
/* Container Pesquisa */
.container-pesquisa {
    margin-top: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* Classes referentes ao formulário de pesquisa */
.pesquisar h3 {
    margin-right: 1rem;
    font-size: 2rem;
    color: var(--azul-principal);
    font-weight: 500;
    margin-bottom: 1.5rem;
}
.pesquisar .formulario {
    opacity: 0.6;
    padding: 1rem 2rem;
    font-size: 14pt;
    border: none;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: var(--light-dark-color);
    width: 150px;
    height: 5px;
}

#btnBusca{
  border:none;
  float:left;
  height:40px;
  border-radius: 0 5px 5px 0;
  width:100px;
  background: var(--azul-principal);
  height: auto;
  transition-duration: 0.4s;
  cursor: pointer;
  transition: 0.1s all;
}

#btnBusca:hover {
  background-color: var(--azul-claro);
  color: white;
}

#btnBusca:active {
  transform: scale(1);
  box-shadow: 1px 1px 1px 1px var(--azul-principal);
}

.fa{
    width: 100%;
    font-size: 20px;
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
    font-size: 1.5rem;
    color: var(--azul-principal);
    font-weight: 500;
    margin-bottom: 1.5rem;
}
.pesquisar .formulario {
    opacity: 0.6;
    padding: 1rem 2rem;
    font-size: 10pt;
    border: none;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: var(--light-dark-color);
    width: 100px;
    height: 5px;
}

#btnBusca{
  border:none;
  float:left;
  height:40px;
  border-radius: 0 5px 5px 0;
  width:70px;
  background: var(--azul-principal);
  height: auto;
  transition-duration: 0.4s;
  cursor: pointer;
  transition: 0.1s all;
}

#btnBusca:hover {
  background-color: var(--azul-claro);
  color: white;
}

#btnBusca:active {
  transform: scale(1);
  box-shadow: 1px 1px 1px 1px var(--azul-principal);
}

.fa{
    width: 100%;
    font-size: 15px;
}

}

</style>