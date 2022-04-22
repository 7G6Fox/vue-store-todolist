<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "MyScroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 2,
    },
    distance: {
      type: Function,
    },
    pullUpLoad:{
      type :Boolean,
      default: false,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    //这个是利用父组件向子组件传变量的形式传函数，子组件调用并发送内部的变量
    this.scroll.on("scroll", (position) => {
      this.distance(position);
    });
   //上拉加载，监听事件，当属性为真的时候，监听事件，向父组件发送pullingUp事件
   //父组件监听自定义事件，调用回调函数，加载更多数据
    if(this.pullUpLoad){
       this.scroll.on('pullingUp',()=>{
         this.$emit("pullingUp");
       });
    }
  },
  methods: {
    scrollTop(x, y, timer = 500) {
      this.scroll.scrollTo(x, y, timer);
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll.refresh();
      // console.log('refresh...');
    }
  },
};
</script>

<style>
</style>