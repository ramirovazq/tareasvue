<template>
  <div>
  <h2 class="subtitle" >Formulario de Tarea</h2>
            <form v-on:submit.prevent="create" class="new-task-form">
                <input type="text" v-model="draft" class="form-control">
                <button class="btn btn-primary">Crear tarea</button>
            </form>
  </div>
</template>

<script>

export default {
  data(){
    return {
        draft: ""
    }
  },
  methods: {
        create(){ // createTask: function(){
          this.$emit('create', {
                description: this.draft,
                pending: true,
                editing: false
            });
          this.draft = "";
          /*         
            this.tasks.push({
                description: this.new_task,
                pending: true,
                editing: false
            });
            this.new_task = "";
          */
        }
  }
}
</script>



<style type="text/css">
 
 .new-task-form {
    display: flex;
}

.new-task-form input {
    margin-right: 10px;
}
</style>