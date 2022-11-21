import { createApp } from 'vue'
import './styles/app.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Admin from './vue/components/Admin.vue'
import router from "./routes";

export default createApp(Admin).use(router).mount('#app');
