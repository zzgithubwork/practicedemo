  // 导入vue
 import Vue from 'vue'

// 导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from './app.vue'


 import router from './router.js'

 //创建一个vue实例
   var vm = new Vue({
       el:'#app',
       router,
       render: c => c(app) // render函数会把指定容器内的其他所有标签都清空
   })