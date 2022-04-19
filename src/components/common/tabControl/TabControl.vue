<template>
  <div class="tab-control">
     <span v-for="item in titles" :key="item.index">
        {{item}}
     </span>
  </div>
</template>

<script>
export default {
 name: 'TabControl',
 props:{
     titles:{
         type:Array,
         default(){
             return []
         }
     }
 }
}
</script>

<style>

</style>