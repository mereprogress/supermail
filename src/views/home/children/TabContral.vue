<template>
  <div class="tabcontral">
      <div v-for="(item,index) in titles" :key="index" 
      :class="{active:currentindex===index}" @click="itemclick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentindex:0
        }
    },
    methods: {
        itemclick(index){
            this.currentindex=index
            
            this.$emit('tabClick',this.currentindex)
        }
    }
}
</script>

<style>
    .tabcontral{
        display: flex;
        justify-content: space-around;
    }
    .tabcontral div{
        flex:none;
        margin-bottom: 10px;
    }
    .active{
        color: pink;
    }
    .active span{
        border-bottom: 2px solid pink;
    }
    .tabcontral span{
        padding-bottom: 5px;
    }
</style>