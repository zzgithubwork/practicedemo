<template>
    <div>
        <child-slot>
            <template v-slot:main>
               最新的v-slot 方法： 这里是具名插槽 
               之前solt插槽用的是 <div slot='main'></div>
            </template>
            <template #footer="{user,testfn}">
                v-slot:footer可以缩写为#footer
                之前solt插槽用的是 <div slot='footer' solt-scope='soltProps'></div>
               {{user.name}} 
               <button class="button" @click='testfn'>点我</button>
            </template>
        </child-slot>
    </div>
</template>
<script>
    import childSlot from './childslot.vue'
export default {
    data(){
        return {

        }
    },
    components:{
        childSlot
    }
}
</script>
<style scoped>

</style>