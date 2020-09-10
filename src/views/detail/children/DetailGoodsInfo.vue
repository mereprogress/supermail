<template>
  <div class="goods-info" v-if="detailInfo">
      <div class="info-desc">
          <div>{{detailInfo.desc}}</div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
          <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imageLoad"/>

      </div>
  </div>
</template>

<script>
export default {
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
            counter:0,
            imagesLength:0
        }
    },
    methods: {
        imageLoad(){
            if(++this.counter===this.detailInfo.detailImage[0].list.length){
                this.$emit('imageLoad')
            }
        }
    },
    watch:{
        detailInfo(){
            this.imageslength=this.detailInfo.detailImage[0].list.length
        }
    }
}
</script>

<style>
.goods-info{
 width: 100%;
}
.info-list{
   width: 100%;
}
.info-list img{
    width: 100%;
}
.info-desc{
    margin-top: 50px;
}
.info-desc div{
    text-align: left;

}
</style>