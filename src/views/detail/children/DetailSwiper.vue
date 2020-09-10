<template>
  <div class="detail-swiper">
      <Swiper>
          <SwiperItem  class="swiperItem" v-for="(item,index) in topImage" :key="index">
              <img :src="item" alt="">
          </SwiperItem>
      </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index'

export default {
    props:{
        topImage:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components: {
        Swiper, SwiperItem
    }

}
</script>

<style>
.detailSwiper{
   
}
.swiperItem{
    height: 300px;
}

</style>