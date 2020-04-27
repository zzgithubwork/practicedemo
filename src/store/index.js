 // 导入vue 
 import Vue from 'vue'
 import Vuex from 'vuex'
 // 挂载vuex
 Vue.use(Vuex)
  // 创建vuex对象
   const store = new Vuex.Store({
       state:{
           name: '胡歌'
       },
       mutations:{
         RE_NAME(state,payload) {
            state.name = '彭于晏' 
            console.log(payload)
         }
       },
       actions:{
           asyncname(context,payload){
               setTimeout(function() {
                context.commit('RE_NAME',payload)
               }, 2000);
              
           }
       }
   })
   export default store