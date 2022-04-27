<template>
  <div v-if="Object.keys(shopInfo).length !== 0" class="shop-detail">
    <div class="shop-top">
      <img :src="shopInfo.logo" />
      {{ shopInfo.name }}
    </div>
    <div class="shop-middle row_flex">
      <div class="shop-left">
        <span>
          <p>{{ shopInfo.sells | sellCountFilter }}</p>
          <p>总销量</p>
        </span>

        <span>
          <p>{{ shopInfo.goodsCount }}</p>
          <p>全部宝贝</p>
        </span>
      </div>

      <div class="shop-right">
        <p
          class="shop-score"
          v-for="(item, index) in shopInfo.score"
          :key="index"
        >
          <span>{{ item["name"] }}</span>
          <span class="score" :class="{ 'better-more': item['isBetter'] }">
            {{ item["score"] }}</span>
          <span class="highOrlow" :class="{ 'higher': item['isBetter'] }">
            {{ item["isBetter"] ? "高" : "低" }}
          </span>
        </p>
      </div>
    </div>

    <input type="button" value="进店逛逛"/>
  </div>
</template>

<script>
export default {
  name: "ShopDetail",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style lang="scss" scoped>
.shop-detail {
  margin: 2.2rem 1rem;
  .shop-top{
    color: gray;
    img {
    height: 5rem;
    width: 5rem;
  }
  }
  .shop-middle {
    align-items: center;
    font-size: 1.2rem;
    padding: 15px 0;
    div {
      flex: 1;
      span p:first-child{
        margin-bottom: .8rem;
      }
    }
    .shop-left {
      font-size: 1.4rem;
      border-right: 2px solid $cut-line;
    }
    .shop-left span:first-child {
      float: left;
      padding-left: 1.5rem;
    }
    .shop-score{
      display: grid;
      grid-template-columns: 3fr 2fr 1fr;
      padding: 0px 2rem;
        margin-bottom: 1rem;
   
      .score{
        color: $light-green; 
      }   
      .highOrlow{
          width: 1.5rem;
          color: $white;
          background-color:$light-green ;
          border-radius: 5px;
      }
        .better-more{
          color: $light-red;
        }   
       .higher{
          color: $white;
          background-color:$light-red;
        }
    }
  }

  input{
    margin: 0 auto;
display: block;
padding: 1rem 3.5rem;
border: none;
background-color: $cut-line;
letter-spacing: 2px;
  }
}
</style>