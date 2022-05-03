<template>
  <div class="good-item" v-show="this.good.length !== null">
    <img @click="toDetail" :src="showImage" />
    <div class="goods-info">
      <p @click="toDetail">{{ good.title }}</p>
      <p>
      <span class="price">￥{{ good.price }}</span>
      <span class="collect">♡ {{ good.cfav }}</span>
      </p>   
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    good: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    toDetail() {
      if (this.$route.path.includes("goodDetail"))
        return alert("施工中...无法跳转");
      this.$router.push({
        path: "/toMall/goodDetail",
        query: { iid: this.good.iid },
      });
    },
  },
  computed: {
    showImage() {
      if (this.good.show) {
        return this.good.show.img;
      } else {
        return this.good.image || this.good.img;
      }
    },
    // showPrice() {
    //   return this.good.price || this.good.props[10];
    // },
    // showCfav() {
    //   return this.good.price || this.good.props[9];
    // },
  },
};
</script>

<style lang='scss' scope>
.good-item {
  width: 46%;
  font-size: 1.4rem;
  padding-bottom: 3rem;
  position: relative;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 16px;
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
    height: 90%;
  }
  .goods-info {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin: 5px 0;
    }
    .price {
      color: $mall-orange;
      margin: 2px 10px;
    }
  }
}
</style>