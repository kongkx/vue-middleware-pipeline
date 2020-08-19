import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

// Vue.config.productionTip = false

var app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

app.__proto__.$http = {
  a: 'example'
}
