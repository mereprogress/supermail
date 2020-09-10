<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>     
      </div>
  </div>
</template>

<script>
import Scroll from 'better-scroll'
export default {
    data(){
        return{
            scroll:null
        }
    },
    mounted () {
        this.scroll=new Scroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:true
        })
        this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
        })
        this.scroll.on('pullingUp',()=>{
            
            this.$emit("pullingUp")
        })
        console.log('hello')
    },
    props:{
       probeType:{
           type:Number,
           default(){
               return 3
           }
       }
    },
   methods: {
       scrollTo(x,y,time=500){
           this.scroll.scrollTo(x,y,time)
       },
       finishPullUp(){
           this.scroll.finishPullUp()
       },
       refresh(){
           this.scroll.refresh()
           console.log('refresh')

       }
       
   }
}
</script>

<style>
    .wrapper{
        position: absolute;
        width: 100%;
        bottom: 44px;
        top: 49px;
        
        overflow: hidden;
    }
</style>