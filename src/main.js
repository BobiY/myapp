// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '../config/ajax'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.config.productionTip = false

// 将 axios 挂在到 Vue 原型上
Vue.prototype.$ajax = axios;

//引入 mock 进行数据模拟
require("./mock.js")

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
