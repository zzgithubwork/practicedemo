<template>
   <div>
        <h2>账户页面Account</h2>
       <router-link to="/account/login">login</router-link>
       <router-link to="/account/resgiter">resgiter</router-link>
       <button @click='routerquery'>点击获取query传参的值：</button>
         <p>{{$route.query.userName}}</p>
        <button @click='routerparams'>点击获取params传参的值(params传参的值重新加载页面会消失): </button>
        <p>{{$route.params.userId}}</p>
       <router-view/>
   </div>
</template>

<style scoped>
    h2{
        color: #0f0;
    }
    button {
      /* width: 50px;
      height: 50px; */
      background-color: #0fd;
      border-radius: 5%;
        
    }
</style>
   
<script>
  
   export default {
       data() {
           return {
           }
       },
       components:{

       },
       created() {
           
       },
       methods: {
        // 路由的query 和params 传参
           routerquery() {
             this.$router.push({path:'/account/login',query:{userName:'靓仔zz'}})
           },
            routerparams() {
             this.$router.push({name:'resgiter',params:{userId:'123456'}})
           }
       }
   }
</script>