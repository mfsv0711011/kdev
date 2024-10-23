<template>
    <section class="flex justify-center items-center h-fit xl:h-screen xl:max-h-[calc(100dvh_-_108px)] bg-white relative after:absolute after:size-60 after:-top-1 after:right-0 lg:after:-left-9 after:bg-[#AD00FF] after:blur-[250px] before:absolute before:size-60 before:bottom-0 before:left-0 lg:before:left-full lg:before:-translate-x-60 before:bg-[#FFBD3D] before:blur-[250px]">
        <div class="container flex flex-col lg:flex-row justify-center">
            <div class="w-full flex items-center">
                <div class="flex flex-col gap-7 sm:gap-10 xl:gap-14 items-center w-full">
                    <h1 class="leading-tight text-[28px] md:text-[50px] lg:text-[40px] xl:text-[54px] 2xl:text-[65px] font-gilroy-bold text-center lg:text-start"><span class="text-purple font-gilroy-bold selection:bg-purple selection:text-white">Dasturlashni</span> o’rganib <br>Hayotingizni o’zgartiring</h1>
                    <p class="lg:text-2xl font-medium text-center lg:text-start">Biz bilan dasturlashni onlayn tarzda sifatli o’rganing
                        va hayotingizda yangilik oching</p>
                        <router-link class="px-8 hidden lg:flex w-fit self-start h-10 sm:h-12 xl:h-[54px] rounded-10 text-white transition-all outline-gray bg-purple justify-center items-center" :to="{ name: 'courses', params: { slug: 'junior-full-stack-web-developer'} }">
                            <div class="flex font-semibold gap-1 text-lg">
                                <p>Kursga yozilish</p>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 12.5H5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14 17.5L19 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14 7.5L19 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </router-link>
                </div>
            </div>
            <div class="w-full relative z-10 flex flex-col items-center justify-center">
                <img class=" my-20 lg:my-0 hidden sm:flex w-full" src="/main-image.webp" alt="main-image">
                <img class="flex sm:hidden my-10 w-full" src="/main-image-sm.webp" alt="main-image">
                <router-link :to="{ name: 'courses', params: { slug: 'junior-full-stack-web-developer'} }" class="px-8 lg:hidden flex w-full self-start h-10 sm:h-12 xl:h-[54px] rounded-10 text-white transition-all outline-gray bg-purple justify-center items-center">
                    <div class="flex font-semibold justify-center gap-1 lg:text-lg w-full">
                        <p class="mt-px">Kursga yozilish</p>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12.5H5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 17.5L19 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 7.5L19 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup></script>
