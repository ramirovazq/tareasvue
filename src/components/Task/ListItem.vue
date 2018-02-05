<template>
                <li @click="select"  class="list-group-item task-list-item" 
                    :class="{active:isActive, completed: !task.pending}">
                    <a href="#" @click.stop="toggleStatus" >
                        <app-icon :img="task.pending ? 'unchecked' : 'check'"></app-icon></a>

                        <span class="description">{{task.title}}</span>    

                </li>

</template>

<script>
import Icon from 'components/Icon.vue'
export default {
                components: {
                'app-icon': Icon
                },
                data(){
                    return {
                        draft: ""
                    };
                },
                props: ['task', 'index'],
                computed: {
                    isActive(){
                        return this.task.id == this.$route.params.id;
                    },
                },
                methods: {
                    select(){
                        this.$router.push(this.isActive ? '/tasks' : '/tasks/' + this.task.id);
                    },                    
                    toggleStatus(){
                        this.task.pending = !this.task.pending;
                    }
                }
            }
</script>


<style type="text/css">
    .tasks a {
    text-decoration: none;
}

.task-list-item {
    display: flex;
    justify-content: space-between;
}

.task-list-item.editing {
    box-shadow: inset 0 0 5px #999;
}

.task-list-item input, .task-list-item .description {
    flex: 1;
    padding: 0 5px;
}

.task-list-item input {
    border: 0;
}

.task-list-item input:focus {
    outline: none;
}

.task-list-item.completed .description {
    text-decoration: line-through;
}

.task-list-item.completed, .task-list-item.completed a {
    color: #999;
}

.task-list-item.active a {
    color: white;
}

</style>