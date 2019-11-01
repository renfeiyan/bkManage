import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import store from './store';
import 'element-ui/lib/theme-chalk/index.css'
import '@/utils/global'
import $http from './utils/http';
import axios from 'axios'
import * as filters from './filters'

Vue.prototype.$axios = $http;
// Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Element)

/* 注册全局过滤器 */
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* 使用mock模拟数剧 */
require('./mock.js')

Vue.config.productionTip = false
// axios.defaults.baseURL = 'http://localhost:3001' 默认请求数据的地址


/**
 * 遍历后台传来的路由字符串,转换为组件对象
 * @param asyncRouterMap
 * @returns {*}
 //  */
function filterAsyncRouter(asyncRouterMap) {
  return asyncRouterMap.filter(route => {
    if (route.component) {
      let v = route.component;
      route.component = resolve => require(['/' + v + '.vue'], resolve)
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  });
}

/**
 * 路由检查
 */
router.beforeEach((to, from, next) => {
  // console.log("router:", to, from, next)
  if (!store.state.controlStyle.menu && to.fullPath !== '/login') {
    // console.log("privilege:", sessionStorage.getItem("privilege") || '')
    var privilege = sessionStorage.getItem('privilege')
    if (privilege == 110) {
      $http.postJson('/getMenu1', {}).then(res => {
        if (res.code == 1) {
          let menu = filterAsyncRouter(res.data);
          store.commit('setMenu', menu);
          router.addRoutes(menu);
          next({...to, replace: true})
        }
      }).catch(() => {
      });
    } else {
      $http.postJson('/getMenu', {}).then(res => {
        if (res.code == 1) {
          let menu = filterAsyncRouter(res.data);
          store.commit('setMenu', menu);
          router.addRoutes(menu);
          next({...to, replace: true})
        }
      }).catch(() => {
      });
    }
  } else {
    next({replace: true})
  }
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
