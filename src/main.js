import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/reset.css';
import App from './App.vue';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router';
import store from './store';
import Bus from './utils/bus';

router.beforeEach((to,from,next)=>{
  console.log('start')
  NProgress.start();
  next()
})
router.afterEach(()=>{
  console.log('end')
  NProgress.done();
})
Vue.use(ElementUI);
Vue.prototype.$bus = Bus
Vue.config.productionTip = false

console.log(process.env.VUE_APP_API)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
