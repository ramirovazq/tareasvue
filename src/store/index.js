let tasks = [
    {                    
        description: "Aprender Vue.js",
        pending: true,
        editing: false
    },
    {
        description: "Suscribirse a sitio",
        pending: true,
        editing: false
    },
    {
        description: "Grabar lección",
        pending: false,
        editing: false
    }
];

// created(){
            
/*
            this.tasks.forEach((task, index) =>{
                this.$set(task, 'id', index +1 )
            }); 
            /*
            this.tasks.forEach(function(task, index){
                this.$set(task, 'id', index +1 );
            }.bind(this));
            */
   // },


tasks.forEach((task, index)=>{
    task.id = index + 1 ;
});

export default {
    state: {
        tasks: tasks
    }
}
