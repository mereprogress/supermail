import {request}  from './index'

export function getHomeGoods(type,page){
    return request({
        url: '/home/data',
        params:{
            type:type,
            page:page
        }
     
    })
}


export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}

