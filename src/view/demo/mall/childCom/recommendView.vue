<template>
  <div class="recommend row_flex">
      <span v-for="item in recommends" :key="item.index">
         <a :href="item.link">
             <img :src="item.image">
             <p>{{item.title}}</p>
         </a>
      </span>
  </div>
</template>

<script>
export default {
name:'RecommendView',
  props :{
     recommends:{
         type:Array,
         default(){
             return []
         }
     }
  }
}
</script>

<style scope>
 .recommend{
     width: 100%;
     padding: 1rem 0 1.5rem;
     color: rgb(85, 82, 82);
     border-bottom: 8px solid rgba(217, 217, 217, 0.83);
     max-height: 14rem;
 }

  .recommend>span{
      flex:1;
  }
  span img{
      width: 6.5rem;
      height: 6.5rem;
      margin-bottom: 1rem;
  }
  .recommend a{
     color: #868686;
     font-size: 1.4rem;
  }
</style>