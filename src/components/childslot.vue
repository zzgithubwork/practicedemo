<template>
    <div>
       
                <p>具名插槽</p>
                <slot name='main'></slot>
      
                <p>作用域插槽</p>
                <slot name='footer' :user='user' :testfn='testClick'></slot>
       
    </div>
</template>
<script>
export default {
    data(){
        return {
            user:{
                name:'vue',
                title:'测试作用域插槽'
            }
        }
    },
    methods:{
        testClick() {
            console.log('测试作用域插槽传递方法，可将子组件的方法给父组件复用')
        }
    }
}
</script>
<style scoped>
    
</style>