<template>
  <div id="shopHome">
    <topnav>
      <p slot="center">商品首页</p>
    </topnav>
       <TabControl
        class="tab-control"
        :titles="['流行', '爆款', '精选']"
        ref="tabControl1" v-show="isTabShow"
      />

    <Scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :distance="getDistance"
      :pull-up-load="true"
      @pullingUp="loadMore">
      <Swiper>
        <SwiperItem v-for="item in banners" :key="item.id" >
          <a :href="item.link">
            <img :src="item.image" @load="imageLoad" />
          </a>
        </SwiperItem>
      </Swiper>
      <RecommendView :recommends="recommends"></RecommendView>

      <a href>
        <img src="@/assets/imgs/shop/feature_bg.jpg" />
      </a>

      <TabControl
        :titles="['流行', '爆款', '精选']"
        ref="tabControl2"
        v-show="! isTabShow"
      />
      <GoodsList :goods="goods[currentType].list" />
    </Scroll>

    <ToTop @click.native='backClick' v-show="isBackShow" />
  </div>
</template>
<script>
import topnav from "components/common/topNav";
import TabControl from "components/common/tabControl/TabControl";
import { Swiper, SwiperItem } from "components/common/swiper/index";
import Scroll from "components/common/scroll/MyScroll";
import ToTop from "components/shop/ToTop";

import { getHomeMultidata, getHomeGood } from "network/shop";

import RecommendView from "./childCom/recommendView";
import GoodsList from "components/shop/GoodsList";
export default {
  name: "shopHome",
  components: {
    ToTop,
    topnav,
    TabControl,
    Scroll,
    Swiper,
    SwiperItem,
    RecommendView,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isBackShow: false,
      tabOffsetTop: 0,
      isLoad: false,
      isTabShow:false,
      savaY:0
    };
  },
  created() {

    this.getHomeData();
    //  请求商品
    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");
  },
  mounted() {

    //
    this.$bus.$on("GoodsIndex", (index) => {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
       this.$refs.tabControl2.currentIndex = index;
    });
//  this.$refs.scroll.refresh();
  },
  activated(){
    // console.log("组件被激活,y：",this.savaY);
     this.$refs.scroll.scrollTop(0, this.savaY, 1500);
  },
  deactivated(){
    this.savaY = this.$refs.scroll.scroll.y;
    // console.log('组件被销毁',this.savaY);
  },
  methods: {
    // 网络请求
    getHomeData() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getGoodsData(type) {
      //page存储本次请求数据是第几次请求
      const page = this.goods[type].page + 1;
      getHomeGood(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    backClick() {
     this.$refs.scroll.scrollTop(0, 0, 1500);
    },
    //scroll中,监听滚动的回调函数
    getDistance(position) {
      
       this.isBackShow = -position.y > 1000;
       this.isTabShow= (-position.y) > this.tabOffsetTop;
      //  console.log('distance:',position.y);
      //  console.log('tabOffsetTop:',this.tabOffsetTop);
    },
    loadMore() {
      this.getGoodsData(this.currentType);
      this.$refs.scroll.refresh();
    },
    imageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

  },
 
  beforeDestroy() {
    this.$bus.$off("GoosIndex");
  },
};
</script>

<style lang="scss" scope>
#shopHome {
  height: 100vh;
  position: relative;
  .content {
    position: absolute;
    overflow: hidden;
    height: calc(100% - 4.4rem - 5.5rem);
   
  }
  ul {
    color: $mall-orange;
  }
  img:last-child {
    width: 100%;
    margin-left: 1px;
  }
  .tab-control{
    position: relative;
  }
}
</style>