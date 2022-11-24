import { createApp } from 'vue'
import './styles/app.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-icons/bootstrap-icons.svg'
import Admin from './vue/components/Admin.vue'
import router from "./routes";
import { createMetaManager, plugin as metaPlugin } from 'vue-meta'
const metaManager = createMetaManager();
export default createApp(Admin).use(router).use(metaManager).use(metaPlugin).mount('#app');
