<template>
                <li @click="select"  class="list-group-item task-list-item" 
                    :class="{completed: !task.pending}">
                    <a href="#" @click.stop="toggleStatus" >
                        <app-icon :img="task.pending ? 'unchecked' : 'check'"></app-icon></a>

                        <span class="description">{{task.description}}</span>    

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
                methods: {
                    select(){
                        console.log("--------------------///");                        
                        console.log("--------------------");
                        console.log(this.task);
                        this.$router.push('/tasks/' + this.task.id);
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
</style>