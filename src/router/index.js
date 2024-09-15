import { createRouter, createWebHistory } from 'vue-router'
import {defineAsyncComponent} from "vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/MainLayout.vue')),
            },
            component: () => import('@/views/Home.vue'),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const element = document.querySelector(to.hash);
                    if (element) {
                        resolve({
                            el: to.hash,
                            behavior: 'smooth',
                        });
                    } else {
                        resolve({ top: 0 });
                    }
                }, 0); // 300ms kutish (zaruratga qarab sozlash mumkin)
            });
        } else {
            return { top: 0 };
        }
    }

})

export default router
