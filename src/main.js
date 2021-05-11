import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'

// import { Plugin } from 'vue-responsive-video-background-player';
Vue.use(Vuelidate);

import Home from "./views/Home";
import Workouts from "./views/Workouts";
import Profile from "./views/Profile";
import Routines from "./views/Routines";
import LogIn from "./views/LogIn";
import Register from "./views/Register";

// import {Routine} from "./store/RoutineStore";
import RoutineDetail from "./views/RoutineDetail";
import CreateRoutine from "./views/CreateRoutine";
import Error404 from "./views/Error404";
import Exercises from "./views/Exercises";
import CreateExercise from "./views/CreateExercise";
import EditRoutine from "./views/EditRoutine";
import EditExercise from "./views/EditExercise";
import ValidateEmail from "./views/ValidateEmail";
import CreateCycleExercise from "./components/CreateCycleExercise";
import Setup from "./views/Setup";

export {router};

Vue.use(VueRouter);
// Vue.use(Plugin);

Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
        {path: '/', component: LogIn},
        {path: '/Home', component: Home},
        {path: '/Workouts', component: Workouts},
        {path: '/Profile', component: Profile},
        {path: '/Routines', component: Routines},
        {path: '/Exercises', component:Exercises},
        {path: '/RoutineDetail', component: RoutineDetail, name: 'RoutinePath', props: true},
        {path: '/CreateRoutine', component: CreateRoutine},
        {path: '/CreateExercise', component: CreateExercise},
        {path: '/EditRoutine', component: EditRoutine, name: 'EditRoutinePath', props: true},
        {path: '/EditExercise', component: EditExercise, name: 'EditExercisePath', props: true},
        {path: '/Register', component: Register},
        {path: '/ValidateEmail', component: ValidateEmail},
        {path: '/CreateCycleExercise', component: CreateCycleExercise}, //Borrar
        {path: '/Setup', component: Setup},
        {path: '/*', component: Error404},
    ]
})

router.beforeEach((to, from, next ) => {
    if( isLogged() || isValidPath(to.path)){
        next();
    } else{
        next({
            path: '/',
        })
    }
});

function isLogged(){
    return localStorage.getItem('securityToken');
}

function isValidPath(path){
    return path.localeCompare('/') === 0 || path.localeCompare('/Register') === 0 || path.localeCompare('/ValidateEmail') === 0;
}

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
