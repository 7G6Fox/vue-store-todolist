<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <p>客服</p>
      </div>

      <div>
        <i class="icon shop"></i>
        <p>店铺</p>
      </div>

      <div @click="collect">
        <i class="icon" :class="{collected}"></i>
        <p>收藏</p>
      </div>
    </div>

    <div class="bar-item bar-right">
      <div class="cart" @click="addToCar">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data(){
      return{
          collected:false,
          collectItem:JSON.parse(localStorage.getItem('collectItem'))||[],
      }
  },props:{
    myId:{
      type:String,
      default(){
        return this.$route.query.iid
      }
    }
  },
  mounted(){
    //判断是否收藏
   if(this.collectItem.includes(this.myId)){
        this.collected = true
      }else{
        this.collected = false
        } },
   watch:{
        collectItem:{
          handler(value){
          localStorage.setItem("collectItem", JSON.stringify(value));
          }
        }
    },
  methods:{
      collect(){
        this.collected = !this.collected;
        if(this.myId == null)
          return ;
        if(this.collectItem.includes(this.myId) && !this.collected){
          // console.log('移除',this.iid,'item',this.collectItem);
          this.collectItem = this.collectItem.filter((item) => item !== this.myId);
        }else{
           this.collectItem.push(this.myId);
        // console.log('push',this.myId,'item',this.collectItem);  
      }
      },
      addToCar(){
        this.$emit("addToCar");
      }
  },

};
</script>

<style lang="scss" scoped>
.bottom-bar {
  position: relative;
  height: 5rem;
  width: 100%;
  background-color: $white;
  display: flex;
  text-align: center;

}

.bar-item {
  flex: 1;
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  div {
    flex: 1;
  }
}
.bar-left {
  .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto -2px;
    background: url("@/assets/imgs/shop/detail_bottom.png") 0 0/100%;   
  }
  p{
        padding: 3px 0;
    }
  .service {
    background-position: 0 -54px;
  }
  .shop {
    background-position: 0 -98px;
  }
  .collected{
      background-position: 0 -27px;
  }
}

.bar-right {
  color: $white;
  line-height: 55px;
  div {
    margin: 5px 0;
  }
}
.cart {
  height: 55px;
  background-color: $mall-orange;
  border-radius: 10px 0 0 10px;
}
.buy {
  height: 55px;
  background-color: $light-red;
  border-radius: 0 10px 10px 0;
}
</style>