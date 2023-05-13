import Vue from 'vue'
import VueRouter from 'vue-router'
import jwt_decode from 'jwt-decode';


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      redirect: '/login',
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: {
        appVueHide: true,
      }
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
        requiresAuth: true,
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
        requiresAuth: true,
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
        requiresAuth: true,
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
        requiresAuth: true,
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
        requiresAuth: true,
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
        requiresAuth: true,
      }
    },


    // CRUD Condition

    {
      path: '/register-condition',
      name: 'registerCondition',
      component: () => import('../views/CrudCondition.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Condition',
        requiresAuth: true,
      }
    },

    // Section of upload files

    {
      path: '/upload',
      name: 'importarDados',
      component: () => import('../views/DataImport.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Data Import',
        requiresAuth: true,
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
        requiresAuth: true,
      }
    },


    // CRUD Chassis Owner
    {
      path: '/register-owner',
      name: 'registerOwner',
      component: () => import('../views/CrudChassisOwner.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Register Owner',
        requiresAuth: true,
      }
    },

    // CRUD Chassis Pilot
    {
      path: '/register-pilot',
      name: 'registerPilot',
      component: () => import('../views/CrudChassisPilot.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Register Pilot',
        requiresAuth: true,
      }
    },

    // Logs
    {
      path: '/logs',
      name: 'logs',
      //component: () => import('../views/CrudChassisPilot.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Logs',
        requiresAuth: true,
      }
    },

    // Analytics
    {
      path: '/analytics',
      name: 'analytics',
      //component: () => import('../views/CrudChassisPilot.vue'),
      meta: {
        showH3: true,
        tituloValue: 'Analytics',
        requiresAuth: true,
      }
    },

  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const token = localStorage.getItem('token');

  interface DecodedToken {
    sub: string;
    exp: number;
  };

  const isAuthenticated = token ? true : false;

  if (isAuthenticated && to.path === '/login') {
    next('/items');
    return;
  }

  if (requiresAuth && !token) {
    next('/login');
  } else if (token) {
    const decodedToken = jwt_decode<DecodedToken>(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem('token');
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('local-storage', JSON.stringify(localStorage));
});

if (localStorage.getItem('local-storage')) {
  const data = JSON.parse(localStorage.getItem('local-storage') || '');
  Object.keys(data).forEach((key) => {
    localStorage.setItem(key, data[key]);
  });
  localStorage.removeItem('local-storage');
}

export default router
