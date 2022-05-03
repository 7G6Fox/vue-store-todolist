<template>
  <div class="shop-category">
    <topNav>
      <p slot="center">商品分类</p>
    </topNav>

    <div class="category">
      <Scroll class="categoryList" ref="navScroll" :probeType="2">
        <myCategory :Category="Category" :getItem="getItem"></myCategory>
      </Scroll>

      <Scroll class="subCategory" ref="itemScroll" :probeType="3" :distance="distance">
        <categoryItem :CategoryItem="CategoryItem" ></categoryItem>
      </Scroll>

      <ToTop @click.native='backClick' v-show="isBackShow" />
    </div>
  </div>
</template>

<script>
import topNav from "@/components/common/topNav";
import Scroll from "components/common/scroll/MyScroll";
import { getCategory, getCategoryItem } from "network/shop";
import ToTop from "components/shop/ToTop";

import categoryItem from "@/view/demo/mall/categoryCom/category-item";
import myCategory from "@/view/demo/mall/categoryCom/my-Category";

export default {
  name: "shopCategory",
  data() {
    return {
      Category: [],
      CategoryItem: [],
      currentCate: null,
       isBackShow: false,
    };
  },
  components: { Scroll, topNav, categoryItem, myCategory,ToTop },
  created() {
    //发送数据请求
    this.init_cate();
  },
  methods: {
    init_cate() {
      getCategory().then((res) => {
        const cate = res.data.category;
        this.Category = cate.list;
        this.currentCate = cate.list[0].miniWallkey;
        console.log("接收到了myCategory", this.currentCate);
        this.getItem(this.currentCate);
      });
    },
     getItem(miniWallkey) {
    console.log("getItem");
    this.currentCate = miniWallkey;
    getCategoryItem(miniWallkey).then((res) => {
  
      this.CategoryItem = res;
      console.log(this.CategoryItem);
    });
  },
  distance(position){
     this.isBackShow = -position.y > 1000;  
     },
      backClick() {
     this.$refs.itemScroll.scrollTop(0, 0, 1500);
    }
  },
 
 
};
</script>

<style lang="scss" scoped>
.shop-category {
  height: 100vh;
  max-width: 100%;
  position: relative;
}
.category {
  height: calc(100% - 5rem - 5.5rem);
  overflow: hidden;
  font-size: 1.6rem;
  display: flex;
  .categoryList {
    width: 25%;
    height: 100%;
    background-color: $cut-line;
  }
  .subCategory {
    width: 75%;
    height: 100%;
    background-color: $white;
  }
}
</style>