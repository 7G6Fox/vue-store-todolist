<template>
  <div id="shopMall">
      <router-view></router-view>
      <navbar></navbar>
  </div>
</template>

<script>
 import navbar from './mall/navBar.vue'


export default {
  name: "shopMall",
  components:{navbar},
  created(){
       
  }
 
};
</script>

<style lang="scss">
@import "assets/css/mall/mall.scss";
@import "assets/iconfont/iconfont.css";
</style>