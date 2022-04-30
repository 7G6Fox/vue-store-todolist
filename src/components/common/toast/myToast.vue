<template>
  <div class="toast" v-show="isShow">
    {{massage}}
  </div>
</template>

<script>
export default {
 name:"myToast",
 data(){
   return{
     massage:'',
     isShow: false
   }
 },
 methods:{
   show(msg="null",duration = 2500){
     this.massage = msg;
     this.isShow = true;
  //多久关闭
   setTimeout(()=>{
     this.isShow = false
   },duration)
 }
} 
}
</script>

<style scoped>
.toast {
  position : fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 7px 10px;
  background-color: rgba(0, 0, 0, .7);
  border-radius: 4px;
  color: #fff;
  z-index: 99;
}

</style>