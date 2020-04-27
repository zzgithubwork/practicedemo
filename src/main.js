  // 导入vue
 import Vue from 'vue'
 import app from './app'
 import router from './router'
 import store from './store'

  // 去掉提示
 Vue.config.productionTip = false
 // 取消 Vue 所有的日志与警告。
 Vue.config.silent = true
 

 //创建一个vue实例
   var vm = new Vue({
       el:'#app',
       router,
       store,
       render: c => c(app) // render函数会把指定容器内的其他所有标签都清空
   })