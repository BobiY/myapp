import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/Home'
import Blog from '@/blog/Blog'
import Person from '@/person/Person'
import Canvas from '@/blog/SubPages/canvas/Canvas'
import Css from '@/blog/SubPages/css/Css'
import Html from '@/blog/SubPages/html/Html'
import JavaScript from '@/blog/SubPages/js/Javascript'

Vue.use(Router)
/**
 *  / ===> home
 *  /blog ===> blog
 *      children ===> /html ===> html
 *                    /css ===> css
 *                    /js ===> js
 *                    /canvas ===> canvas
 *  /person ==> person
 */
export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/Home"
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Blog',
      name: 'Blog',
      component:Blog,
      children:[
        {
          path:"Html",
          name:"Html",
          component:Html
        },
        {
          path:"Css",
          name:"Css",
          component:Css
        },
        {
          path:"JavaScript",
          name:"JavaScript",
          component:JavaScript
        },
        {
          path:"Canvas",
          name:"Canvas",
          component:Canvas
        }
      ]
    },
    {
      path: 'Person',
      name: 'Person',
      component: Person
    },
  ]
})
