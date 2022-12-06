import {createWebHistory, createRouter} from "vue-router";
const routes = require('../public/js/fos_js_routes.json');
import Routing from "fos-router";
import Parking from './vue/components/Page/Parking.vue';
import Dashboard from "./vue/components/Page/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/admin/parking/:id', name: 'parking', component: Parking},
        {path: '/admin', name: 'admin', component: Dashboard},
    ]
});

Routing.setRoutingData(routes);
export default router;
