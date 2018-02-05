let tasks = [
    {                    
        title: "Aprender Vue.js",
        pending: true,
        editing: false
    },
    {
        title: "Suscribirse a sitio",
        pending: true,
        editing: false
    },
    {
        title: "Grabar lección",
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
    task.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu massa vel dolor placerat gravida non sed massa. Pellentesque mauris purus, egestas eu sapien quis, ultricies lobortis tellus. Duis maximus sapien vel arcu consectetur, id placerat erat pharetra. Nunc vitae ipsum id nunc euismod lacinia nec vestibulum tellus. Donec tempus tincidunt consequat. Morbi et elit posuere, gravida sem non, maximus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dui urna, aliquam non tincidunt id, tincidunt eget nibh. Pellentesque orci sem, aliquet sed hendrerit quis, consectetur sagittis ligula. Donec venenatis neque in euismod fermentum";
    task.id = index + 1 ;
});

export default {
    state: {
        tasks: tasks
    },
    findTask(id){
        return this.state.tasks.find( task => task.id == id);
    }
}
