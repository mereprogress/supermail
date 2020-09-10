<template>
  <div v-if="goods" class="baseInfo">
      <div class="infoTitle">{{goods.title}}</div>
      <div class="infoPrice">
          <span class="nPrice">{{goods.newPrice}}</span>
          <span class="oPrice">{{goods.oldPrice}}</span>
          <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
      </div>
      <div class="infoOther">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="infoService">
          <span class="infoServiceItem" v-for="index in goods.services.length-1" :key='index'>
          <img :src="goods.services[index-1].icon" alt="">
          <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
     
  </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    created () {
        
    }

}
</script>

<style>
    .baseInfo{
    }
    .baseInfo>div{
    text-align: left;
    }
    .infoPrice{

    }
    .infoOther{
        display: flex;
         
    }
    .infoOther span{
        flex: 1;
        text-align: center;
    }
    .infoPrice .nPrice{
    font-size: 24px;
    color: var(--color-high-text);
    }
    .infoPrice .oldPrice{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
    }
    .infoPrice .discount{
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;    
    }
    .infoService{
        display: flex;
         line-height: 60px;
    }
    .infoService .infoServiceItem img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
    }
    .infoService .infoServiceItem {
        flex: 1;
    font-size: 13px;
    color: #333;
    }
</style>