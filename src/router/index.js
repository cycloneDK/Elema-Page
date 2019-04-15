import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from '@/components/content/Goods'
import Seller from '@/components/content/Seller'
import Ratings from '@/components/content/Ratings'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld,
      redirect:  '/goods' 
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    }


  ]
})
