<template>
  <div id="app" >
    <MainTabbar/>
    <keep-alive exclude="Detail" >
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
import MainTabbar from './components/content/mainTabbar/MainTabBar.vue'


export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
 @import "./assets/css/base.css";
 #app{
   height: 100vh;
   position: relative;
 }

</style>
