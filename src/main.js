import Vue from 'vue'
import App from './App.vue'
import divfor from './app-support.vue'
import data from './data.json'

Vue.component('divfora',divfor)
new Vue({
  el: '#app',
  render: h => h(App)
})
