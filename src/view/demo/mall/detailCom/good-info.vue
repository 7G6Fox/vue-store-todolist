<template>
  <div v-if="Object.keys(goodInfo).length !== 0 " class="good-info">
    <p>{{ goodInfo.title }}</p>

    <p class="price">
      <em>{{ goodInfo.price }}</em>
      <s>{{ goodInfo.oldPrice}}</s>
      <sup>{{ goodInfo.discount }}</sup>
    </p>

    <p class="row_flex">
      <span>{{ goodInfo.columns[0] }}</span>
      <span>{{ goodInfo.columns[1] }}</span>
      <span>{{ goodInfo.services[goodInfo.services.length - 1].name }}</span>
    </p>

   <p class="row_flex info-service">
      <span v-for=" index in goodInfo.services.length-2" :key="index">
        <img v-show="goodInfo.services[index].icon" :src="goodInfo.services[index].icon">
        {{goodInfo.services[index].name}}
        </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "ShowInfo",
  props: {
    goodInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.good-info {
  margin: 10px;
  p{
      padding-bottom: 5px;
  }
}
.good-info p:first-child {
  font-size: 1.5rem;
}
.good-info p:nth-child(2) {
    padding: .8rem 0 1.5rem 0;

  em {
    font-size: 2rem;
    color: $mall-orange;
    padding-right: 5px;
    position: relative;
  }
  s {
     font-size: 1em;
    color: $ico_gray;
     padding-right: 5px;
  }
  sup {
    display: inline-block;
    height: 1.8rem;
    padding: 0 1px;
    background-color: red;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.8rem;
    color: $white;
    border-radius: 5px;
    position: absolute;

  }
}
.row_flex{
  font-size: 1.2rem;
  color: $ico_gray;
  text-align: center;
  padding: 10px 2px;
  box-shadow: 0 1px 0 $cut-line;
  margin: 5px 0;
  &.info-service{
    img{
      width: 1.2rem;
      height: 1.2rem;
      margin: 0;
    }
    color: black;
    padding: 18px 0 17px 0;
    box-shadow: 0 4px 0 $cut-line;
  }
  span {
    flex: 1;
  }
}
</style>