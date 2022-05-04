<template>
  <div class="goods row_flex">

    <GoodsItem v-for="item in goods" :key="item.index"
          :good="item"/>
  </div>
</template>

<script>
//1、goodList拿从s-home的具体goods分类数据
//2、子组件for循环遍历数据展示
//小组件拿对象
//向子组件中的传数据时，记得过滤type
//3、内部点击事件后切换数据，用总线绑定或者自定义事件
import GoodsItem from './GoodsItem'
export default {
 name:'GoodsList',
 props:{
     goods:{
         type:Array,
         default(){
             return []
         }
     },
 },
 components:{GoodsItem}
}
</script>

<style lang="scss" scoped>
.goods {
width: 100%;
word-wrap: break-word;
justify-content:space-evenly;
background-color: $cut-line;
}
</style>