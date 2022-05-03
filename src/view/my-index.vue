<template>
  <div id="page">
    <nav>
      <router-link to="/toList">待做事项</router-link>
      <router-link to="/toMall">购物商城</router-link>
    </nav>
  
   <div class="content">
    <keep-alive>
       <router-view/>
    </keep-alive>
   </div>
    
  </div>
</template>

<script>
export default {
  name: "myIndex",
};
</script>

<style lang='scss'>

</style>