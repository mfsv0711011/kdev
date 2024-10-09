<template>
    <div class="text-dark font-semibold sticky z-50 top-0 transition-all" :class="{'shadow bg-white/70 z-50 backdrop-blur-md mb-14': !isTop}">
        <div class="container py-4 2xl:py-10 transition-all" :class="{'py-6 2xl:py-8': isTop, 'py-4 2xl:py-5': !isTop}">
            <header class="w-full flex justify-between items-center">
                <router-link :to="{ name: 'home', hash: '#main' }" class="outline-gray">
                    <img class="h-10 2xl:h-[52px]" src="/logo-full.svg" alt="logo">
                </router-link>
                <nav class="lg:flex justify-center items-center lg:gap-6 2xl:gap-20 hidden">
                    <router-link
                        :class="{'active': currentHash === '#main' && $route.path === '/'}"
                        class="px-5 hover:opacity-70 transition-all py-2 nav text-nowrap outline-gray"
                        :to="{ name: 'home', hash: '#main' }"
                    >
                        Asosiy ekran
                    </router-link>
                    <router-link
                        :class="{'active': currentHash === '#courses' && $route.path === '/'}"
                        class="px-5 hover:opacity-70 transition-all py-2 nav outline-gray"
                        :to="{ name: 'home', hash: '#courses' }"
                    >
                        Kurslar
                    </router-link>
                    <router-link
                        :class="{'active': currentHash === '#info' && $route.path === '/'}"
                        class="px-5 hover:opacity-70 transition-all py-2 nav outline-gray"
                        :to="{ name: 'home', hash: '#info' }"
                    >
                        Ma'lumot
                    </router-link>
                    <router-link
                        :class="{'active': currentHash === '#contact' && $route.path === '/'}"
                        class="px-5 hover:opacity-70 transition-all py-2 nav outline-gray"
                        :to="{ name: 'home', hash: '#contact' }"
                    >
                        Kontakt
                    </router-link>
                </nav>

                <div class="lg:flex justify-center items-center lg:gap-2.5 xl:gap-5 hidden text-lg">
                    <router-link v-if="!userStore.isAuthorized" :to="{ name: 'sign-in' }" class="px-5 hover:opacity-70 transition-all py-2 nav outline-gray">
                        Kirish
                    </router-link>
                    <router-link v-if="userStore.isAuthorized" :to="{ name: 'profile' }" class="px-5 hover:opacity-70 transition-all py-2 nav outline-gray">
                        Profil
                    </router-link>
                    <KAnchorButton target="_blank" href="https://myblog.uz/author/kadirov/">Tekin kurslar</KAnchorButton>
                </div>
                <button @click="isOpen = !isOpen" class="lg:hidden outline-gray">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.87207 15.0003H23.1284" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87207 15.0003H23.1284" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87207 15.0003H23.1284" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87207 15.0003H23.1284" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87207 15.0003H23.1284" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87207 20.0022H23.1284" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87207 20.0022H23.1284" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87207 20.0022H23.1284" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87207 20.0022H23.1284" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87207 20.0022H23.1284" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87195 9.99831H23.1283" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87195 9.99831H23.1283" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87195 9.99831H23.1283" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87195 9.99831H23.1283" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.87195 9.99831H23.1283" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <Transition :duration="550" name="nested">
                    <div v-show="isOpen" class="lg:hidden outer fixed inset-0 h-dvh w-dvw transition">
                        <div class="inner w-full h-full p-4 flex flex-col">
                            <div class="flex justify-between">
                                <router-link :to="{ name: 'home', hash: '#main' }" class="outline-gray">
                                    <img class="h-10 2xl:h-[52px]" src="/logo-full.svg" alt="logo">
                                </router-link>

                                <button @click="isOpen = false" class="outline-gray">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 7.5L7.5 22.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.5 7.5L22.5 22.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>

                            <nav class="flex flex-col mt-[50px] gap-[30px] ">
                                <router-link
                                    @click="isOpen = false"
                                    :class="{'active': currentHash === '#main' && $route.path === '/'}"
                                    class="w-fit px-5 hover:opacity-70 transition-all py-2 nav text-nowrap outline-gray"
                                    :to="{ name: 'home', hash: '#main' }"
                                >
                                    Asosiy ekran
                                </router-link>
                                <router-link
                                    @click="isOpen = false"
                                    :class="{'active': currentHash === '#courses' && $route.path === '/'}"
                                    class="w-fit px-5 hover:opacity-70 transition-all py-2 nav outline-gray"
                                    :to="{ name: 'home', hash: '#courses' }"
                                >
                                    Kurslar
                                </router-link>
                                <router-link
                                    @click="isOpen = false"
                                    :class="{'active': currentHash === '#info' && $route.path === '/'}"
                                    class="w-fit px-5 hover:opacity-70 transition-all py-2 nav outline-gray"
                                    :to="{ name: 'home', hash: '#info' }"
                                >
                                    Ma'lumot
                                </router-link>
                                <router-link
                                    @click="isOpen = false"
                                    :class="{'active': currentHash === '#contact' && $route.path === '/'}"
                                    class="w-fit px-5 hover:opacity-70 transition-all py-2 nav outline-gray"
                                    :to="{ name: 'home', hash: '#contact' }"
                                >
                                    Kontakt
                                </router-link>
                            </nav>

                            <div class="mt-auto">
                                <div class="flex gap-4">
                                    <KAnchorButton class="w-1/2" target="_blank" href="https://myblog.uz/author/kadirov/">Tekin kurslar</KAnchorButton>
                                    <router-link
                                        @click="isOpen = false"
                                        v-if="!userStore.isAuthorized" :to="{ name: 'sign-in' }"
                                        class="w-1/2 flex justify-center items-center bg-[#F5F3F2] h-10 md:h-[54px] rounded-10 text-dark"
                                    >
                                        Kirish
                                    </router-link>
                                    <router-link
                                        @click="isOpen = false"
                                        v-if="userStore.isAuthorized" :to="{ name: 'profile' }"
                                        class="w-1/2 flex justify-center items-center bg-[#F5F3F2] h-10 md:h-[54px] rounded-10 text-dark outline-gray"
                                    >
                                        Profil
                                    </router-link>
                                </div>
                                <div class="flex items-center justify-between py-[1.875rem] lg:py-10">
                                    <p class="text-sm font-medium">
                                        Все права защищены 2023
                                    </p>
                                    <div class="flex gap-2.5 lg:gap-5">
                                        <a class="group hover:bg-dark transition-all social border flex items-center justify-center rounded-full border-[#d9d9d9] w-[1.5rem] h-[1.5rem] lg:w-[3.125rem] lg:h-[3.125rem]"
                                           href="https://www.youtube.com/@kadirovDev"
                                           target="_blank">
                                            <div class="w-3 lg:w-6 flex justify-center items-center">
                                                <svg class="size-6" height="1em" viewBox="0 0 24 24" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g class="stroke-dark group-hover:stroke-white" fill="none" stroke="white"
                                                       stroke-width="1.5">
                                                        <path d="m14 12l-3.5 2v-4z" fill="white" stroke-linecap="round"
                                                              stroke-linejoin="round"/>
                                                        <path
                                                            d="M2 12.708v-1.416c0-2.895 0-4.343.905-5.274c.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9s2.561.027 3.912.065c2.851.081 4.277.121 5.182 1.053S22 8.398 22 11.292v1.415c0 2.896 0 4.343-.905 5.275c-.906.931-2.331.972-5.183 1.052c-1.35.039-2.73.066-3.912.066s-2.561-.027-3.912-.066c-2.851-.08-4.277-.12-5.183-1.052S2 15.602 2 12.708Z"/>
                                                    </g>
                                                </svg>
                                            </div>
                                        </a>
                                        <a class="group hover:bg-dark transition-all social border flex items-center justify-center rounded-full border-[#d9d9d9] w-[1.5rem] h-[1.5rem] lg:w-[3.125rem] lg:h-[3.125rem]"
                                           href="https://t.me/kadirovDev"
                                           target="_blank">
                                            <div class="w-3 lg:w-6 flex justify-center items-center">
                                                <svg class="size-6" height="1em" viewBox="0 0 24 24" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path class="stroke-dark group-hover:stroke-white"
                                                          d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.249-3.277"
                                                          fill="none" stroke="white" stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          stroke-width="1.5"/>
                                                </svg>
                                            </div>
                                        </a>
                                        <a class="group hover:bg-dark transition-all social border flex items-center justify-center rounded-full border-[#d9d9d9] w-[1.5rem] h-[1.5rem] lg:w-[3.125rem] lg:h-[3.125rem]"
                                           href="https://facebook.com/kadirovDev"
                                           target="_blank">
                                            <div class="w-3 lg:w-6 flex justify-center items-center">
                                                <svg class="size-6" height="1em" viewBox="0 0 24 24" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path class="stroke-dark group-hover:stroke-white"
                                                          d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                                                          fill="none" stroke="white" stroke-linecap="round"
                                                          stroke-linejoin="round"
                                                          stroke-width="1.5"/>
                                                </svg>
                                            </div>
                                        </a>
                                        <a class="group hover:bg-dark transition-all social border flex items-center justify-center rounded-full border-[#d9d9d9] w-[1.5rem] h-[1.5rem] lg:w-[3.125rem] lg:h-[3.125rem]"
                                           href="https://instagram.com/kadirovDev"
                                           target="_blank">
                                            <div class="w-3 lg:w-6 flex justify-center items-center">
                                                <svg class="size-6" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <g class="stroke-dark group-hover:stroke-white" fill="none" stroke="white" stroke-width="1.5">
                                                        <path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" stroke-linecap="round"
                                                              stroke-linejoin="round"/>
                                                        <path
                                                            d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"/>
                                                        <path d="m17.5 6.51l.01-.011" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </header>
        </div>
    </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref, watch} from "vue";
import { useRoute } from "vue-router";
import KButton from "@/components/UI/KButton.vue";
import useIsTop from "@/composables/useIsTop.js";
import {useUserStore} from "@/stores/modules/user.js";
import KAnchorButton from "@/components/UI/KAnchorButton.vue";

const currentHash = ref(window.location.hash || '#main');

const route = useRoute()
const isTop = useIsTop()
const isOpen = ref(false)
const userStore = useUserStore()

watch(() => route.hash, newHash => {
    currentHash.value = newHash
})
watch(() => isOpen.value, value => {
    document.body.style.overflow = value ? 'hidden' : 'auto';
})

const setIsOpen = () => {
    if(window.innerWidth > 1024) {
        isOpen.value = false
    }
}

onMounted(() => {
    window.addEventListener('resize', setIsOpen)
})

onUnmounted(() => {
    window.removeEventListener('resize', setIsOpen)
})

</script>

<style scoped>
.nav {
    position: relative;
}
.nav::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    border-radius: 50px;
    transition: all .3s ease;
}
.nav.active::after {
    background: #7F56D9;
    width: 60%;
}

.outer, .inner {
    background: #0000004D;
    min-height: 100px;
}

.inner {
    background: #fff;
}

.nested-enter-active, .nested-leave-active {
    transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
    transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    transform: translateX(-80%);
    /*
        Hack around a Chrome 96 bug in handling nested opacity transitions.
      This is not needed in other browsers or Chrome 99+ where the bug
      has been fixed.
    */
    opacity: 0.001;
}
</style>