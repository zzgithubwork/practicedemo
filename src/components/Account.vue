<template>
   <div>
        <h2>账户页面Account</h2>
       <router-link to="/account/login">login</router-link>
       <router-link to="/account/resgiter">resgiter</router-link>
       <router-view/>
   </div>
</template>
   
<style scoped>
    h2{
        color: #0f0;
    }
</style>
   
<script>
  
   export default {
       data() {
           return {
           }
       },
       created() {
           
       },
       methods: {
           
       }
   }
</script>