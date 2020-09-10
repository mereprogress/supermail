import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    state: {
        cartlist:[],
        leaveposition:0
    },
    mutations: {
        addCart(state,payload){
            
            let oldProduct=null
            for(let item of state.cartlist){
                if(item.iid==payload.iid){
                    oldProduct=item
                }
            }
            if(oldProduct){
                oldProduct.count++
            }
            else{
                payload.count=1
                payload.checked=true
                state.cartlist.push(payload)
            }
            
            // let oldProduct=state.cartlist.find(item =>{                
            //     item.iid===payload.iid
            // })
            
            // if(oldProduct){
                
            //     oldProduct.count++
            // }
            // else{
            //     payload.count=1
            //     state.cartlist.push(payload)
            // }
            
        },
        checked(){
            
        },
        leaveposition(state,y){
            state.leaveposition=y
        }
    }
    
})

export default store
