import Vue from 'vue'
import Router from 'vue-router'
import Tasks from 'components/Task/Tasks.vue'
import TaskDetails from 'components/Task/Details.vue'
import Dashboard from 'components/Dashboard.vue'
import NotFound from 'components/errors/NotFound.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      component: Dashboard 
    },
    {
      path: '/tasks',
      component: Tasks 
    },
    {
      path: '/tasks/:id',
      component: TaskDetails,
      props: true
    },
    {
      path: '/404',
      component: NotFound,
    },    
    {
      path: '*',
      redirect: '/404'
    }
  ]
});

export default router;