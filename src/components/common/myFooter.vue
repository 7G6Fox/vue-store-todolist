<template>
  <footer>
      <p>我的博客:<router-link to="/">xxxx</router-link></p>  
      <p>github:<a href="">xxxx</a></p>   
  </footer>
</template>

<script>
export default {
name:'myFooter',
}
</script>

<style scope>
   footer{
     width: 100%;
     text-align: center;
     position: absolute;
     bottom: 0;
     height: 5rem;
   }
</style>