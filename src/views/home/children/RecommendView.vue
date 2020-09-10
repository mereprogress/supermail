<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
   props:{
       recommends:{
           type:Array,
           default (){
               return []
           }
       }
   }
}
</script>

<style>
    .recommend{
        display: flex;
        flex-wrap: wrap;
    }
    .recommend>div{
        flex: none;
        width: 25%;
        padding-bottom: 20px;
        border-bottom: 5px solid #6b6767;
    }
    .recommend img{
        width: 100%;
    }
</style>