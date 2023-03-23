import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      redirect: '/avioes',
      component: HomeView
    },

    {
      path: '/avioes',
      name: 'avioes',
      component: () => import('../views/AboutView.vue'),
      meta: {
        showPesquisar: true,
        placeHolderValue: 'Pesquise um chassi...',
      }
    },

    {
      path: '/sbs',
      name: 'SBs',
      component: () => import('../views/AboutView.vue'),
      meta: {
        showPesquisar: true,
        placeHolderValue: 'Pesquise um SB...',
      }
    },

    {
      path: '/painel-adm',
      name: 'painel-adm',
      component: () => import('../views/CrudChassi.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Painel Administrativo',
      }
    },

    {
      path: '/notificacoes',
      name: 'notificacoes',
      component: () => import('../views/AboutView.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Notificações',
      }
    }
  ]
})

export default router
