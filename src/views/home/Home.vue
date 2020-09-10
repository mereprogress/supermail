<template>
<div id="home">
    <nav-bar class="navbar">
        <label slot="center">购物街</label>
    </nav-bar>
    <Scroll ref="scroll" @scroll="contentScroll" @pullingUp='loadMore'>
        <home-swiper :banners="banners" ref="hSwipe" @swiperImaLoad="swiperImaLoad"></home-swiper>
         <recommend-view :recommends="recommends" @featureImgLoad='featureImgLoad'></recommend-view>
        <feature></feature>
        <tab-contral  ref="tabcontral" :titles="['流行','新款','精选']" @tabClick='tabClick'></tab-contral>
         <GoodList v-if="goods" :goods='showGoods'></GoodList>
    </Scroll>
    <tab-contral ref="topTabControl"
     class="tabcontralactive" :titles="['流行','新款','精选']" @tabClick='tabClick' v-show='TabContralIsshow'></tab-contral>
    <BackTop @click.native="backClick" v-show="BackTopIsshow" ></BackTop>
    
</div>

</template>

<script>

import NavBar from './children/NavBar.vue'
import HomeSwiper from './children/HomeSwiper.vue'
import RecommendView from './children/RecommendView.vue'
import Feature from './children/Feature.vue'
import TabContral from './children/TabContral.vue'

import GoodList from '@/components/common/goods/GoodList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import BackTop from '@/components/content/backTop/BackTop.vue'


import {getHomeMultidata,getHomeGoods}  from '@/network/home'

export default {
    data () {
        return {
           result:null ,
           banners:[],
           recommends:[],
           divstyle:undefined,
           goods:{
               'pop':{page:0,list:[]},
               'new':{page:0,list:[]},
               'sell':{page:0,list:[]},
           },
           currentType:'pop',
           message:'你好',
           BackTopIsshow:false,
           TabContralIsshow:false,
           taboffsetTop:0,
           leaveposition:{
               y:0,
               yy:0
           }
        }
    },
    components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        Feature,
        TabContral,
        GoodList,
        Scroll,
        BackTop

 
    },
    created () {
        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
        
        console.log('1111')
        console.log(this.$toast)
       
      
    },
    mounted () {
       const refresh=this.debounce(this.$refs.scroll.refresh,200)

        this.$bus.$on('itemimgLoad',()=>{
        
          refresh()
       })
    },
    activated () {
         this.$refs.scroll.refresh()
         this.$refs.scroll.scrollTo(0,this.leaveposition.yy,0)
         console.log('activated')
    },
    deactivated () {
        this.$store.commit('leaveposition', this.leaveposition.y)
        this.leaveposition.yy=this.leaveposition.y
        console.log(this.$store.state.leaveposition)
    },
    methods: {
        debounce(func,delay){
           let timer=null
           return function(...args){
               if(timer) clearTimeout(timer)
               timer =setTimeout(()=>{
                   func.apply(this,args)
               },delay)
           }
        },
        swiperImaLoad(){
            setTimeout(()=>{
                this.taboffsetTop=this.$refs.tabcontral.$el.offsetTop
            },100)
            
        },
        featureImgLoad(){
        },
        loadMore(){
            this.getHomeGoods(this.currentType)
        },
        tabClick(index){
            
            if(index==1) this.currentType='new'
            if(index==2) this.currentType='sell'
            if(index==0) this.currentType='pop'

        this.$refs.topTabControl.currentindex=index
        this.$refs.tabcontral.currentindex=index
        },
        contentScroll(position){
          
            if(position.y<-1500) this.BackTopIsshow=true
            else this.BackTopIsshow=false
            if(position.y<-this.taboffsetTop) this.TabContralIsshow=true
            else this.TabContralIsshow=false
           this.leaveposition.y=position.y
        },


        getHomeMultidata(){
               getHomeMultidata().then(err=>{
                  
           this.result=err
           this.banners=err.data.banner.list
           this.recommends=err.data.recommend.list
           
       })
        },
        getHomeGoods(type){
            const page=this.goods[type].page+1
              getHomeGoods(type,page).then(err=>{
             
              this.goods[type].list.push(...err.data.list)
              this.goods[type].page++
              console.log(this.goods)
              this.$refs.scroll.finishPullUp()
              
       })
        },
        backClick(){
            
           this.$refs.scroll.scrollTo(0,0)
        }
    },
    computed: {
        showGoods(){
            return this.goods[this.currentType].list
        },
        
    }

}
</script>

<style>
   .navbar{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 49px;
        align-items: center;
        
    }
    .test{
        width: 100px;
        height: 100px;
        border: 2px solid pink;
    }
  #home{
      position: relative;
      height: 100vh;
      
  } 
  .tabcontralactive{
      position: relative;
      background: #ffffff;
      
  }
</style>