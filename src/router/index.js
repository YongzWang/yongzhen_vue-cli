import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index'

Vue.use(VueRouter)

  const routes = [
    {
      name:'index',
      path:'/index',
      component:Index,
      meta:{
        title:'首页'
      }
    },
    {
      name:'list',
      path:'/list',
      component: ()=>import(`../views/list`),
      meta: {
        title: '列表',
      }
    },
    {
      name:'listDetail',
      path:'/listDetail/:type/:id',
      component: ()=>import(`../views/list/detail`),
      meta: {
        title: `详情`,
        keepAlive:false
      }
    },
    {
      name:'person',
      path: '/person',
      component: ()=>import(`../views/person`),
      meta: {
        title: '个人中心',
        keepAlive:true
      }
    }
  ]

const router = new VueRouter({
  routes
})

export default router
