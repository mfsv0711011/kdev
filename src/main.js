import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router/index.js";
import {createPinia} from "pinia";
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(Toast, {
        position: 'top-right',
        timeout: 2000
    })
    .mount('#app')

