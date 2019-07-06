import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import userStore from './store/modules/users'

Vue.config.productionTip = false
if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = ''
} else {
  axios.defaults.baseURL = 'http://127.0.0.1:5000'
}

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'main', components: require('./components/Main.vue') },
  { path: '/users', name: 'users', components: require('./components/Users') },
  { path: '/login', name: 'login', components: require('./components/Login') },
  { path: '/users/:id', name: 'user', components: require('./components/UserManage') },
  { path: '/users/create', name: 'user', components: require('./components/UserManage') }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

router.beforeEach((to, from, next) => {
  let user = userStore.state.user;
  console.log(user);
  if (!user && to.name != 'login') {
    next('/login');
    return;
  }

  if (user && user.priority > 1 && to.name == 'users') {
    next({ path: '/' });
    return;
  }
  next();
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
