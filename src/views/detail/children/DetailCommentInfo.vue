<template>
  <div v-if='commentInfo' class="comment-info">
      <div class="info-title">
          <div>用户评价</div>
          <div>更多</div>
      </div>
      <div class="info-user">
          <img :src="commentInfo.user.avatar" alt="">
          <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
          <p>{{commentInfo.content}}</p>
          <div>
              <span>{{commentInfo.created|showData}}</span>
              <span>{{commentInfo.style}}</span>
          </div>
          <div>
              <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index" />
          </div>
      </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils.js'

export default {
    props:{
        commentInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        showData(value){
             let date = new Date(value*1000);
        return formatDate(date,'yyyy--MM--dd')
            
        }
    }

}
</script>

<style>
.info-title{
    display: flex;
    justify-content: space-between;
}
.info-title div{
    flex: none;
}
.info-user{
    text-align: left;
    
}
.info-user img{
    height: 50px;
    border-radius: 25px;
}
.info-user span{
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
}
.info-detail{
    text-align: left;
}
.info-detail div{
    text-align: left;
}
.info-detail div span:nth-child(2){
    position: relative;
    left: 15px;
}

</style>