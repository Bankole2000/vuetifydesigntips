import Vue from 'vue'
import Vuex from "vuex";
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
