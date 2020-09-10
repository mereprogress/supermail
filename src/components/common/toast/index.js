import Toast from './Toast.vue'

const obj={}

obj.install=function (Vue){
    console.log('obj.install')
    // console.log(Vue)
    const toastContrustor=Vue.extend(Toast)
    const toast=new toastContrustor()  //组件创建成功v
    // document.body.appendChild(Toast.$el)
    // Vue.prototype.$toast=Toast
    toast.$mount(document.createElement('div')) //挂在一个div,类似app.vue
    document.body.appendChild(toast.$el) 
    Vue.prototype.$toast=toast
    console.log(Vue.prototype.$toast)
    // console.log(toast)
    // toast.show('1213')

}

export default obj