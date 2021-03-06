import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/log-in',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Dashboard.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/my-account',
    name: 'MyAccount',
    component: () => import('../views/dashboard/MyAccount.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/team',
    name: 'Team',
    component: () => import('../views/dashboard/Team.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/add-team',
    name: 'AddTeam',
    component: () => import('../views/dashboard/AddTeam.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/team/add-member',
    name: 'AddMember',
    component: () => import('../views/dashboard/AddMember.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/team/edit-member',
    name: 'EditMember',
    component: () => import('../views/dashboard/EditMember.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/team/plans',
    name: 'Plans',
    component: () => import('../views/dashboard/Plans.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/team/plans/thankyou',
    name: 'PlansThankyou',
    component: () => import('../views/dashboard/PlansThankYou.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/leads',
    name: 'Leads',
    component: () => import('../views/dashboard/Leads.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/leads/add',
    name: 'AddLead',
    component: () => import('../views/dashboard/AddLead.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/leads/:id',
    name: 'Lead',
    component: () => import('../views/dashboard/Lead.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/leads/:id/edit',
    name: 'EditLead',
    component: () => import('../views/dashboard/EditLead.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/clients',
    name: 'Clients',
    component: () => import('../views/dashboard/Clients.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/clients/add',
    name: 'AddClient',
    component: () => import('../views/dashboard/AddClient.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/clients/:id',
    name: 'Client',
    component: () => import('../views/dashboard/Client.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/clients/:id/edit',
    name: 'EditClient',
    component: () => import('../views/dashboard/EditClient.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/clients/:id/add-note',
    name: 'AddNote',
    component: () => import('../views/dashboard/AddNote.vue'),
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/clients/:id/edit-note/:note_id',
    name: 'EditNote',
    component: () => import('../views/dashboard/EditNote.vue'),
    meta: {
      requireLogin: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/log-in')
  } else {
    next()
  }
})

export default router
