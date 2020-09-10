<template>
  <div class="toast" v-show="vshow">{{vmessage}}</div>
</template>

<script>
export default {
    data () {
        return {
            vmessage:'',
            vshow:true
        }
    },
    props:{
        message:{
            type:String,
            default(){
                return '我是toast'
            }
        },
        isshow:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    mounted () {
       
    },
    methods: {
        show(message,duration){
           this.vmessage=message
           console.log('111111111111111111')
       }
    }

}
</script>

<style>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    /* padding: 8px 10px; */
    transform: translate(-50%,-50%);
    color: #ffffff;
    background-color: rgba(0, 0, 0,0.75);
    
}

</style>