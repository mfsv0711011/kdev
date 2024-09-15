import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "@/locales/i18n.js";
import router from "@/router/index.js";
import {createPinia} from "pinia";
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(i18n)
    .use(Toast, {
        position: 'top-right',
        timeout: 2000
    })
    .mount('#app')
