<template>   
  <div>
    <div><slot name="left"></slot></div>
    <div><slot name="center"></slot></div>
    <div><slot name="right"></slot></div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style>
 
    div{
        flex: 1;
        text-align: center;
    }
    
</style>