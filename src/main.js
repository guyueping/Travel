// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
//解决多倍屏里1像素边框问题(1个css像素会被展示为2或3倍的物理像素)
import 'styles/border.css'
import 'styles/iconfont.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
