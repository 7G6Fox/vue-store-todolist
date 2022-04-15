<template>
  <div id="shopMall">
    <h1>跳蚤市场</h1>
 
      <router-view></router-view>
      <navbar></navbar>
  </div>
</template>

<script>
 import navbar from './mall/navBar.vue'
export default {
  name: "shopMall",
  components:{navbar},
  data() {
    return {
      
    }
  }
 
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mall/mall.scss";

</style>