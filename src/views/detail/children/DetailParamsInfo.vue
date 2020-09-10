<template>
  <div class="params" v-if="paramInfo">
      <table v-for="(table,index) in paramInfo.sizes" :key="index"
      class="info-size">
          <tr v-for="(tritem,trindex) in table" :key="trindex">
              <td v-for="(tditem,tdindex) in tritem" :key="tdindex">{{tditem}}</td>
          </tr>
      </table>
      <table class="info-param">
          <tr v-for="(info,index) in paramInfo.infos" :key="index">
              <td class="key">{{info.key}}</td>
              <td>{{info.value}}</td>
          </tr>
      </table>
      <div class="info-img" v-if='paramInfo.image'>
          <img :src="paramInfo.image" alt="">
          
      </div>
  </div>
</template>

<script>
export default {
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

<style>
    .info-size{
        width: 100%;
    }
    .info-size td{
        padding-top: 20px;
        
    }
    .info-param{
        width: 100%;
        text-align: left;
        font-size: 15px;
    }
    .info-param .key{
        width: 60px;
        text-align: right;
        padding-right: 25px;
    }
    
</style>