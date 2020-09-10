<template>
  <div name='Detail' id="detail" v-if="recommend.list">
     <detail-nav-bar ref="navbar" @titleclick="titleclick"></detail-nav-bar>
     <Scroll ref="scroll" @scroll='scroll'>
     <detail-swiper :topImage="topImage"></detail-swiper>
     <detail-base-info :goods="goods"></detail-base-info>
     <detail-shop-info :shop="shops"></detail-shop-info>
     <detail-goods-info :detailInfo='detailInfo' @imageLoad='imageLoad'></detail-goods-info>
     <detail-params-info ref="params" :paramInfo="paramsInfo"></detail-params-info>
     <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
     <detail-recommend-info ref="recommend" :recommend="recommend"></detail-recommend-info>
     <GoodsList  :goods='recommend.list'></GoodsList>
     </Scroll>
     <detail-bottom-bar @addToCart='addToCart'></detail-bottom-bar>
     <BackTop v-show="isShow"></BackTop>
     <Toast :message="message" :isshow='isshow'></Toast>
  </div>
</template>

<script>
import DetailNavBar from './children/DetailNavBar.vue'
import DetailSwiper from './children/DetailSwiper.vue'
import DetailBaseInfo from './children/DetailBaseInfo.vue'
import DetailShopInfo from './children/DetailShopInfo.vue'
import DetailGoodsInfo from './children/DetailGoodsInfo.vue'
import DetailParamsInfo from './children/DetailParamsInfo.vue'
import DetailCommentInfo from './children/DetailCommentInfo.vue'
import DetailRecommendInfo from './children/DetailRecommendInfo.vue'
import DetailBottomBar from './children/DetailBottomBar.vue'

import Scroll from '@/components/common/scroll/Scroll.vue'
import GoodsList from '@/components/common/goods/GoodList.vue'
import BackTop from '@/components/content/backTop/BackTop.vue'
import Toast from '@/components/common/toast/Toast.vue'

import {getDetail,Goods,Shop,GoodsParam, getRecommend} from '@/network/detail'

export default {
    name:'Detail',
    data(){
        return{
            iid:null,
            topImage:[],
            goods:null,
            shops:null,
            detailInfo:null,
            paramsInfo:null,
            commentInfo:null,
            recommend:null,
            themeTopYs:[],
            getThemeTopy:null,
            currentIndex:0,
            isShow:false,
            message:'',
            isshow:false
        }
    },
    created () {
        this.iid=this.$route.params.iid

       
        //与mounted一样，无法得到this.$refs.params
        // this.$nextTick(()=>{
        // this.themeTopYs=[]    
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // })
        getDetail(this.iid).then(res=>{
            console.log(res)
            this.topImage=res.result.itemInfo.topImages
            const data=res.result
            this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            this.shops=new Shop(data.shopInfo)
            this.detailInfo=data.detailInfo
            this.paramsInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
            
            if(data.rate.cRate)
                this.commentInfo=data.rate.list[0]
        })
            getRecommend().then(res=>{
            this.recommend=res.data
            console.log(this.recommend)
        })

     
    },
    mounted () {
         setTimeout(()=>{
             this.$refs.scroll.refresh()
         },300)
    
        this.getThemeTopy=this.debounce(()=>{
        this.themeTopYs.push(0)
        console.log(!!this.$refs.params.$el)
        this.$refs.params.$el&&this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.$refs.comment.$el&&this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.$refs.recommend.$el&&this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.themeTopYs)
        },200)
        this.$bus.$on('itemimgLoad',()=>{
        this.getThemeTopy()
       })
        // this.themeTopYs.push(0)
        //无法执行,直接中断了
        // this.themeTopYs.push(this.$refs.params.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.offsetTop)
        // this.themeTopYs.push(this.$refs.recommend.offsetTop)
    },
    updated () {
        //可以执行但是定义右问题
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // console.log(this.themeTopYs)
    },
    components: {
        DetailNavBar,DetailSwiper,DetailBaseInfo,DetailShopInfo,
        Scroll,DetailGoodsInfo,DetailParamsInfo,DetailCommentInfo,
        DetailRecommendInfo,GoodsList,DetailBottomBar,BackTop,Toast
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
        imageLoad(){
            this.$refs.scroll.refresh()
            console.log('refresh')
        },
        titleclick(index){
            // switch(index)
            // {
            //     case 0 : this.$refs.scroll.scrollTo(0,this.themeTopYs[index]) ;break;
            //     case 1 :console.log(1);break;
            //     case 2 : console.log(2);break;
            //     case 3 : console.log(3);break;
            // }

            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index])
        },
        scroll(position){
            for(let i=0;i<=3;i++)
            {   
                if(this.currentIndex!=i&&((i<3&&position.y<-this.themeTopYs[i]&&position.y>-this.themeTopYs[i+1])||(i===3&&position.y<-this.themeTopYs[i])))
                {this.currentIndex=i;this.$refs.navbar.currentIndex=i;console.log(i);return;}
            }

            if(position.y<-1500)
                this.isShow=true
            else this.isShow=false
        },
        addToCart(){
           const product={}
           product.image=this.topImage[0]
           product.title=this.goods.title
           product.desc=this.goods.desc
           product.price=this.goods.realPrice
           product.iid=this.iid

           this.$store.commit('addCart',product)
           console.log(this.$store.state.cartlist)
           this.message='成功加入购物车'
           this.isshow=true
            setTimeout(()=>{
            this.isshow=false
        },3000)
        }
    }

}
</script>

<style>
#detail{
    height: 100%;
    position: relative;
}

</style>