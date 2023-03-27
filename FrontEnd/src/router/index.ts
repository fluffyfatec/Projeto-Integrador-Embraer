import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      redirect: '/avioes',
      //component: HomeView
    },

    {
      path: '/items',
      name: 'items',
      component: () => import('../views/SearchItems.vue'),
      meta: {
        showSearchChassis: true,
        ItemsDetails: true,
        placeHolderValue: 'Pesquise um chassi...',
      }
    },

    {
      path: '/items/:chassis',
      name: 'items-details',
      component: () => import('../views/ItemsDetails.vue'),
      props: true
    },

    {
      path: '/planes',
      name: 'planes',
      component: () => import('../views/SearchPlanes.vue'),
      meta: {
        showSearchChassis: true,
        SbsDetails: true,
        placeHolderValue: 'Pesquise um Chassi...',
      }
    },

    {
      path: '/planes/:chassis',
      name: 'sbs-details',
      component: () => import('../views/SbsDetails.vue'),
      props: true
    },

    {
      path: '/sbs',
      name: 'SBs',
      component: () => import('../views/SearchSbs.vue'),
      meta: {
        showSearchSbs: true,
        placeHolderValue: 'Pesquise um SB...',
      }
    },

    {
      path: '/sbs/:sb',
      name: 'planes-details',
      component: () => import('../views/PlanesDetails.vue'),
      props: true
    },

    {
      path: '/painel-adm',
      name: 'painel-adm',
      component: () => import('../views/CrudCondition.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Painel Administrativo',
      }
    },

    {
      path: '/notificacoes',
      name: 'notificacoes',
      //component: () => import('../views/ImportaDados.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Notificações',
      }
    },

    {
      path: '/upload',
      name: 'importarDados',
      component: () => import('../views/DataImport.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Importar Dados',
      }
    },
  ]
})

export default router
