<template>
  <div class="shop-car">
    <topNav>
      <p slot="center">购物车({{ carLength }})</p>
    </topNav>

    <MyScroll ref="scroll" class="wrap" :probeType="3">
      <div class="car-item" v-for="(item, index) in carList" :key="index">
        <div class="row_flex">
          <input
            type="checkbox"
            @click="isChecked(item)"
            v-model="item.checked"
          />
          <img :src="item.img" />
          <div class="car-left">
            <p>
              <strong>{{ item.title }}</strong>
            </p>
            <span>{{ item.desc }} </span>
            <p>
              <span class="car-price">￥{{ item.newPrice }}</span>
              <span class="car-number">
                <input @click="less(item)" type="button" value="-" />
                <input type="text" :value="'x' + item.count" disabled />
                <input @click="add_counter(item)"  type="button" value="+" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </MyScroll>

    <div class="carCount row_flex">
      <label>
        <input type="checkbox" @click="checkAll" v-model="isCheckAll" />
        全选
      </label>
      <div class="count-right">
        <span>
          <p>
            已选中{{ totalCount }}件，合计：<strong>{{ totalPrice }}</strong>
          </p>
          <p class="delete" @click="deleteItem">删除</p>
        </span>
      </div>

      <button class="car-total">结算</button>
    </div>
  </div>
</template>

<script>
import topNav from "@/components/common/topNav";
import MyScroll from "@/components/common/scroll/MyScroll";
import { mapGetters,mapMutations } from "vuex";
export default {
  name: "shopCar",
  data() {
    return {};
  },
  components: { topNav, MyScroll },
  computed: {
    ...mapGetters(["carLength", "carList", "totalPrice", "totalCount"]),
    isCheckAll: {
      //点击全选按钮时，会进入set，存储isCheckAll
      //全选按钮的checked为true时set传入value=true
      set(value) {
        this.checkAll(value);
      },
      //每次状态变化时，调用，判断是否被全选
      get() {
        const checkLength = this.carList.reduce(
          (pre, item) => pre + (item.checked ? 1 : 0),
          0
        );
        console.log("isCheckAll", checkLength);
        console.log("isCheckAll", this.carList);
        return checkLength === this.carLength && this.carLength > 0;
      },
    },
  },
  methods: {
    ...mapMutations(['add_counter','less_counter']),
    less(item){
     if(item.count<=1){
this.$toast.show("不能再减少了");
     }else{
       this.less_counter(item);
     }
       
     
    },
    deleteItem() {
      const number = this.totalCount;
      let a = confirm("确定删除这" + number + "件商品吗？");
      if (a) {
        this.$store.dispatch("deleteItem").then((text) => this.$toast.show(text));
      }
    },
    isChecked(item) {
      item.checked = !item.checked;
    },
    checkAll(value) {
      this.carList.forEach((element) => (element.checked = value));
    },
  },
  mounted() {
    console.log();
  },
  activated() {
    this.$refs.scroll.refresh();
    // this.$store.dispatch("getList");
    console.log("组件被激活");
  },
  beforeDestroy() {
    // this.$store.commit('setList');
  },
};
</script>

<style lang="scss" scoped>
.shop-car {
  height: 100vh;
  position: relative;

  .wrap {
    height: calc(100% - 5rem - 5rem - 5rem);
    overflow: hidden;
    .row_flex {
      align-items: center;
      padding: 0.8rem;
      border-bottom: 5px solid gainsboro;
    }
    img {
      height: 12rem;
      width: 8rem;
      border-radius: 5px;
    }
    input[type="checkbox"] {
      width: 1.7rem;
      height: 1.7rem;
      margin-right: 0.8rem;
    }
    div.car-left {
      flex: 1;
      font-size: 1.25rem;
      font-family: "幼圆";
      letter-spacing: 1px;
      padding: 0 8px;
      p:last-child {
        position: relative;
        top: 2rem;
        display: block;
        height: 2.5rem;
        width: 100%;
        line-height: 2.5rem;
        float: left;
        padding-left: 10px;
        font-size: 1.8rem;
        .car-price {
          letter-spacing: -1px;
          color: #ff6000;
          position: absolute;
          left: 0;
        }
      }
      .car-number {
        position: absolute;
        right: 0;
        input {
          width: 2.5rem;
          height: 2.5rem;
          text-align: center;
          font-size: 15px;
          border: 1px solid gray;
          border-radius: 0;
        }
        input:nth-child(2) {
          width: 3rem;
          border-left: none;
          border-right: none;
          background-color: white;
        }
  
      }
      p:first-child {
        display: block;
        height: 3rem;
        overflow: hidden;
        position: relative;
        bottom: 2.5rem;
        strong {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          word-break: break-all;
          letter-spacing: 2px;
        }
      }
    }
  }
  .car-item {
    height: 14rem;
  }
  .carCount {
    height: 5rem;
    background-color: white;
    border-top: 1px solid gainsboro;
    position: relative;
    align-items: center;
    justify-content: space-evenly;
    font-size: 16.5px;
    .count-right {
      letter-spacing: -1.5px;
      strong {
        color: $mall-orange;
      }
      .delete {
        font-size: 14.5px;
        text-align: right;
      }
    }
    label {
      font-size: 15px;
      color: gray;
    }
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }
  }
  .car-total {
    height: 40px;
    width: 60px;
    letter-spacing: 2px;
    background-color: #ff0000cf;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
  }
}
</style>