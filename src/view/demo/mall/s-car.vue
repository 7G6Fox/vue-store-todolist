<template>
  <div class="shop-car">
    <topNav>
      <p slot="center">购物车({{ carLength }})</p>
    </topNav>

    <MyScroll ref="scroll" class="wrap" :probeType="3">
      <div class="car-item" v-for="(item, index) in carList" :key="index">
        <div class="row_flex">
          <input type="checkbox" v-model="item.checked" />
          <img :src="item.img" />
          <div class="car-left">
            <p>
              <strong @click="toDetail(item.iid)">{{ item.title }}</strong>
            </p>
            <span>{{ item.desc }} </span>
            <p>
              <span class="car-price">￥{{ item.newPrice }}</span>
              <span class="car-number">
                <input @click="less(item)" type="button" value="-" />
                <span @click="showMask(item)">
                  {{ "x" + item.count }}
                </span>
                <input @click="add_counter(item)" type="button" value="+" />
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
            选中{{ totalCount }}件，合计：<strong>{{ totalPrice }}</strong>
          </p>
          <p class="delete" @click="deleteItem">删除</p>
        </span>
      </div>

      <button class="car-total">结算</button>
    </div>

    <MyDialog :showItem="showItem" class="my-dialog" @on-close="dialogHide">
      <div slot="header">商品数量</div>
      <input
        slot="main"
        type="text"
        maxlength="3"
        v-model="myItem.count"
        @input="myItem.count = myItem.count.toString().replace(/[^\d]/g, '')"
      />
      <button slot="cancel" @click="dialogHide(false)">取消</button>
      <button slot="confirm" @click="dialogHide(true)">确定</button>
    </MyDialog>
  </div>
</template>

<script>
import topNav from "@/components/common/topNav";
import MyScroll from "@/components/common/scroll/MyScroll";

import MyDialog from "@/components/common/diolog/MyDialog";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "shopCar",
  data() {
    return {
      showItem: false,
      myItem: {},
    };
  },
  components: { topNav, MyScroll, MyDialog },
  computed: {
    ...mapGetters(["carLength", "carList", "totalPrice", "totalCount"]),

    //是否全选
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
        return checkLength === this.carLength && this.carLength > 0;
      },
    },
  },
  methods: {
    ...mapMutations(["add_counter", "less_counter"]),
    showMask(item) {
      this.showItem = true;
      this.myItem.iid = item.iid;
      this.myItem.count = item.count;
      this.error_msg = false;
    },
    //是否隐藏弹窗，什么时候关闭弹窗
    dialogHide(value) {
      if (value) {
        if (this.myItem.count) {
          this.$store.commit("change_Count", this.myItem);
          this.showItem = false;
        } else {
          this.showItem = true;
        }
      } else {
        this.showItem = false;
      }
    },
    less(item) {
      if (item.count <= 1) {
        this.$toast.show("不能再减少了");
      } else {
        this.less_counter(item);
      }
    },
    deleteItem() {
      const number = this.totalCount;
      let a = confirm("确定删除这" + number + "件商品吗？");
      if (a) {
        this.$store
          .dispatch("deleteItem")
          .then((text) => this.$toast.show(text));
      }
    },
    isChecked(item) {
      item.checked = !item.checked;
    },
    checkAll(value) {
      this.carList.forEach((element) => (element.checked = value));
    },
    toDetail(value) {
      this.$router.push({
        path: "/toMall/goodDetail",
        query: { iid: value },
      });
    },
  },
  mounted() {},
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
    height: calc(100% - 5rem - 5.5rem - 5rem);
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
        input,
        span {
          width: 3rem;
          height: 2.6rem;
          text-align: center;
          font-size: 15px;
          border: 1px solid gray;
          border-radius: 0;
        }
        input:first-child {
          border-radius: 6px 0 0 6px;
        }
        input:last-child {
          border-radius: 0 6px 6px 0;
        }
        span {
          display: inline-block;
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
    justify-content: space-between;
    font-size: 15.5px;

    .count-right {
      letter-spacing: -1.5px;
      strong {
        color: $mall-orange;
        font-size: 19px;
      }
      .delete {
        font-size: 14.5px;
        text-align: right;
      }
    }
    label {
      font-size: 15px;
      color: gray;
      padding-left: 15px;
    }
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }
  }
  .car-total {
    height: 100%;
    width: 100px;
    letter-spacing: 2px;
    background-color: #ff0000cf;
    border: none;
    color: white;
    font-size: 21px;
  }

  .my-dialog {
    input {
      border: none;
      border-bottom: 1.5px solid $mall-orange;
      font-size: 20px;
      padding: 10px;
    }
    button {
      border: none;
      color: #fff;
      font-size: 16px;
      background-color: #f05c42;
      border-radius: 3px;
      padding: 3px;
      margin: 10px 0 0 30px;
      font-family: "黑体";
      height: 38px;
      width: 60px;
    }
  }
}
</style>