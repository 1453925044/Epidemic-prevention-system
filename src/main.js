import Vue from 'vue'
import App from './App'
import router from './router'
import http from './http/http.js';

// 引入vant ui框架
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 设置rem基准值
import 'lib-flexible/flexible'

Vue.prototype.$http = http;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
