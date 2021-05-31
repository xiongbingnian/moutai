//导入vue
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//导入vue-router路由
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
//导入elementui饿了么框架
import ElementUi from 'element-ui';
Vue.use(ElementUi)

//导入vuex
import vuex from 'vuex';
Vue.use(vuex);
//导入css样式
import 'common/css/style.css'
import 'common/el-ui/index.css'
//导入axios的使用
import axios from 'axios';
//绑定到Vue原型中，将来每次组件都可以使用，this.$http去调用即可
Vue.prototype.$http = axios;
//设定axios的基本url请求前缀
axios.defaults.baseURL = 'http://cs.zsb9.cn/index';
//设定axios的参数使得axios发出的ajax请求能够自动带上cookie
// axios.defaults.withCredentials = true;
import router from './router'
import index from 'vue';
var state = {
  Myactive: 0, //控制导航栏下拉框的显示跟随
  member: 0, //控制个人中心tab切换
}
var actions = {
  chageMyactive({
    commit
  }, parmsMyactive) {
    commit('chageMyactive', parmsMyactive)
  },
  chagemember({
    commit
  }, parmsmember) {
    commit('chagemember', parmsmember)
  },
  /* 控制底部顯示隱藏 */
  chagefooter({
    commit
  }, parmsfooter) {
    commit('chagefooter', parmsfooter)
  },
}
var mutations = {
  chageMyactive(state, parmsMyactive) {
    state.Myactive = parmsMyactive
  },
  chagemember(state, chagemember) {
    state.member = chagemember
  },
  /* 控制底部顯示隱藏 */
  chagefooter(state, chagefooter) {
    state.footer = chagefooter
  },
}
var getters = {
  getMyactive() {
    if (state.Myactive < 0) {
      return;
    }
    return localStorage.getItem('tab')
  },
  getmember() {
    if (state.member < 0) {
      return;
    }
    return localStorage.getItem('member')
  },
}
var store = new vuex.Store({
  state,
  actions,
  mutations,
  getters
})


//全局守卫---router
router.beforeEach((to, from, next) => {
  if (to.name == 'standardPage') {
    document.title = '标准定制'
  } else {
    document.title = '茅台定制丨国酒茅台定制营销（贵州）有限公司官网'
  }
  /* 控制底部顯示隱藏 */
  if (to.meta.footer == false) {
    store.dispatch('chagefooter', 'hide')
  } else {
    store.dispatch('chagefooter', 'show')
  }
  if (to.meta.falg != true) {
    localStorage.setItem('tab', null)
    var indextab = localStorage.getItem('tab')
    store.dispatch('chageMyactive', indextab)
  } else {
    window.scrollTo(0, 0);
    next(); // 确保一定要调用 next()
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log(!sessionStorage.token != undefined)
    //这里判断用户是否登录，我例子中是验证本地存储是否有token
    var token = sessionStorage.getItem('token');
    // if (!sessionStorage.token || !sessionStorage.token != undefined) {
    if (!token || token == 'undefined') {
      alert("未登录，请你先登录")
      sessionStorage.setItem('currentRoutePath', to.path);
      window.scrollTo(0, 0);
      next({
        path: '/login',
      })
    } else {
      window.scrollTo(0, 0);
      next()
    }
  } else {
    window.scrollTo(0, 0);
    next() // 确保一定要调用 next()
  }
});

Vue.filter('timeFilter', function (input) {
  var i = Number(input);
  var d = new Date(i);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
  return year + '-' + month + '-' + day ;
})

new Vue({
  el: '#app',
  router,
  store,
  render: create => create(App)
})
