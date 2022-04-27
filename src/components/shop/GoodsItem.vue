<template>
  <div class="good-item">
    <img @click="toDetail" :src="showImage" />
    <div class="goods-info">
      <p @click="toDetail">{{ good.title }}</p>
      <span class="price">￥{{ good.price }}</span>
      <span class="collect">♡ {{ good.cfav }}</span>
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
  methods:{
    toDetail() {
      if(this.$route.path.includes('goodDetail'))
      return alert('施工中...无法跳转');
      this.$router.push({
        path: '/toMall/goodDetail',
        query: { iid: this.good.iid }
      });
    },
  },
  computed: {
    showImage() {
      return this.good.image || this.good.show.img;
    },
  },
};
</script>

<style lang='scss' scope>
.good-item {
  width: 48%;
  font-size: 1.4rem;
  padding-bottom: 60px;
  position: relative;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 16px;
  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-bottom: 5px;
    }
    .price {
      color: $mall-orange;
      margin: 2px 10px;
    }
  }
}
</style>