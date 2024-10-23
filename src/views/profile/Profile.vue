<template>
    <div>
        <div class="hidden lg:block">
            <div class="container flex h-full mt-5 gap-5">
                <ProfileSidebarLoader v-if="!userStore.getUser.id"/>
                <div v-else class="hidden lg:block w-72 flex-none 2xl:w-80 mb-4 pt-20 sticky top-32 h-fit">
                    <div class="relative w-fit mx-auto">
                        <div class="relative z-20 size-20 md:size-32 xl:size-40 rounded-full bg-white overflow-hidden -mt-10 md:-mt-16 xl:-mt-20 mx-auto shadow-md">
                            <div v-if="isLoadingForAvatar" class="size-full flex justify-center items-center bg-dark/40">
                                <svg class="animate-spin size-8 text-purple mx-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                    <path fill="currentColor" d="M16 8a7.92 7.92 0 0 0-2.431-5.568A7.78 7.78 0 0 0 5.057.896c-.923.405-1.758.992-2.449 1.712S1.371 4.182 1.011 5.105a7.53 7.53 0 0 0 .115 5.742c.392.892.961 1.7 1.658 2.368S4.307 14.41 5.2 14.758a7.3 7.3 0 0 0 2.799.493a7.16 7.16 0 0 0 6.526-4.547a7 7 0 0 0 .415-1.622l.059.002a1 1 0 0 0 .996-1.083h.004zm-1.589 2.655c-.367.831-.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434a6.8 6.8 0 0 1-2.608.454a6.68 6.68 0 0 1-4.685-2.065a6.6 6.6 0 0 1-1.38-2.173a6.5 6.5 0 0 1 .116-4.976c.342-.77.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326a6.27 6.27 0 0 1 4.784.116c.74.329 1.41.805 1.963 1.387s.988 1.27 1.272 2.011a6 6 0 0 1 .397 2.32h.004a1 1 0 0 0 .888 1.077a7 7 0 0 1-.481 1.578z"/>
                                </svg>
                            </div>
                            <img v-if="userStore.getUser.avatar" :src="baseUrl + userStore.getUser.avatar.contentUrl" alt="avatar" class="w-full absolute z-50"/>
                            <div v-else class="size-full border-2 border-gray/80 rounded-full overflow-hidden">
                                <div class="size-[80%] -bottom-1/3 rounded-full bg-gray/80 left-1/2 absolute -translate-x-1/2"></div>
                                <div class="size-[38%] top-4 rounded-full bg-gray/80 left-1/2 absolute -translate-x-1/2"></div>
                            </div>
                        </div>
                        <div class="absolute cursor-pointer group bottom-0.5 xl:bottom-1 2xl:bottom-2 right-0.5 xl:right-1 2xl:right-2 size-10 flex justify-center items-center rounded-full z-20 shadow-lg outline-gray">
                            <div class="relative cursor-pointer size-full flex justify-center rounded-full items-center bg-white hover:bg-purple transition-all">
                                <svg class="size-8 cursor-pointer text-dark group-hover:text-white transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                                    <path fill="currentColor" d="M10 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H6zm8 .5h-3.207a5.5 5.5 0 0 0-.393-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3.6q.476.244 1 .393V14c0 .373.102.722.28 1.02l4.669-4.588a1.5 1.5 0 0 1 2.102 0l4.67 4.588A2 2 0 0 0 16 14V6a2 2 0 0 0-2-2m0 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m-8.012 8.226A2 2 0 0 0 6 16h8c.37 0 .715-.1 1.012-.274l-4.662-4.58a.5.5 0 0 0-.7 0z"/>
                                </svg>
                                <input @change="changeAvatar" type="file" accept="image/png, image/jpeg" class="absolute file:cursor-pointer inset-0 file:outline-gray rounded-full outline-gray file:opacity-0"/>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow-md rounded-xl -mt-10 md:-mt-16 xl:-mt-20 pt-10 md:pt-16 xl:pt-20">
                        <div class="my-6 2xl:my-10 px-5 text-dark">
                            <p class="text-center text-[26px] 2xl:text-3xl font-gilroy-semibold">{{ fullName }}</p>
                            <p class="text-lg 2xl:text-xl text-center">User id: {{ userStore.getUser.id }}</p>
                        </div>
                        <ul class="text-xl 2xl:text-2xl">
                            <li>
                                <router-link @click="isVisibleSidebar = false" :to="{ name: 'my-courses' }" :class="`${$route.name === 'my-courses' ? 'bg-purple text-white' : 'hover:bg-lightGray/20'}`" class="flex gap-4 p-4 2xl:p-5 transition-all cursor-pointer w-full outline-gray">
                                    <svg :class="{'text-white': $route.name === 'my-courses'}" class="text-2xl 2xl:text-3xl text-dark transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 18H3m12 0l2 2l4-4m-5-4H3m13-6H3"/>
                                    </svg>
                                    Mening kurslarim
                                </router-link>
                            </li>
                            <li>
                                <router-link @click="isVisibleSidebar = false" :to="{ name: 'my-comments' }" :class="`${$route.name === 'my-comments' ? 'bg-purple text-white' : 'hover:bg-lightGray/20'}`" class="flex gap-4 p-4 2xl:p-5 transition-all cursor-pointer w-full outline-gray">
                                    <svg :class="{'text-white': $route.name === 'my-comments'}" class="text-2xl 2xl:text-3xl text-dark transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-8-7H7m10 4H7"/>
                                    </svg>
                                    Izohlarim
                                </router-link>
                            </li>
                            <li>
                                <router-link @click="isVisibleSidebar = false" :to="{ name: 'add-comment' }" :class="`${$route.name === 'add-comment' ? 'bg-purple text-white' : 'hover:bg-lightGray/20'}`" class="flex gap-4 p-4 2xl:p-5 transition-all cursor-pointer w-full outline-gray">
                                    <svg :class="{'text-white': $route.name === 'add-comment'}" class="text-2xl 2xl:text-3xl text-dark transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-9-8v6m-3-3h6"/>
                                    </svg>
                                    Izoh qoldirish
                                </router-link>
                            </li>
                            <li>
                                <router-link @click="isVisibleSidebar = false" :to="{ name: 'settings' }" :class="`${$route.name === 'settings' ? 'bg-purple text-white' : 'hover:bg-lightGray/20'}`" class="flex gap-4 p-4 2xl:p-5 transition-all cursor-pointer w-full outline-gray rounded-br-lg rounded-bl-lg">
                                    <svg :class="{'text-white': $route.name === 'settings'}" class="text-2xl 2xl:text-3xl text-dark transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2"/>
                                            <circle cx="12" cy="12" r="3"/>
                                        </g>
                                    </svg>
                                    Sozlamalar
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="grow mb-4">
                    <router-view/>
                </div>
            </div>
        </div>
        <div class="w-full lg:hidden overflow-x-hidden">
            <div class="container">
                <transition
                    enter-active-class="transition-all duration-400 ease-out"
                    leave-active-class="transition-all duration-100 ease-in"
                    enter-from-class="-translate-x-[200px] opacity-0"
                    leave-to-class="-translate-x-[200px] opacity-0"
                >
                    <div v-if="isVisibleSidebar" class="h-full w-full">
                        <div class="flex items-center">
                            <div class="relative size-20 md:size-32 xl:size-40">
                                <div class="relative size-full rounded-full bg-white overflow-hidden">
                                    <div v-if="isLoadingForAvatar" class="size-full flex justify-center items-center bg-dark/40">
                                        <svg class="animate-spin size-8 text-purple mx-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                            <path fill="currentColor" d="M16 8a7.92 7.92 0 0 0-2.431-5.568A7.78 7.78 0 0 0 5.057.896c-.923.405-1.758.992-2.449 1.712S1.371 4.182 1.011 5.105a7.53 7.53 0 0 0 .115 5.742c.392.892.961 1.7 1.658 2.368S4.307 14.41 5.2 14.758a7.3 7.3 0 0 0 2.799.493a7.16 7.16 0 0 0 6.526-4.547a7 7 0 0 0 .415-1.622l.059.002a1 1 0 0 0 .996-1.083h.004zm-1.589 2.655c-.367.831-.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434a6.8 6.8 0 0 1-2.608.454a6.68 6.68 0 0 1-4.685-2.065a6.6 6.6 0 0 1-1.38-2.173a6.5 6.5 0 0 1 .116-4.976c.342-.77.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326a6.27 6.27 0 0 1 4.784.116c.74.329 1.41.805 1.963 1.387s.988 1.27 1.272 2.011a6 6 0 0 1 .397 2.32h.004a1 1 0 0 0 .888 1.077a7 7 0 0 1-.481 1.578z"/>
                                        </svg>
                                    </div>
                                    <img v-if="userStore.getUser.avatar" :src="baseUrl + userStore.getUser.avatar.contentUrl" alt="avatar" class="w-full absolute z-40"/>
                                    <div v-else class="size-full border-2 border-gray/80 rounded-full overflow-hidden">
                                        <div class="size-[75%] -bottom-1/3 rounded-full bg-gray/80 left-1/2 absolute -translate-x-1/2"></div>
                                        <div class="size-[35%] top-4 rounded-full bg-gray/80 left-1/2 absolute -translate-x-1/2"></div>
                                    </div>
                                </div>
                                <div class="absolute cursor-pointer group -bottom-2 -right-2 md:bottom-0 md:right-0 size-9 md:size-10 flex justify-center items-center rounded-full z-40 shadow-lg outline-gray">
                                    <div class="relative cursor-pointer size-full flex justify-center rounded-full items-center bg-white hover:bg-purple transition-all">
                                        <svg class="size-7 md:size-8 cursor-pointer text-dark group-hover:text-white transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                                            <path fill="currentColor" d="M10 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H6zm8 .5h-3.207a5.5 5.5 0 0 0-.393-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3.6q.476.244 1 .393V14c0 .373.102.722.28 1.02l4.669-4.588a1.5 1.5 0 0 1 2.102 0l4.67 4.588A2 2 0 0 0 16 14V6a2 2 0 0 0-2-2m0 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m-8.012 8.226A2 2 0 0 0 6 16h8c.37 0 .715-.1 1.012-.274l-4.662-4.58a.5.5 0 0 0-.7 0z"/>
                                        </svg>
                                        <input @change="changeAvatar" type="file" accept="image/png, image/jpeg" class="absolute file:cursor-pointer inset-0 file:outline-gray rounded-full outline-gray file:opacity-0"/>
                                    </div>
                                </div>
                            </div>
                            <div class="my-6 2xl:my-10 px-5 text-dark">
                                <p class="text-[26px] 2xl:text-3xl font-gilroy-semibold">{{ fullName }}</p>
                                <p class="text-lg 2xl:text-xl">User id: {{ userStore.getUser.id }}</p>
                            </div>
                        </div>
                        <ul class="text-xl 2xl:text-2xl">
                            <li class="my-4 bg-white shadow rounded overflow-hidden">
                                <router-link @click="isVisibleSidebar = false" :to="{ name: 'my-courses' }" :class="`${$route.name === 'my-courses' ? 'bg-purple text-white' : 'hover:bg-lightGray/20'}`" class="flex gap-4 p-4 2xl:p-5 transition-all cursor-pointer w-full">
                                    <svg :class="{'text-white': $route.name === 'my-courses'}" class="text-2xl 2xl:text-3xl text-dark transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 18H3m12 0l2 2l4-4m-5-4H3m13-6H3"/>
                                    </svg>
                                    Mening kurslarim
                                </router-link>
                            </li>
                            <li class="my-4 bg-white shadow rounded overflow-hidden">
                                <router-link @click="isVisibleSidebar = false" :to="{ name: 'my-comments' }" :class="`${$route.name === 'my-comments' ? 'bg-purple text-white' : 'hover:bg-lightGray/20'}`" class="flex gap-4 p-4 2xl:p-5 transition-all cursor-pointer w-full">
                                    <svg :class="{'text-white': $route.name === 'my-comments'}" class="text-2xl 2xl:text-3xl text-dark transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-8-7H7m10 4H7"/>
                                    </svg>
                                    Izohlarim
                                </router-link>
                            </li>
                            <li class="my-4 bg-white shadow rounded overflow-hidden">
                                <router-link @click="isVisibleSidebar = false" :to="{ name: 'add-comment' }" :class="`${$route.name === 'add-comment' ? 'bg-purple text-white' : 'hover:bg-lightGray/20'}`" class="flex gap-4 p-4 2xl:p-5 transition-all cursor-pointer w-full">
                                    <svg :class="{'text-white': $route.name === 'add-comment'}" class="text-2xl 2xl:text-3xl text-dark transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-9-8v6m-3-3h6"/>
                                    </svg>
                                    Izoh qoldirish
                                </router-link>
                            </li>
                            <li class="my-4 bg-white shadow rounded overflow-hidden">
                                <router-link @click="isVisibleSidebar = false" :to="{ name: 'settings' }" :class="`${$route.name === 'settings' ? 'bg-purple text-white' : 'hover:bg-lightGray/20'}`" class="flex gap-4 p-4 2xl:p-5 transition-all cursor-pointer w-full">
                                    <svg :class="{'text-white': $route.name === 'settings'}" class="text-2xl 2xl:text-3xl text-dark transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2"/>
                                            <circle cx="12" cy="12" r="3"/>
                                        </g>
                                    </svg>
                                    Sozlamalar
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </transition>
                <transition
                    enter-active-class="transition-all duration-400 ease-in"
                    leave-active-class="transition-all duration-100 ease-out"
                    enter-from-class="translate-x-[200px] opacity-0"
                    leave-to-class="translate-x-[200px] opacity-0"
                >
                    <div v-if="!isVisibleSidebar" class="grow mb-4">
                        <button @click="isVisibleSidebar = !isVisibleSidebar" class="mb-4 pl-1 pr-3 outline-none focus:ring-1 focus:ring-gray text-lg flex items-center gap-1 text-dark hover:bg-loaderGray/20 transition-all rounded">
                            <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path class="fill-dark" fill="currentColor" d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0"/>
                            </svg>
                            <p class="mt-0.5">Orqaga</p>
                        </button>
                        <router-view/>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from "@/stores/modules/user.js";
import { computed, onMounted, ref } from "vue";
import ProfileSidebarLoader from "@/components/loaders/ProfileSidebarLoader.vue";
import {useMediaObjectStore} from "@/stores/modules/mediaObject.js";
import {getUserData} from "@/helpers/getUserDataFromToken.js";
import {useRouter} from "vue-router";
import {useToast} from "vue-toastification";

const userStore = useUserStore()
const mediaObjectStore = useMediaObjectStore()
const router = useRouter()
const toast = useToast()

const fullName = computed(() => `${userStore.getUser.givenName} ${userStore.getUser.familyName}`)
const baseUrl = computed(() => import.meta.env.VITE_APP_API_URL)
const isVisibleSidebar = ref(true)
const isLoadingForAvatar = ref(false)

const changeAvatar = (event) => {
    if (event.target.files[0]) {
        isLoadingForAvatar.value = true
        const formData = new FormData()
        formData.append('file', event.target.files[0])
        mediaObjectStore.pushMediaObject(formData)
            .then(async (res) => {
                const userData = await getUserData()
                userStore.changeAvatar(userData.id, { avatar: res.data['@id']})
                    .then(() => {
                        userStore.fetchAboutMe()
                        toast.success('Rasm muvoffaqili o\'zgartirlidi.')
                    })
                    .catch(() => {
                        toast.error('Xatolik yuz berdi.')
                    })
                    .finally(() => {
                        isLoadingForAvatar.value = false
                    })
            })
    }
}

onMounted(() => {
    userStore.fetchAboutMe()
        .catch(() => {
            userStore.refreshToken(userStore.getRefreshToken)
                .catch(() => {
                    router.replace({ name : 'sign-in'})
                })
        })
})
</script>
