<template>
  <div class="param-info"  v-if="Object.keys(paramInfo).length !== 0 ">
    <table v-for="(table, index) in paramInfo.sizes"
           class="info-size" :key="index">
      <tr v-for="(tr, index) in table" :key="index">
        <td v-for="(td, index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{info['key']}}</td>
        <td class="param-value">{{info['value']}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>

  </div>
</template>

<script>
export default {
name:"DetailParams",
props:{
    paramInfo:{
        type:Object,
        default(){
            return {}
        }
    }
}
}
</script>

<style lang='scss' scoped>
  .param-info {
    padding: 0 2rem;
font-size: 1.4rem;
border-bottom: 1rem solid gainsboro;
  }

  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .param-info table tr {
    height: 4.2rem;
  }

  .param-info table tr td {
    border-bottom: .1rem solid rgba(100,100,100,.1);
  }

  .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 9.5rem;
  }

  .info-param {
    border-top: .1rem solid rgba(0,0,0,.1);
  }

  .param-value {
    color: $mall-orange;
  }

  .info-img img {
    width: 100%;
  }
</style>