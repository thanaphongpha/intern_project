import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../Main.vue"
import store from '../store/index'
//import Home from '../views/Home.vue'
// import Time from '../views/Time.vue'

Vue.use(VueRouter)

const routes = [
   {
    path: '/',
    name:'main',
    component: Main,
    children:[
      {
        path:'',
        name: 'Time',
        component: () => import('../views/Time.vue'),
        meta: {requiresLogin: true}
      },

      {
        path:'/history',
        name: 'History',
        component: () => import('../views/History.vue'),
        meta: {requiresLogin: true}
      },
    ]
  },
  {
    path: '/login',
    name:'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/calendar',
    name:'main',
    component: Main,
    children:[
        {
          path:'',
          name: 'Calendar',
          component: () => import('../views/Calendar.vue'),
          meta: {requiresLogin: true}
        },
      ]
  },
  {
    path: '/leave',
    name: 'main',
    component: Main,
    children: [
      {
        path:'',
        name: 'Leave',
        component: () => import('../views/Leave.vue'),
        meta: {requiresLogin: true},
        children:[
          {
            path:'leaveWork',
            name: 'leaveWork',
            component: () => import('../views/LeaveWork.vue'),
            meta: {requiresLogin: true}
          },
          {
            path:'workforhome',
            name: 'WorkForHome',
            component: () => import('../views/WorkFromHome.vue'),
            meta: {requiresLogin: true},
          },
          {
            path:'holidaywork',
            name: 'HolidayWork',
            component: () => import('../views/HolidayWork.vue'),
            meta: {requiresLogin: true},
          }
        ]
      }
    ]
  },
  {
    path: '/leaveWork',
    name:'main',
    component: Main,
    children:[
      {
        path:'',
        name: 'LeaveWork',
        component: () => import('../views/LeaveWork.vue'),
        meta: {requiresLogin: true}
      },
    ]
  },
  {
    path: '/holidaywork',
    name:'main',
    component: Main,
    children:[
      {
        path:'',
        name: 'HolidayWork',
        component: () => import('../views/HolidayWork.vue'),
        meta: {requiresLogin: true}
      },
    ]
  },
  {
    path: '/workfromhome',
    name:'main',
    component: Main,
    children:[
      {
        path:'',
        name: 'Calendar',
        component: () => import('../views/WorkFromHome.vue'),
        meta: {requiresLogin: true}
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log('999', store.state.user.user)
  console.log(to, from, next)

  if (to.meta.requiresLogin && !store.state.user.user) {

    next({ path: '/login' })
    console.log('route',to, from, next)
  }
  next()
})

export default router
