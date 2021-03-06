/*
 * @Author: Jethro
 * @Date: 2020-08-31 10:59:00
 * @LastEditors: Jethro
 * @LastEditTime: 2020-11-12 17:17:30
 * @FilePath: \vuedemo\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//设置浏览器标题
Vue.directive('title', {
  // <div class="main" v-title data-title="首页">
  inserted: function (el) {
    document.title = el.dataset.title
  }
})

//动态加载阿里云图标字体
import {
  iconfontVersions,
  iconUrl
} from "@/config/iconfont";
import {
  loadStyle
} from '@/utils/util';
iconfontVersions.forEach((item) => {
  loadStyle(iconUrl.replace('$key', item))
});

//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'
import Swiper2, {
  Navigation, //前进后退
  Pagination, //分页器
  Autoplay, //自动切换
} from 'swiper'
Swiper2.use([Navigation, Pagination, Autoplay])
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )

// Avue
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
Vue.use(Avue);
//如果使用字典需要赋值axios为全局
// import axios from 'axios';
// window.axios = axios

//echarts
import Echarts from 'echarts'
Vue.prototype.$Echarts = Echarts
Vue.use(Echarts)

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//mock
// process.env.Mock && require('./mock/mock.js')
import mock from "@/mock/mock";



import AvueFormDesign from 'avue-form-design'

Vue.use(AvueFormDesign)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  mock,
  render: h => h(App)
}).$mount('#app')