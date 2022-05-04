<template>
  <div class="center">
    <topNav>
      <span slot="left"> 我的 </span>
    </topNav>
    <div class="message">
      <img src="@/assets/imgs/shop/imgLose.png" />
      <div class="text" v-if="user.isLogin">
        <p>欢迎回来</p>
        <p>用户：{{ user.username }}</p>
      </div>
      <div class="text" v-else>
        <button @click="toLogin">登录注册</button>
      </div>
    </div>
    <div class="content row_flex">
      <span>
        <p><i class="count">0.00</i> 元</p>
        <p>我的余额</p>
      </span>
      <span>
        <p><i class="count">0</i>个</p>
        <p>我的优惠</p>
      </span>
      <span>
        <p><i class="count">0</i>分</p>
        <p>我的积分</p>
      </span>
    </div>
    <ul>
      <li>
        <img src="@/assets/imgs/shop/center/order.svg" />
        订单管理
      </li>
      <li>
        <img src="@/assets/imgs/shop/center/collec.svg" />
        收藏管理
      </li>
      <li>
        <img src="@/assets/imgs/shop/center/cart.svg" />
        我的购物车
      </li>
      <li v-if="user.isLogin" @click="logOut">退出登录</li>
    </ul>
  </div>
</template>

<script>
import topNav from "@/components/common/topNav";
export default {
  name: "shopCentre",
  components: {
    topNav,
  },
  data() {
    return {
      user: {},
    };
  },
  activated() {
    const user = localStorage.getItem("user");
    if (user) {
      this.user = JSON.parse(user);
      console.log('USER',this.user);
    }
  },
  methods: {
    toLogin() {
      this.$router.replace("/toMall/toLogin");
    },
    logOut() {
      setTimeout(() => {
        this.user.isLogin = false;
        localStorage.setItem("user", JSON.stringify(this.user));
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.center {
  background-color: white;
  height: 10vh;
  div.content {
    justify-content: space-around;
    align-content: center;
    border-bottom: 10px solid gainsboro;
    span {
      padding: 1.2rem 2rem;

      &:nth-child(2) {
        border-left: 1px solid $cut-line;
        border-right: 1px solid $cut-line;
      }
      i {
        font-weight: bold;
        color: $mall-orange;
        font-size: 2rem;
        font-style: inherit;
      }
      p {
        margin-top: 3px;
      }
    }
  }
  ul > li {
    padding: 1.3rem 2rem;
    letter-spacing: -1px;
    border-bottom: 1px solid gainsboro;
    font-size: 16px;
    img {
      width: 3rem;
    }
  }
  .message {
    background-color: $mall-orange;
    height: 13rem;
    img {
      width: 22%;
      background-color: white;
      border-radius: 50%;
      margin: 0 auto;
      display: block;
    }
    .text {
      font-size: 1.6rem;
      margin-top: 10px;
      text-align: center;
      p {
        color: white;
      }
      button {
        color: $mall-orange;
        background-color: white;
        width: 9rem;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
        height: 3rem;
        letter-spacing: -1px;
      }
    }
  }
}
</style>