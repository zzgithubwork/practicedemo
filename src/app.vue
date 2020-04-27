<template>
    <div>
        <h1>app组件</h1>
        <router-link to="/account">Account</router-link>
        <router-view/>
        <!-- <button @click='rename'>{{$store.state.name}}</button> -->
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    created(){
        console.log(this.$store.state.name);
    },
    mounted() {
        console.log(this.$store.state.name);
    },
    methods: {
        rename() {
            // this.$store.commit('RE_NAME',{age:'18'})
            this.$store.dispatch('asyncname',{age:'18'})
        }
    }
}
</script>
<style scoped>
    
</style>