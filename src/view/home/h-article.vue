<template>
  <li @click="toDetail">
      这里是文章区
  </li>
</template>

<script>
export default {
  name:'homeArticle',
  methods:{
    toDetail(){
      this.$router.push({
        //query配置，相当于在router-link配置 :to='{}'
        //path:'/detail'//params传参可直接用path跳转，也可以在router中设置name
        name:'aDetail',
        query:{
          h1:'query',
          content:'这是用query在router中传递的参数'
        }
      })
    }
  }
}
</script>

<style>

</style>