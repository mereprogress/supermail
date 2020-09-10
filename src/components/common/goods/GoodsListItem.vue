<template>
  <div @click="itemClick">
    <a >
        <img v-lazy='showImage' alt="" @load="imgLoad">
        <div>
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </a>
  </div>
</template>

<script>
export default {
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        imgLoad(){
            this.$bus.$emit('itemimgLoad')
        },
        itemClick(){
            console.log('跳转详情页')
            this.$router.push('/detail/'+this.goodsItem.iid)
        }
    },
    computed: {
        showImage(){
            return this.goodsItem.image||this.goodsItem.show.img
        }
    }

}
</script>

<style>
    .price{
        color: var(--color-high-text);
        margin-right: 20px;
    }
    .collect{
        position: relative;
    }
    .collect::before{
        content: "";
        position: absolute;
        left: -14px;
        width: 14px;
        height: 14px;
        
        background: url("~assets/img/common/collect.svg") 0 0 /14px 14px;
    }
    
</style>