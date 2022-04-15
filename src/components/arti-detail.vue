<template>
  <article>
      <header>
          我是标题
          {{h1}}
      </header>
      {{this.$route.query.content}}

  </article>
</template>

<script>
export default {
    name:'articleDetail',
data(){
    return {
        h1:this.$route.query.h1,
        content:''
    }
},activated(){
    console.log('文章详情组件被激活');
}
}
</script>

<style>

</style>