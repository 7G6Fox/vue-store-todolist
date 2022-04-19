<template>
  <div id="shopHome">
    <topnav fontcolor="#fff"  color="#ff9234">
      <p slot="center">商品首页</p>
    </topnav>

    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </SwiperItem>
    </Swiper>

    <RecommendView :recommends="recommends"></RecommendView>
    
    <a href="">
    <img src="@/assets/imgs/shop/feature_bg.jpg" />
     </a>
     
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
       <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
       <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>
<script>
import topnav from "components/common/topNav";
import { Swiper, SwiperItem } from "components/common/swiper/index";

import { getHomeMultidata } from "network/shop";

import RecommendView from "./childCom/recommendView";
export default {
  name: "shopHome",
  components: { topnav, Swiper, SwiperItem, RecommendView },
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
    };
  },
  created() {
    this.getHomeData();
  },
  methods: {
    getHomeData() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(this.banner);
      });
    },
  },
};
</script>

<style lang="scss" scope>
</style>