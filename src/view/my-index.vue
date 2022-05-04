<template>
  <div id="page">
    <nav>
      <div class="item"><router-link to="/toList">待做事项</router-link></div>
      <div class="item"><router-link to="/toMall">购物商城</router-link></div>
    </nav>

    <div class="content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "myIndex",
};
</script>

<style scoped>
nav {
  margin: 5rem auto;
}

.item {
  width: 10rem;
  height: 8rem;
  margin: 2rem;

  background: linear-gradient(225deg, transparent 32px, pink 0);
  position: relative;
  border-radius: 5;
}
.item::after {
  content: "";
  position: absolute;
  right: 0px;
  top: 0px;
  background: linear-gradient(-135deg, transparent 50%, pink 0);
  width: 45px;
  height: 45px;
  border-bottom-left-radius: 4px;
  box-shadow: -1px 5px 2px 0 #e88b998a;
}
a {
  text-align: center;
  line-height: 8rem;
  padding: 1rem;
  color: white;
  font-size: 1.4rem;
}
</style>