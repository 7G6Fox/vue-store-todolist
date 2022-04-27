<template>
  <div
    v-if="
      Object.keys(detailInfo).length !== 0 &&
      detailInfo.detailImage[0].list !== null
    "
    class="detail-goods"
  >
    <div class="info-desc">
        <span class="start"></span>
      <span class="desc">{{ detailInfo.desc }}</span>
         <span class="end"></span>
    </div>
    <div  class="info">{{ detailInfo.detailImage[0].key }}</div>
     
    <div class="img-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoods",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
      imgLength: 0,
    };
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imgLength) {
        this.$emit("imageLoad");
      }
    },
  },
  watch: {
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>

<style scoped>
.detail-goods{
border-top: 5px solid gainsboro;
padding: 3rem 0;

}
div .info {
  text-align: center;
  padding: 1rem 0;
  font-size: 1.4rem;
  color: #6a6767;
}
.info-desc{
    padding: 0 1.5rem;
}
.info-desc .start,.info-desc .end{
    width: 9rem;
    height: .1rem;
    background-color: #a3a3a5;
    position:relative
}
.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
  margin-top: .5rem;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 1.1rem;
}
.img-list img {
  width: 90%;
  margin: 5px auto;
  display: block;
}
</style>