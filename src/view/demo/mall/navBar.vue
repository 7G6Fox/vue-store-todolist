<template>
  <bar> 
      <item path='shopHome' >
        <i slot='icon' class="iconfont icon-mall"/>
        <p slot='text'>首页</p>
      </item>
      <item path='category'>
        <i slot='icon' class="iconfont icon-tag2"/>
        <p slot='text' class="item-text">分类</p>
      </item>
      <item path='car'>
        <i slot='icon'  class="iconfont icon-shop2"/>
        <p slot='text' class="item-text">购物车</p>
      </item>

      <item path='shopCentre'>
          <i slot='icon'  class="iconfont icon-person"/>
          <p slot='text' class="item-text">我的</p>
      </item>
    </bar>
</template>

<script>
import bar from "./tabBar";
import item from "./tabItem";
export default {
components: {bar,item},
}
</script>

<style>

</style>