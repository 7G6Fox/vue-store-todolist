<template>
  <div class="category-item">
    <GoodsList :goods="CategoryItem" />
  </div>
</template>

<script>
import GoodsList from '@/components/shop/GoodsList';
export default {
  name:"category-item",
  props:{
    CategoryItem:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{GoodsList}
}
</script>

<style>

</style>