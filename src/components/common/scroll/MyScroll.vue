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
    //是否滚动
    probeType: {
      type: Number,
      default: 1,
    },
    //父组件回调函数
    distance: {
      type: Function,
      default: null,
    },
    //上拉加载
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$nextTick(()=>{
    this.initScroll();
    })
    // setTimeout(() => {
      //等dom加载完毕后再初始化

    // }, 20);
  },
  updated() {
    if (this.scroll) this.scroll.refresh();
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        observeDOM: true,
        // mouseWheel: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
      //这个是利用父组件向子组件传变量的形式传函数，子组件调用并发送内部的变量

      //上拉加载，监听事件，当属性为真的时候，监听事件，向父组件发送pullingUp事件
      //父组件监听自定义事件，调用回调函数，加载更多数据
      if (this.distance!==null) {
        this.scroll.on("scroll", (position) => {
          this.distance(position);
        });
      }

      // 是否上拉加载
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp");
          this.scroll.finishPullUp();
        });
      }
    },
    scrollTop(x, y, timer = 500) {
      this.scroll && this.scroll.scrollTo(x, y, timer);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      // console.log('refresh...');
    },
  },
};
</script>

<style>
</style>