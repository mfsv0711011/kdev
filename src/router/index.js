import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from "vue";
import {useUserStore} from "@/stores/modules/user.js";

const ifAuthorized = (from, to, next) => {
    const userStore = useUserStore()

    if (userStore.isAuthorized) {
        next()
    } else {
        next('/sign-in')
    }
}

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
            path: '/sign-in',
            name: 'sign-in',
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/AuthLayout.vue')),
            },
            component: () => import('@/views/auth/SignIn.vue'),
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/AuthLayout.vue')),
            },
            component: () => import('@/views/auth/SignUp.vue'),
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/AuthLayout.vue')),
            },
            component: () => import('@/views/ForgotPassword.vue'),
        },
        {
            path: '/profile',
            name: 'profile',
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/SecondaryLayout.vue')),
            },
            beforeEnter: ifAuthorized,
            component: () => import('@/views/profile/Profile.vue'),
            redirect: { name: 'my-courses' },
            children: [
                {
                    path: '/my-courses',
                    name: 'my-courses',
                    component: () => import('@/views/profile/MyCourses.vue'),
                },
                {
                    path: '/my-comments',
                    name: 'my-comments',
                    component: () => import('@/views/profile/MyComments.vue'),
                },
                {
                    path: '/add-comment',
                    name: 'add-comment',
                    component: () => import('@/views/profile/AddComment.vue'),
                },
                {
                    path: '/settings',
                    name: 'settings',
                    component: () => import('@/views/profile/Settings.vue'),
                }
            ]
        },
        {
            path: '/public-offer',
            name: 'public-offer',
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/AuthLayout.vue')),
            },
            component: () => import('@/views/PublicOffer.vue'),
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
