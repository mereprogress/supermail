<template>
  <div>
      <NavBar>
          <div slot="left" class="backimg" @click="backClick">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div class="title" slot="center">
              <div v-for="(item,index) in titles" :key="index" 
              :class="{active:currentIndex==index}" @click="active(index)"
              >{{item}}</div>
          </div>

      </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'


export default {
    components: {
        NavBar,
    },
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods: {
        active(index){
            this.currentIndex=index
            this.$emit('titleclick',index)
        },
        backClick(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.title{
    display: flex;
    font-size: 14px;
}
.title div{
    flex: 1;
}
.active{
    color: var(--color-high-text);
}
.backimg{

}
.backimg img{
  margin-top: 12px;
}

</style>