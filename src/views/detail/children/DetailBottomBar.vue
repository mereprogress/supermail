<template>
  <div class="detail-bottom-bar">
      <div class="bar-item">
        <div>
          <i class="icon service"></i>
          <span>客服</span>
        </div>
        <div>
          <i class="icon shop"></i>
          <span>店铺</span>
        </div>
        <div>
          <i class="icon select"></i>
          <span>收藏</span>
        </div>
      </div>
      <div class="bar-item right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart(){
      this.$emit('addToCart')
    }
  }

}
</script>

<style>
.detail-bottom-bar{
    height: 49px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background: #ffffff;
    z-index: 11;


    display: flex;
}
.detail-bottom-bar .bar-item{
  display: flex;
  /* align-items: center; */
}
.detail-bottom-bar .right div{
  /* display: flex;
  align-items: center;
  justify-content: space-around; */

  line-height:49px;

}
.icon{
  /* 高 宽 */
  margin: 0 auto; 
  /* padding-right: 10px; */
  /* margin-left: 20px; */
  display: block;
  width: 22px;
  height: 22px;
  background: url('~assets/img/detail/detail_bottom.png');
  background-size: 22px auto;   
  /* background-size 的100% 100%代表元素的宽高，一个100%等于100% auto ,auto代表图片的宽高 */
  background-position-x: 0;
}
.bar-item>div{
  
}
.shop{
  background-position-y: -98px;
}
.select{

}
.service{
  background-position-y: -54px;
}
.cart {
    background-color: #ffe817;
    color: #333;
  }

 .buy {
    background-color: #f69;
  }
</style>