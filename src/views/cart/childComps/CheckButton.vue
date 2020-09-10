<template>
  <div @click="checkBtnClick" :class="{isspace:checked}" class="check-button">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    data(){
        return{
            isshow:false
        }
    },
    methods: {
        checkBtnClick(){
            
            this.$emit('checkBtnClick')
        }
    },
    props:{
        checked:{
            type:Boolean
        }
    }
}
</script>

<style>
.check-button{
    flex: none;
    width: 20px;
    height: 20px;
    border: 2px solid gray;
    border-radius: 50%;
    
}
.isspace{
   background-color: red;
}

</style>