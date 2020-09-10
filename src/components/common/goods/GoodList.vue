<template>
  <div class="goodslist">
     <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components: {
        GoodsListItem
    }
}
</script>

<style>
 .goodslist{
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
 }
 .goodslist>div{
     width: 49%;
     flex: none;
 }
 .goodslist img{
     width: 100%;
     border-radius: 5px;
 }

</style>