import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      redirect: '/items',
      //component: HomeView
    },


    // Section of items search and after, section of specific item details, with variable "chassis"

    {
      path: '/items',
      name: 'items',
      component: () => import('../views/SearchItems.vue'),
      meta: {
        showSearchChassis: true,
        itemsDetails: true,
        placeHolderValue: 'Search a chassis...',
      }
    },

    {
      path: '/items/:chassis',
      name: 'items-details',
      component: () => import('../views/ItemsDetails.vue'),
      props: true,
      meta: {
        showSearchChassis: true,
        itemsDetails: true,
        placeHolderValue: 'Search a chassis...',
      }
    },


    // Section of planes search and after, section of specific plane details, with variable "chassis"

    {
      path: '/planes',
      name: 'planes',
      component: () => import('../views/SearchPlanes.vue'),
      meta: {
        showSearchChassis: true,
        planesDetails: true,
        placeHolderValue: 'Search a chassis...',
      }
    },

    {
      path: '/planes/:chassis',
      name: 'planes-details',
      component: () => import('../views/PlanesDetails.vue'),
      props: true,
      meta: {
        showSearchChassis: true,
        planesDetails: true,
        placeHolderValue: 'Search a chassis...',
      }
    },


    // Section of Sbs search and after, section of specific sb details, with variable "sb"

    {
      path: '/sbs',
      name: 'SBs',
      component: () => import('../views/SearchSbs.vue'),
      meta: {
        showSearchSbs: true,
        placeHolderValue: 'Search a SB...',
      }
    },

    {
      path: '/sbs/:sb/:part',
      name: 'sbs-details',
      component: () => import('../views/SbsDetails.vue'),
      props: true,
      meta: {
        showSearchSbs: true,
        placeHolderValue: 'Search a SB...',
      }
    },


    // Administrative Panel

    {
      path: '/admin-panel',
      name: 'admin-panel',
      //component: () => import('../views/CrudCondition.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Administrative Panel',
      }
    },

    // Section of upload files, inside Administrative Panel

    {
      path: '/upload',
      name: 'importarDados',
      component: () => import('../views/DataImport.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Data Import',
      }
    },


    // Notifications

    {
      path: '/notifications',
      name: 'notifications',
      //component: () => import('../views/ImportaDados.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Notifications',
      }
    },

  ]
})

export default router
