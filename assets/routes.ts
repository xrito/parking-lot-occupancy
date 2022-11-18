import { createWebHistory, createRouter } from "vue-router";

import Parking from './vue/components/Page/Parking.vue';
import Dashboard from "./vue/components/Page/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/admin/parking/:id', name:'parking', component: Parking},
        {path:'/admin', name:'admin', component: Dashboard},
    ]
});

export default router;
