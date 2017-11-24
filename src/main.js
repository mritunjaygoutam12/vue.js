import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
import App from './App.vue'

import data from './data.json'
import we from '../view.json'


// index.js or main.js
//@import 'path/to/node_modules/vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
//Vue.component('divfora',divfor)
new Vue({
  el: '#app',
  render: h => h(App)
})
