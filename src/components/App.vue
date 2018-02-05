<template>

       <div id="app" class="container">
            <h1>Organización de tareas</h1>

            <ul class="nav nav-tabs">
            <router-link tag="li" to="/" active-class="active" exact><a>Dashboard</a></router-link>
            <router-link tag="li" to="/tasks" active-class="active"><a>Tareas</a></router-link>
            </ul>

            <keep-alive>
                <router-view></router-view>
            </keep-alive>

            <footer class="footer">
                <p>&copy; 2018</p>
            </footer>


        </div>

</template>

<script>
// import Tasks from 'components/Task/Tasks.vue'
export default {
   // components: {
 //     'app-tasks': Tasks,
 //   }
}
</script>

<style type="text/css">

    
    body {
    margin: 10px;
}

.container {
    max-width: 920px;
}

.container h2 {
    margin-bottom: 20px;
}


.container footer {
    margin: 40px 0;
    padding-top: 20px;
    border-top: 1px solid #ccc;
    color: #999;
}
</style>