<template>
   <div>  
          <input type="text" v-model="username" placeholder="请输入用户名">
          <input type="password" v-model="password" placeholder="请输入密码">
          <button @click="getUser">登录</button>
   </div>
</template>

<script>
import axios from 'axios'
export default {
   name:'userLogin',
  data(){
     return{
        username:null,
        password:null
     }
  },methods:{
    getUser(){
       axios.get('/user',{
          params:{
             id:1
          },
         //  headers:{
         //     name:'test'
         //  }
       });
    }
  }
}
</script>

<style>

</style>