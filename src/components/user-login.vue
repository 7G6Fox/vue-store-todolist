<template>
  <div class="user">
    <topNav>
      <span slot="left" @click="toMall">返回</span>
    </topNav>
    <div class="massage" v-if="!isRegis">
      <p>欢迎回来，请登录：</p>
      <i>还没有账户？<em @click="toRgis">去注册</em></i>
    </div>
    <div class="massage" v-else>
      <p>欢迎你，游客！请注册：</p>
      <i>已经注册？<em @click="toLogin">去登录</em></i>
    </div>
    <input type="text" v-model="username" placeholder="请输入用户名" />
    <input
      type="password"
      maxlength="12"
      v-model="password"
      placeholder="请输入密码"
    />
    <button @click="getUser" v-if="!isRegis">登录</button>
    <button @click="addUser" v-else>注册</button>
  </div>
</template>

<script>
import topNav from "@/components/common/topNav";
export default {
  name: "userLogin",
  data() {
    return {
      username: "",
      password: "",
      isRegis: false,
      rules: {
        //手机号验证
        password: {
          rule: /^\w{6,12}$/,
          msg: "密码不能为空，并且是6-12位",
        },
      },
      oldUser: {},
    };
  },
  components: { topNav },
  activated() {
    if(localStorage.getItem("user")){
    this.oldUser = JSON.parse(localStorage.getItem("user"));
    // console.log('this.oldUser',this.oldUser);
    }
  },
  methods: {
    toRgis() {
      this.isRegis = !this.isRegis;
      this.username = "";
      this.password = "";
    },
    islegal(name) {
      if (name === "") {
        this.$toast.show("用户名不能为空");
        return false;
      } else if (!this.validate("password")) {
        return false;
      } else {
        return true;
      }
    },
    toLogin() {
      this.isRegis = !this.isRegis;
    },
    toMall() {
      this.$router.replace("/toMall");
    },
    addUser() {
      let name = this.username;
      let pwd = this.password;
       console.log('olduser',this.oldUser);
     
      if (!this.oldUser ||JSON.stringify(this.oldUser) == '{}' ) {
        if (!this.islegal(name)) {
          return;
        } else {
          const user = {};
          user.username = name;
          user.password = pwd;
          user.isLogin = false;
          this.oldUser = user;
          // console.log("注册成功", user);
          localStorage.setItem("user", JSON.stringify(user));
        }
      } else {
        this.$toast.show("你已经注册过了");
      }
    },
    getUser() {
      let user ={}
      user.name = this.username;
      user.pwd = this.password;
      let oldName=this.oldUser.username;
      let oldpwd=this.oldUser.password;
      user.isLogin = false;
        if (!this.islegal(user.name)) {
          return;
        }else{
         if (this.oldUser && user.name==oldName && user.pwd==oldpwd) {
        this.oldUser.isLogin = true;
        user = this.oldUser;
        localStorage.setItem("user", JSON.stringify(user));
        this.$toast.show('登录成功');
        //自动跳转主页
        setTimeout(()=>{
           this.$router.replace('/toMall');
        },500)
      }else{
         this.$toast.show('用户名或密码错误');
      }
      
        }
     
    },
    validate(key) {
      let bool = true;
      if (!this.rules[key].rule.test(this[key])) {
        //提示信息
        this.$toast.show(this.rules[key].msg);
        bool = false;
        return false;
      }
      return bool;
    },
  },
};
</script>

<style lang='scss' scoped>
.user {
  height: 100vh;
  z-index: 1;
  background-color: $mall-orange;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  span {
    position: absolute;
    top: 0;
  }
  .massage {
    font-size: 2.2rem;
    display: block;
    width: 80%;
    margin: 10px 20px;
    color: white;
    font-family: initial;
    i {
      opacity: 0.8;
      font-size: 1.5rem;
    }
  }
  input {
    outline-style: none;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #ff4810;
    width: 80%;
    height: 5rem;
    font-size: 1.8rem;
    color: white;
  }
  button {
    height: 4rem;
    width: 80%;
    border: none;
    margin-top: 1.8rem;
    border-radius: 2px;
    box-shadow: 0 0 2px 1px #f78874;
    font-size: 1.8rem;
    letter-spacing: 20px;
    font-weight: bold;
    color: white;
    background-color: #ff2600;
  }
}
</style>