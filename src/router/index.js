// 导入路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) 
 
 // 导入路由模块  实现路由按需加载
 const App = () => import ('../app.vue')
//  import account from '../components/Account.vue'
 const account = () => import('../components/Account.vue')
//  import login from '../components/login'
const login = () => import('../components/login.vue')
//  import resgiter from '../components/resgiter'
//  import parentslot from '../components/parentslot'
//  import childslot from '../components/childslot'
 const resgiter = () => import('../components/resgiter.vue')
const parentslot = () => import('../components/parentslot.vue')
const childslot = () => import('../components/childslot.vue')

// 创建一个路由对象
var router = new VueRouter({
    // mode:'history',
    routes:[
        {
            path: '/',
            redirect: '/account' // 重定向
        },
        // {
        //     path:'/home',
        //     component:App
        // },
        {
        name: 'account',
        path:'/account', 
        component:account,
        children:[
            {
             name:'login',
             path:'login',
             component:login
            },
            {
                name:'resgiter',
                path:'resgiter',
                component:resgiter
               }
        ]
    },
    {
        name: 'parent',
        path:'/parentslot', 
        component:parentslot,
    },
    {
        name: 'child',
        path:'/childslot', 
        component:childslot,
    }
    ]
})

export default router