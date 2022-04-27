<template>
  <bar> 
      <item path='shopHome' itemColor='#ff9234'>
        <i slot='icon' class="iconfont icon-mall"/>
        <p slot='text'>首页</p>
      </item>
      <item path='category' itemColor='#ff9234'>
        <i slot='icon' class="iconfont icon-tag2"/>
        <p slot='text' class="item-text">分类</p>
      </item>
      <item path='car' itemColor='#ff9234'>
        <i slot='icon'  class="iconfont icon-shop2"/>
        <p slot='text' class="item-text">购物车</p>
      </item>

      <item path='shopCentre' itemColor='#ff9234'>
          <i slot='icon'  class="iconfont icon-person"/>
          <p slot='text' class="item-text">我的</p>
      </item>
    </bar>
</template>

<script>
import bar from "components/common/tab/tabBar";
import item from "components/common/tab/tabItem";
export default {
components: {bar,item},
}
</script>

<style scope>
.iconfont{
  padding: 0 15px;
}
</style>