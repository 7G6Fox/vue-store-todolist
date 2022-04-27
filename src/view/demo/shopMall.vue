<template>
  <div id="shopMall">
      <keep-alive exclude="GoodDetail">
       <router-view></router-view>
      </keep-alive>

      <navbar v-show="!this.$route.path.includes('goodDetail')"></navbar>
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