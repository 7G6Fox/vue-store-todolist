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

    <Scroll class="scroll" 
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
      
      <ToTop @click.native='backClick' v-show="isBackShow" />
      <DetailBar :myId = "iid" @addToCar="addToCar"/>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
import Scroll from "components/common/scroll/MyScroll";
import topNav from "@/components/common/topNav";
import  debounce from '@/components/common/util';
import ToTop from "components/shop/ToTop";

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
import DetailBar from './detailCom/detail-bar-bottom';
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
      isBackShow: false,//点击回到最上方
    };
  },
  components: {
    Swiper,
    SwiperItem,
    Scroll,
    topNav,
    ToTop,
    ShowInfo,
    ShopDetail,
    GoodsDetail,
    DetailParams,
    DetailComment,
    GoodsList,
    DetailBar
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
    backClick() {
     this.$refs.scroll.scrollTop(0, 0, 1500);
    },
    goodActive(index) {
     this.bannerIndex = index;
     this.$refs.scroll.scrollTop(0,-this.TopY[index],400);  
    },
    //监听滚动高度
    distance(position){
     let posY= - position.y;
     const len = this.TopY.length;
     //判断滚动到了哪里，将导航栏样式做出对应修改
    for(let i = 0 ; i<len-1 ; i++){
       if(this.bannerIndex !==
        i && posY>= this.TopY[i]&& posY < this.TopY[i+1]){
          this.bannerIndex = i ;  }
     }
     this.isBackShow = -position.y > 1000;
    },
    detailImgLoad(){
      debounce(()=>{
      this.$refs.scroll.refresh();
      },50)
    },
    addToCar(){
      //购物车商品的数据结构
      const product ={};
      product.iid = this.iid;
      product.img = this.imgList[0];
      product.title = this.goodInfo.title;
      product.desc = this.goodInfo.desc;
      product.newPrice = this.goodInfo.realPrice;
       product.count = 0;
       product.checked = false;
      //将加入购物车方法在action中包装成promise，执行成功再显示提示
       this.$store.dispatch('addToCar', product).then((text)=>{
              this.$toast.show(text);
       });
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
  .scroll {
    height: calc(100% - 5rem - 5rem);
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