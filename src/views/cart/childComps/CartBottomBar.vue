<template>
    <div class="bottom-bar">
        <div>
        <checkbotton class="check-botton" :class="{checkclick:isSelectAll}"></checkbotton>
        <span>全选</span>
        </div>
        <div>
            合计{{totalPrice}}
        </div>
        <div>
            去计算{{checkLength}}
        </div>
    </div>
</template>

<script>
import Checkbotton from './CheckButton.vue'

export default {
    props:{
        allchecked:{
            type:Boolean,
            default(){
                return false
            }
        }
    },

    components: {
        Checkbotton
    },
    computed:{
        totalPrice(){
            
            return this.$store.state.cartlist.filter(item => {
                return item.checked
            }).reduce((preValue,item)=>{
                return preValue+item.price*item.count
            },0)
        },
        checkLength(){
            return this.$store.state.cartlist.filter(item =>{
                return item.checked
            }).length
        },
        isSelectAll(){
            // return !(this.$store.state.cartlist.filter(item => !item.checked).length) //filter返回数组 find返回
            return !this.$store.state.cartlist.find(item => !item.checked)
        }
    }

}
</script>

<style>
.bottom-bar{
    height: 40px;
    width: 100%;
    position:fixed;
    bottom: 44px;
    display: flex;
    background-color: #ffffff;

    
}
.check-botton{
    float: left;
     
    /* 之后宽不是100%而高手100% */
}
.bottom-bar>div{
    flex: none;
    display: flex;
    align-items: center;
    margin-left: 15px;
    
}
.bottom-bar>div:nth-child(2){
    flex: 1;
}
.bottom-bar>div:nth-child(3){
    
    width: 100px;
    justify-content: space-around;
    background-color: salmon;
}
.checkclick{
    background-color: red;
}

</style>