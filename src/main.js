import Vue from 'vue'
import App from './components/App.vue'
import EventBus from 'event-bus.js'
import router from './router/index.js'

window.EventBus = EventBus

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
