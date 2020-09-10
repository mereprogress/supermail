<template>
  <div class="cart-list">
      <cart-list-item v-for="(item,index) in cartlist" :key="index" :itemInfo='item'></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'

export default {
    props:{
        cartlist:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components: {
        CartListItem
    }

}
</script>

<style>

</style>