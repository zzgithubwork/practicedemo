 // 导入路由模块
  import VueRouter from 'vue-router'
import account from './components/Account'
import login from './components/login'
import resgiter from './components/resgiter'
// 创建一个路由对象
var router = new VueRouter({
    routes:[
        {
        path:'/account', 
        component:account,
        children:[
            {
             path:'login',
             component:login
            },
            {
                path:'resgiter',
                component:resgiter
               }
        ]
    }
    ]
})
export default router