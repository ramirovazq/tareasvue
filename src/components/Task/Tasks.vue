<template>

  <div>
    <task-list :tasks="tasks"></task-list>
    <p><a @click="deleteCompleted">Eliminar tareas completadas</a></p>                    
    <task-form @create="createTask"></task-form>
  </div>

</template>


<script>
import TaskList from 'components/Task/List.vue'
import TaskForm from 'components/Task/CreateForm.vue'
import store from 'store/index.js'
export default {
    components: {
      'task-list': TaskList,
      'task-form': TaskForm      
    },
    methods: {
        createTask(task){
            this.tasks.push(task)
        },
        alertTask(task){
            alert(task.description);
        },        
        deleteCompleted(){ //deleteCompleted: function(){
            this.tasks = this.tasks.filter(task => task.pending);
            /*
            this.tasks = this.tasks.filter(function (task){
                return task.pending;
            });
            */
        },
    },
    data() {
      return {                    
        new_task: "",
        tasks: store.state.tasks
    }; 
  } //
}


</script>

<style type="text/css">

</style>
