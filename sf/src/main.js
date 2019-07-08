import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 第一种：vue-swiper
// import { Swipe, SwipeItem } from 'vue-swipe'
// Vue.component('swipe', Swipe)
// Vue.component('swipe-item', SwipeItem)

import './assets/styles/reset.styl'
import './assets/styles/icon.styl'
import 'animate.css'

// 第二种：mint-ui的swiper
// import { Swipe, SwipeItem } from 'mint-ui'
// import "mint-ui/lib/style.css"
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false
    // 在控制台是否输出生产环境提示

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')