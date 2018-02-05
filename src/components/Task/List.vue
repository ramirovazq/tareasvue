<template>
  <div>
  <h2 :class="{[$style.subtitle]: hasPendingTasks}" >Listado de tareas</h2>
    <ul class="list-group tasks-list">
        <list-item :key="task.id" v-for="(task, index) in tasks" :task="task" :index="index" :tasks="tasks" @remove="deleteTask"></list-item>
    </ul>
  </div>
</template>


<script>
import ListItem from './ListItem.vue'
export default {
  props: ['tasks'],
  components: {
        'list-item': ListItem
  },
  methods: {
    deleteTask(index){ 
            this.tasks.splice(index, 1)
        },    
  },
  computed: {
    hasPendingTasks(){
      return this.tasks.some(task=>task.pending);
    }
  }
}
</script>

<style type="text/css">
  .tasks-list {
    margin-bottom: 40px;
}

</style>

<style type="text/css" module>
    .subtitle {
        color: red;
    }
</style>