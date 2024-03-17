import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Main from '@/components/Main'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main',
      name: 'iMain',
      component: Main,
      props: true,
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      props: true,
    },
    {
      path: '/',
      name: 'register',
      component: Register,
      props: true,
    },
    {
      path: '*',
      redirect: "/"
    },
    
  ]
})
