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
        {
            path: '/courses/:slug',
            name: 'courses',
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/SecondaryLayout.vue')),
            },
            component: () => import('@/views/Course.vue'),
        },
        {
            path: '/auth',
            name: 'auth',
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/AuthLayout.vue')),
            },
            component: () => import('@/views/TestView.vue'),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            // Qayta yuklangan yoki orqaga tugmasi bosilgan holatda eski skroll pozitsiyasini saqlaydi
            return savedPosition;
        } else if (to.hash) {
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
                }, 100); // Zarurat bo'lsa vaqtni sozlang
            });
        } else {
            // Agar hash yoki savedPosition mavjud bo'lmasa, yuqoriga ko'taradi
            return { top: 0 };
        }
    }
})

export default router
