import { createWebHistory, createRouter } from "vue-router";

import Camera from './components/Camera';
import Dashboard from "./components/Dashboard";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/admin/parking/:id', name:'parking', component: Camera},
        {path:'/admin', name:'admin', component: Dashboard},
    ]
});

export default router;
