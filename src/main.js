import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

Vue.use(FloatingVue)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
