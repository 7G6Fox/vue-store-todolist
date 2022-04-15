<template>
  <div id="page">
    <nav>
        <router-link to="/home/index">首页</router-link>
        <router-link to="/home/article">文章列表</router-link>
        <router-link to="/home/demo">个人作品</router-link>
        <router-link to="/home/comment">留言区</router-link>
        <router-link to="/write">发布</router-link>
        <a href="javascript:void(0)">用户登录</a>
        <router-link to="/toLogin">访问后台</router-link>
    </nav>
  
   <div class="content">
    <keep-alive>
       <router-view/>
    </keep-alive>
   </div>
    
  </div>
</template>

<script>
export default {
  name: "myIndex",
};
</script>

<style lang='scss'>
 @import '../assets/page.scss'
</style>