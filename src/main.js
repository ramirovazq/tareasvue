import Vue from 'vue'
import App from './components/App.vue'
import EventBus from 'event-bus.js'
import router from './router/index.js'

window.EventBus = EventBus

window.not_found = function(){
    console.log("No encontrado 404 :" + router.currentRoute.fullPath);
    router.replace('/404');
}

window.not_found_unless = function(condition){
  if(!condition){
    not_found();
  }
}

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
