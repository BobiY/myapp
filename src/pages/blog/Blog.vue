<template>
  <div class="blog">
      <h1>我是blog页面</h1>
      <router-link :to = "{path:'/Blog/Canvas'}">Canvas</router-link>
      <router-link :to = "{path:'/Blog/Html'}">Html</router-link>
      <router-link :to = "{path:'/Blog/Css'}">CSS</router-link>
      <router-link :to = "{path:'/Blog/JavaScript'}">JavaScript</router-link>
      <router-view></router-view>
  </div>
</template>
