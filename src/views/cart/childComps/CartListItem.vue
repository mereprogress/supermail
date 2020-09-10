<template>
    <div id="shop-item">
    <div class="item-selector">
      <check-button v-model="itemInfo.checked" :checked="itemInfo.checked" @checkBtnClick='checkBtnClick'></check-button>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述: {{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">{{itemInfo.price}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue'

export default {
    props:{
        itemInfo:{
            type:Object
        }
    },
    components: {
        CheckButton,
    },
    methods: {
        checkBtnClick(){
            console.log('111111111111')
            let i=0
            this.itemInfo.checked=!this.itemInfo.checked   //这里可以改store,itemInfo是对象？可以，itemInfo是对象，
            this.$store.state.cartlist.forEach(item =>{
                if(!item.checked)
                    {this.$bus.$emit('checkedfalse');i++}                    
            }               
            )
            if(!i)this.$bus.$emit('checkedttrue')
        }
    }

}
</script>

<style>
#shop-item{
    display: flex;
}
#shop-item>div{
    flex: none;
}
#shop-item .item-img{
    flex: none;
    width: 90px;
}
#shop-item .item-img img{
    width: 100%;

}
#shop-item .item-info{
    font-size: 15px;
    width: 240px;
    
}
.item-desc,.item-title{
    margin-bottom: 20px;
    text-align: left;
    height: 32px;
    overflow: hidden;
}
.item-selector{
   display: flex;
   align-items: center;
   width: 30px;
   justify-content: space-around;
}

</style>