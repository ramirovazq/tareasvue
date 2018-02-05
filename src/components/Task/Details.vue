<template>
  <div>
  <h2>Detalle de tarea ... {{id}}</h2>
  <p>{{task.description}}</p>
  </div>
</template>


<script>
import store  from 'store';
export default {
  props: ['id'],
  /*  computed: {
      taskId(){
        return this.$route.params.id;
      }
    }
    */
  data(){
    return {
      task: null
    }
  },
  created(){
    this.findTask();
  },
  watch:{ //observador
    id: 'findTask' // cuando cambie el id, llama a findTask
  },
  methods: {
    findTask(){
      this.task = store.state.tasks.find( task => task.id == this.id);
    }
  }//methods
}

</script>

<style type="text/css">

</style>