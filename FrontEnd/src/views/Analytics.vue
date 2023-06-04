<template>
    <div>
      <div class="sub-sections">
        <h3 @click.prevent="subSections = 'items'" :style="subSections === 'items' ? { 'color': '#F3C653' } : {  }">Items</h3>
        <h3 @click.prevent="subSections = 'planes'" :style="subSections === 'planes' ? { 'color': '#F3C653' } : { }">Planes</h3>
        <h3 @click.prevent="subSections = 'sbs'" :style="subSections === 'sbs' ? { 'color': '#F3C653' } : { }">Sbs</h3>
        <h3 @click.prevent="subSections = 'owners'" :style="subSections === 'owners' ? { 'color': '#F3C653' } : { }">Owners</h3>
        <h3 @click.prevent="subSections = 'pilots'" :style="subSections === 'pilots' ? { 'color': '#F3C653' } : { }">Pilots</h3>
      </div>
      <chart-items v-if="subSections === 'items'"></chart-items>
      <chart-planes v-if="subSections === 'planes'"></chart-planes>
      <chart-sbs v-if="subSections === 'sbs'"></chart-sbs>
      <chart-owners v-if="subSections === 'owners'"></chart-owners>
      <chart-pilots v-if="subSections === 'pilots'"></chart-pilots>
    </div>
  </template>
  
  <script lang="ts">
  import ChartItems from '@/components/Graphics/ChartItems.vue';
  import ChartPlanes from '@/components/Graphics/ChartPlanes.vue';
  import ChartSbs from '@/components/Graphics/ChartSbs.vue';
  import ChartOwners from '@/components/Graphics/ChartOwners.vue';
  import ChartPilots from '@/components/Graphics/ChartPilots.vue';
  
  export default {

    data() {
      return {
        subSections: 'items',
      }
    },
  
    components: {
      ChartItems,
      ChartPlanes,
      ChartSbs,
      ChartOwners,
      ChartPilots
    }
}

</script>


<style scoped>
@import "../assets/base.css";

.sub-sections {
  display: flex;
  justify-content: space-around;
  margin-left: 10%;
  margin-right: 10%;
}

.sub-sections h3 {
  color: var(--azul-embraer-dark);
  cursor: pointer;
}

.sub-sections h3:hover {
  color: var(--amarelo);
  transition: 1s;
}

/* --------------- Media Queries -------------------- */

/* Estilos para tablet */
@media only screen and (min-width: 768px) and (max-width: 1023px) {

}

/* Estilos para mobile */
@media only screen and (max-width: 767px) {
  
}

</style>