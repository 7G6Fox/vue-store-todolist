<template>
  <div id="goodDetail">
    <topNav class="goodNav" color="#fff" fontcolor="black">
      <img src="@/assets/imgs/shop/back.svg" slot="left" @click="goBack" />
      <p class="row_flex" slot="center">
        <span
          v-for="(item, index) in bannerList"
          :key="index"
          :class="{ active: index === bannerIndex }"
          @click="goodActive(index)"
        >
          {{ item }}
        </span>
      </p>
    </topNav>

    <Scroll class="wrapper" 
    ref="scroll"
    :probeType="3"
    :distance="distance"
    >
      <Swiper class="img-swiper">
        <SwiperItem v-for="(img, index) in imgList" :key="index">
          <img :src="img" @load="detailImgLoad"/>
        </SwiperItem>
      </Swiper>

      <ShowInfo :goodInfo="goodInfo" />
      <ShopDetail :shopInfo="shopInfo" />
      <GoodsDetail @imageLoad="imageLoad" :detailInfo="detailInfo" />
      <DetailParams ref="params" :paramInfo="paramInfo" />
      <DetailComment ref="comments"  :commentInfo="commentInfo" />
      <GoodsList ref="recommends" :goods="recommends"></GoodsList>
    </Scroll>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
import Scroll from "components/common/scroll/MyScroll";
import topNav from "@/components/common/topNav";
import  debounce from '@/components/common/util';

import {
  getDetail,
  getRecommend,
  GoodInfo,
  ShopInfo,
  GoodsParam,
} from "@/network/shop";

import ShowInfo from "./detailCom/good-info";
import ShopDetail from "./detailCom/detail-shop";
import GoodsDetail from "./detailCom/detail-goods.vue";
import DetailParams from "./detailCom/detail-params";
import DetailComment from "@/view/demo/mall/detailCom/detail-comment";
import GoodsList from '@/components/shop/GoodsList';
export default {
  name: "GoodDetail",
  data() {
    return {
      bannerList: ["商品", "参数", "评论", "推荐"],
      bannerIndex: 0,
      iid: null,
      imgList: [],
      goodInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      TopY: 0, //  记录内容的offsetTop
      getTopY: null, //防抖函数
      currentIndex: 0,
    };
  },
  components: {
    Swiper,
    SwiperItem,
    Scroll,
    topNav,
    ShowInfo,
    ShopDetail,
    GoodsDetail,
    DetailParams,
    DetailComment,
    GoodsList
  },
  created() {
    this.getGoodInfo();
  },
  mounted() {
    this.iid = this.$route.query.iid;
    //将每个组件的真实dom元素的高存放在数组中
    //等待组件都挂载后初始化
    this.getTopY = function(){
        this.TopY = [];
        this.TopY.push(0);
         this.TopY.push(this.$refs.params.$el.offsetTop-50);
        this.TopY.push(this.$refs.comments.$el.offsetTop-50);
        this.TopY.push(this.$refs.recommends.$el.offsetTop-50);
        this.TopY.push(Infinity);
          console.log('getTopY:',this.TopY);
      };
         
  },
  updated(){
    this.$refs.scroll.refresh();
  },
  methods: {
    //获得初始化数据
    getGoodInfo() {
      this.iid = this.$route.query.iid;
      getDetail(this.iid).then((res) => {
        const result = res.result;
        this.imgList = result.itemInfo.topImages;
        //商品信息
        this.goodInfo = new GoodInfo(
          result.itemInfo,
          result.columns,
          result.shopInfo.services
        );
        //店铺信息
        this.shopInfo = new ShopInfo(result.shopInfo);
        //商品详情
        this.detailInfo = result.detailInfo;
        //详情参数
        this.paramInfo = new GoodsParam(
          result.itemParams.info,
          result.itemParams.rule
        );
        //获取评论
        if (result.rate.cRate) 
        this.commentInfo = result.rate.list[0];
      });
      //获取推荐
      getRecommend().then((res)=>{
       this.recommends = res.data.list;
      });
    },
    imageLoad(){
      this.$refs.scroll.refresh();
      this.getTopY();
    },
    goBack() {
      this.$router.back();
    },
    goodActive(index) {
     this.bannerIndex = index;
     this.$refs.scroll.scrollTop(0,-this.TopY[index],400);  
    },
    //监听滚动高度
    distance(position){
     let posY= - position.y;
     const len = this.TopY.length;
    for(let i = 0 ; i<len-1 ; i++){
       if(this.bannerIndex !==
        i && posY>= this.TopY[i]&& posY < this.TopY[i+1]){
          this.bannerIndex = i ;  
     }
     }
     
    },
    detailImgLoad(){
      debounce(()=>{
      this.$refs.scroll.refresh();
      },50)

    }
  },
};
</script>

<style lang='scss' scoped>

#goodDetail {
  overflow: hidden;
  height: 100vh;
  position: relative;
  z-index: 1;
  .wrapper {
    height: calc(100% - 50px);
    background-color: white;
  }
  .img-swiper {
    background: $cut-line;
    height: 30rem;
    overflow: hidden;
  }
}
.goodNav {
  position: relative;
  z-index: 1;
  .row_flex span {
    flex: 1;
  }
  .active {
    color: $mall-orange;
  }
  img {
    padding: 5px;
  }
}
</style>