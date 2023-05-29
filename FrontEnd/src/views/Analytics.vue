<template>
    <div>
      <div class="sub-sections">
        <h3 @click.prevent="subSections = 'items'" :style="subSections === 'items' ? { 'color': '#F3C653' } : {  }">Items</h3>
        <h3 @click.prevent="subSections = 'planes'" :style="subSections === 'planes' ? { 'color': '#F3C653' } : { }">Planes</h3>
        <h3 @click.prevent="subSections = 'sbs'" :style="subSections === 'sbs' ? { 'color': '#F3C653' } : { }">Sbs</h3>
        <h3 @click.prevent="subSections = 'owners'" :style="subSections === 'owners' ? { 'color': '#F3C653' } : { }">Owners</h3>
        <h3 @click.prevent="subSections = 'pilots'" :style="subSections === 'pilots' ? { 'color': '#F3C653' } : { }">Pilots</h3>
        <h3 @click.prevent="subSections = 'logs'" :style="subSections === 'logs' ? { 'color': '#F3C653' } : { }">Logs</h3>
      </div>
      <chart-items v-if="subSections === 'items'"></chart-items>
    </div>
  </template>
  
  <script lang="ts">
  import ChartItems from '@/components/Graphics/ChartItems.vue';
  
  export default {

    data() {
      return {
        subSections: 'items',
      }
    },
  
    components: {
      ChartItems
    }
}

</script>


<style scoped>
@import "../assets/base.css";

.sub-sections {
  display: grid;
  grid-template-columns: 11% 11% 9% 11% 9% 11%;
  justify-content: center;
  margin-left: 50px;
}

.sub-sections h3 {
  color: var(--azul-embraer-dark);
  cursor: pointer;
}

.sub-sections h3:hover {
  color: var(--amarelo);
  transition: 1s;
}
</style>