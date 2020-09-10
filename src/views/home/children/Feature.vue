<template>
  <div class="feature">
      <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" @load="imageLoad" alt="">
      </a>
  </div>
</template>

<script>
export default {
    methods: {
        imageLoad(){
            this.$emit('featureImgLoad')
        }
    }

}
</script>

<style>
    .feature{
        width: 100%;
    }
    .feature img{
        width: 100%;
    }
</style>