import Vue from 'vue'
import Router from 'vue-router'
import * as Component from "./lazy"

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
      component: Component.Home
    },
    {
      path: '/Blog',
      name: 'Blog',
      component:Component.Blog,
      children:[
        {
          path:"Html",
          name:"Html",
          component:Component.Html
        },
        {
          path:"Css",
          name:"Css",
          component:Component.Css
        },
        {
          path:"JavaScript",
          name:"JavaScript",
          component:Component.JavaScript
        },
        {
          path:"Canvas",
          name:"Canvas",
          component:Component.Canvas
        }
      ]
    },
    {
      path: 'Person',
      name: 'Person',
      component: Component.Person
    },
  ]
})
