<template>
  <div class="foot-item" :class="{ active: isActive }">
    <span @click="itemClick" :style="{ color: changeColor }">
      <slot name="icon"></slot>
      <slot name="text"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "tabItem",
  data() {
    return {};
  },
  props: {
    path: { type: String },
    itemColor: {
      type: String,
      default: "black",
    },
  },
  computed: {
    isActive() {
     
      return this.$route.path.includes(this.path);
      //若此时route页面与某一path相同，则返回 true，相当于返回对应的path
    },
    changeColor() {
      return this.isActive ? this.itemColor : "";
    },
  },
  methods: {
    itemClick() {
       const user = localStorage.getItem('user') || false
       let isLogin=false
       if(user && user.length !== 0) {
        isLogin = JSON.parse(user).isLogin
        // console.log(isLogin);
       }
      
      if(this.path === 'car'&& !isLogin){
        this.$router.push('/toMall/toLogin');
      }else{
      if(!this.$route.path.includes(this.path)){
        //当前路径中不包括本path就执行
       this.$router.push(this.path);
      }}
      // else{
      //   console.log('重复点击');
      // }      
    },
  },
};
</script>

<style lang="scss" scoped>
$ico_gray: #8a8a8a;
.foot-item {
  flex: 1;
  color: $ico_gray;
  i {
    font-size: 2.8rem;
  }
  .item-text {
    margin-top: 1px;
      font-size: 1.4rem;
  }
}
</style>