<template>
 <div id="cart">
     <NavBar class="nav-bar">
         <span slot="center">购物车({{cartLength}})</span>
     </NavBar>
     <Scroll ref="scroll" class="cartscroll">
         <cart-list :cartlist='cartlist'></cart-list>
     </Scroll>
     <cart-bottom-bar @click.native="bottomClick" :allchecked='allchecked' ></cart-bottom-bar>
 </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'


import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'

export default {
    data(){
        return{
            allchecked:false
        }
    },
    computed: {
        cartLength(){
            return this.$store.state.cartlist.length
        },
        cartlist(){
            return this.$store.state.cartlist
        },
       
    },
    components: {
        NavBar,Scroll,CartList,CartBottomBar
    },
    activated () {
        // console.log('activated')
        this.$refs.scroll.refresh()
    },
    methods: {
         bottomClick(){
            this.allchecked=!this.allchecked
            this.$store.state.cartlist.forEach(item =>{
                item.checked=this.allchecked
            })
        },
        
    },
    created () {
        this.$bus.$on('checkedfalse',()=>{
            console.log('checkedfalse')
            this.allchecked=false
        })
        this.$bus.$on('checkedttrue',()=>{
            this.allchecked=true
        })
    }

}
</script>

<style>
#cart{
    height: 100%;
    position: relative;
}
.nav-bar{
    background-color: var(--color-tint);
    color: #ffffff;
    font-weight: 700;
}
.cartscroll{
  height: 600px;
}

</style>