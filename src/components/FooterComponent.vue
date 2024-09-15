<template>
    <footer class="mt-auto">
        <div class="w-full bg-white">
            <div class="container">
                <div class="flex items-center justify-between py-12 border-b border-[#DFDFDF]">
                    <div class="flex flex-col gap-5 justify-start">
                        <router-link :to="{ name: 'home' }">
                            <img alt="logo" class="h-10 lg:h-16" src="/logo-full.svg">
                        </router-link>
                        <div class="flex justify-start items-start gap-5 xl:gap-10 font-semibold flex-col md:hidden">
                            <router-link to="/">
                                <KButton class="px-4">Tekin kurslar</KButton>
                            </router-link>
                            <router-link class="hover:opacity-70 transition-all px-5" to="/">Akkaunt</router-link>
                        </div>
                    </div>
                    <nav
                        class="grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:gap-y-8 lg:gap-x-28 font-gilroy-semibold font-semibold">
                        <router-link :to="{ hash: '#main' }" class="px-5 hover:opacity-70 transition-all py-2 nav ">
                            Asosiy ekran
                        </router-link>
                        <router-link :to="{ hash: '#courses' }" class="px-5 hover:opacity-70 transition-all py-2 nav">
                            Kurslar
                        </router-link>
                        <router-link :to="{ hash: '#info' }" class="px-5 hover:opacity-70 transition-all py-2 nav">
                            Ma'lumot
                        </router-link>
                        <router-link :to="{ hash: '#contact' }" class="px-5 hover:opacity-70 transition-all py-2 nav">
                            Kontakt
                        </router-link>
                    </nav>
                    <div class="hidden md:flex justify-center items-center gap-5 xl:gap-10 font-gilroy-semibold font-semibold">
                        <a class="hover:opacity-70 transition-all" href="https://kadirov.dev/login">Kirish</a>
                        <a target="_blank" href="https://myblog.uz/author/kadirov/">
                            <KButton class="px-6">Tekin kurslar</KButton>
                        </a>
                    </div>
                </div>
                <div class="flex items-center justify-between py-[1.875rem] lg:py-10">
                    <p class="text-sm md:text-2xl">
                        Barcha huquqlar himoya himoyalangan. {{ getCurrentYear }}
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
        <div class="w-full bg-[#1E1E1E]">
            <div class="container">
                <div class="flex items-center justify-between py-6 lg:py-8 font-gilroy-medium text-white">
                    <p class="text-sm md:text-2xl text-center w-full">
                        &copy; KadirovDev, <a class="text-purple" target="_blank" href="https://kadirov.dev/public-offer">Ommaviy offerta</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import {useRoute} from "vue-router";
import KButton from "@/components/UI/KButton.vue";

const currentHash = ref(window.location.hash || '#main');

const route = useRoute()
const getCurrentYear = computed(() => new Date().getFullYear())

watch(() => route.hash, newHash => {
    currentHash.value = newHash
})
</script>

<style scoped>

</style>