<template>
    <section id="courses" class="py-[50px] lg:py-[100px]">
        <div class="container flex flex-col gap-[30px] lg:gap-[50px]">
            <div class="flex flex-col text-center gap-2.5 animation-fade-in">
                <HeadingOne>KadirovDev kurslari haqida</HeadingOne>
                <HeadingTwo>Hozirgi kunda yetakchi va yagona bo’lib turgan dasturlashni onlayn orgatuvchi kurs</HeadingTwo>
            </div>
            <div class="flex bg-[#F2F3F5] p-0.5 rounded-md md:rounded-2xl animation-fade-in">
                <button
                    @click="isFirstActiveTab = true"
                    :class="{'shadow bg-white': isFirstActiveTab}"
                    class="flex gap-1 justify-center rounded-md md:rounded-2xl transition-all text-sm lg:text-[30px] font-gilroy-semibold py-2.5 px-2 sm:py-4 lg:py-8 w-full"
                >
                    Junior Full Stack <span class="hidden sm:block font-gilroy-semibold"> Developer</span>
                </button>
                <button
                    @click="isFirstActiveTab = false"
                    :class="{'shadow bg-white': !isFirstActiveTab}"
                    class="flex gap-1 justify-center rounded-md md:rounded-2xl transition-all text-sm lg:text-[30px] font-gilroy-semibold py-2.5 px-2 sm:py-4 lg:py-8 w-full"
                >
                    Middle Full Stack <span class="hidden sm:block font-gilroy-semibold"> Developer</span>
                </button>
            </div>
            <transition
                enter-active-class="transition-all duration-400 ease-out"
                leave-active-class="transition-all duration-100 ease-in"
                enter-from-class="-translate-x-[200px] opacity-0"
                leave-to-class="-translate-x-[200px] opacity-0"
                name="slide"
            >
                <div v-if="isFirstActiveTab" class="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    <div class="flex flex-col gap-[30px]">
                        <div class="flex flex-col gap-2.5 text-dark animation-fa font-gilroy-semiboldde-in">
                            <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kursda qatnashish uchun nimalar kerak bo’ladi?</h4>
                            <ul class="lg:text-2xl font-medium list-disc ml-6 flex flex-col gap-1 pt-2">
                                <li class="animation-fade-in"><b>Kompyuter, yoki noutbuk</b></li>
                                <li class="animation-fade-in"> Darslar<b> Zoom, Discord </b> va <b>Telemost</b> dasturlarining biri orqali onlayn tarzda o'tiladi. Siz o’qituvchi va uning elektron doskasini ko’rib turasiz. Ushbu dasturlarni bu yerdan yuklab olishingiz mumkin: <br><a href="https://zoom.us/download" target="_blank">Zoom</a>, <a href="https://discord.com/download" target="_blank">Discord</a>, <a href="https://play.google.com/store/apps/details?id=ru.yandex.telemost&amp;hl=ru&amp;gl=US" target="_blank"> Telemost </a> <br></li>
                                <li class="animation-fade-in"><b>Internet tezligi</b> video a’loqa qilish uchun yetarli bo’lishi kerak. Tekshirish uchun fast.com saytiga kiring. Tezligingiz yetarli darajada bo’lishi uchun sayt kamida 2 mega bit tezlik ko’rsatishi kerak. </li>
                                <li class="animation-fade-in">O’qituvchi ba boshqa o’quvchilar bilan suhbat qilish uchun <b>mikrofoni bor naushnik</b> kerak bo’ladi. Telefon naushniklari ham to’g’ri keladi. </li>
                            </ul>

                            <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kurs haqida</h4>
                            <ul class="lg:text-2xl font-medium list-disc ml-6 flex flex-col gap-1 pt-2">
                                <li class="animation-fade-in"><b>Kurs davomiyligi: </b>5 oy</li>
                                <li class="animation-fade-in"><b>To’lov turlari: </b>O'zbekistonlik o'quvchilar uzcard yoki Humo kartalari orqali saytimizdan to'lov qilishlari mumkin. Chet eldagi vatandoshlar mastercard yoki visa kartalariga pul o’tkazish orqali to’lovni amalga oshirishlari mumkin bo'ladi.</li>
                                <li class="animation-fade-in"><b>Kurs tili: </b>O’zbekcha</li>
                                <li class="animation-fade-in"><b>O’qituvchi: </b>Abdulla Tuychiyev</li>
                                <li class="animation-fade-in"><b>Kursga yozilish uchun: </b>100% oldindan, yoki har oy bo'lib to'lashingiz mumkin.</li>
                            </ul>
                        </div>
                        <div class="grid lg:hidden grid-cols-2 sm:grid-cols-3 gap-2.5 lg:gap-[30px]">
                            <div v-for="skill of juniorSkills" :key="skill.name" class="bg-white rounded-[10px] p-2.5 lg:p-5 flex items-center gap-1 lg:gap-2.5 shadow-md h-fit animation-fade-in">
                                <img class="size-6 lg:size-10" :src="skill.image" alt="html-image">
                                <p class="text-xs lg:text-2xl font-gilroy-semibold">{{ skill.name }}</p>
                            </div>
                        </div>

                        <a
                            href="https://kadirov.dev/course"
                            target="_blank"
                            class="text-purple text-xl font-semibold hover:bg-purple hover:text-white w-fit group px-2 py-1 rounded transition-all animation-fade-in"
                        >
                            <div class="flex gap-1 items-center">
                                <span>Batafsil</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="stroke-purple group-hover:stroke-white" d="M19 12H5" stroke="#80007F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path class="stroke-purple group-hover:stroke-white" d="M14 17L19 12" stroke="#80007F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path class="stroke-purple group-hover:stroke-white" d="M14 7L19 12" stroke="#80007F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div class="hidden lg:grid grid-cols-2 gap-2.5 lg:gap-[30px] h-fit">
                        <div
                            v-for="skill of juniorSkills"
                            :key="skill.name"
                            class="bg-white rounded-[10px] p-2.5 lg:p-5 flex items-center gap-1 lg:gap-2.5 shadow-md h-fit animation-fade-in"
                        >
                            <div class="size-6 lg:size-10 flex justify-center items-center">
                                <img class="w-full flex-none" :src="skill.image" alt="html-image">
                            </div>
                            <p class="text-xs lg:text-2xl font-gilroy-semibold">{{ skill.name }}</p>
                        </div>
                    </div>
                </div>
            </transition>
            <transition
                enter-active-class="transition-all duration-400 ease-in"
                leave-active-class="transition-all duration-100 ease-out"
                enter-from-class="translate-x-[200px] opacity-0"
                leave-to-class="translate-x-[200px] opacity-0"
                name="slide"
            >
                <div v-if="!isFirstActiveTab" class="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    <div class="flex flex-col gap-[30px]">
                        <div class="flex flex-col gap-2.5 text-dark animation-fa font-gilroy-semiboldde-in">
                            <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kursda qatnashish uchun nimalar kerak bo’ladi?</h4>
                            <ul class="lg:text-2xl font-medium list-disc ml-6 flex flex-col gap-1 pt-2">
                                <li class="animation-fade-in"><b>"Junior Full Stack Web Developer"</b> kursini tugatgan bo'lishingiz kerak.</li>
                            </ul>
                            <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kurs haqida</h4>
                            <ul class="lg:text-2xl font-medium list-disc ml-6 flex flex-col gap-1 pt-2">
                                <li class="animation-fade-in"><b>Kurs davomiyligi: </b>5 oy</li>
                                <li class="animation-fade-in"><b>To’lov turlari: </b>O'zbekistonlik o'quvchilar uzcard yoki Humo kartalari orqali saytimizdan to'lov qilishlari mumkin. Chet eldagi vatandoshlar mastercard yoki visa kartalariga pul o’tkazish orqali to’lovni amalga oshirishlari mumkin bo'ladi.</li>
                                <li class="animation-fade-in"><b>Kurs tili: </b>O’zbekcha</li>
                                <li class="animation-fade-in"><b>O’qituvchi: </b>Akmal Kadirov</li>
                                <li class="animation-fade-in"><b>Kursga yozilish uchun: </b>100% oldindan, yoki har oy bo'lib to'lashingiz mumkin.</li>
                            </ul>
                            <h4 class="text-xl lg:text-[30px] font-gilroy-semibold animation-fade-in">Kursni tugatgach</h4>
                            <ul class="lg:text-2xl font-medium list-disc ml-6 flex flex-col gap-1 pt-2">
                                <li class="animation-fade-in">Bizning kompanyamizda 2 oylik amaliyot (практика) o'taysiz. Bunda siz, kurs davomida olgan bilimlaringizni haqiqiy loyihalarda sinash imkoniga ega bo'lasiz.</li>
                            </ul>
                        </div>
                        <div class="grid lg:hidden grid-cols-2 sm:grid-cols-3 gap-2.5 lg:gap-[30px]">
                            <div v-for="skill of middleSkills" :key="skill.name" class="bg-white rounded-[10px] p-2.5 lg:p-5 flex items-center gap-1 lg:gap-2.5 shadow-md h-fit animation-fade-in">

                                <div class="size-6 lg:size-10 flex justify-center items-center">
                                    <img class="w-full" :src="skill.image" alt="html-image">
                                </div>
                                <p class="text-xs lg:text-2xl font-gilroy-semibold">{{ skill.name }}</p>
                            </div>
                        </div>

                        <a
                            href="https://kadirov.dev/course-middle"
                            target="_blank"
                            class="text-purple text-xl font-semibold hover:bg-purple hover:text-white w-fit group px-2 py-1 rounded transition-all animation-fade-in"
                        >
                            <div class="flex gap-1 items-center">
                                <span>Batafsil</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="stroke-purple group-hover:stroke-white" d="M19 12H5" stroke="#80007F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path class="stroke-purple group-hover:stroke-white" d="M14 17L19 12" stroke="#80007F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path class="stroke-purple group-hover:stroke-white" d="M14 7L19 12" stroke="#80007F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div class="hidden lg:grid grid-cols-2 gap-2.5 lg:gap-[30px] h-fit">
                        <div
                            v-for="skill of middleSkills"
                            :key="skill.name"
                            class="bg-white rounded-[10px] p-2.5 lg:p-5 flex items-center gap-1 lg:gap-2.5 shadow-md h-fit animation-fade-in"
                        >
                            <div class="size-6 lg:size-10 flex justify-center items-center">
                                <img class="w-full flex-none " :src="skill.image" alt="html-image">
                            </div>
                            <p class="text-xs lg:text-2xl font-gilroy-semibold">{{ skill.name }}</p>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </section>
</template>

<script setup>
import HeadingOne from "@/components/UI/HeadingOne.vue";
import HeadingTwo from "@/components/UI/HeadingTwo.vue";
import {ref} from "vue";

const isFirstActiveTab = ref(true)

const juniorSkills = [
    { name: 'U.D.T', image: '/skills/junior/umumiy.webp'},
    { name: 'PHP', image: '/skills/junior/php.webp'},
    { name: 'JavaScript', image: '/skills/junior/JavaScript.webp'},
    { name: 'HTML', image: '/skills/junior/html-5.webp'},
    { name: 'CSS', image: '/skills/junior/CSS.webp'},
    { name: 'Bootstrap', image: '/skills/junior/Bootstrap.webp'},
    { name: 'MySQL', image: '/skills/junior/MySQL.webp'},
    { name: 'Symfony', image: '/skills/junior/Symfony.webp'},
    { name: 'Api-Platfrom', image: '/skills/junior/apiPlatform.webp'},
    { name: 'Vue.js', image: '/skills/junior/Vue.js.webp'},
    { name: 'Git', image: '/skills/junior/Git.webp'},
    { name: 'Linux CLI', image: '/skills/junior/Linux CLI.webp'},
    { name: 'Design Patterns', image: '/skills/junior/Design Patterns.webp'},
    { name: 'PhpStorm', image: '/skills/junior/phpStorm.webp'},
]

const middleSkills = [
    { name: 'Docker', image: '/skills/middle/Docker.webp'},
    { name: 'VDS', image: '/skills/middle/VDS.webp'},
    { name: 'SSH', image: '/skills/middle/SSH.webp'},
    { name: 'Linux OS', image: '/skills/middle/Linux OS.webp'},
    { name: 'Apt-Get', image: '/skills/middle/Apt-Get.webp'},
    { name: 'Cron', image: '/skills/middle/Cron.webp'},
    { name: 'Gitlab CI/CD', image: '/skills/middle/Gitlab CI_DI.webp'},
    { name: 'Design Patterns', image: '/skills/middle/Design Patterns.webp'},
    { name: 'solid', image: '/skills/middle/solid.webp'},
    { name: 'Redis', image: '/skills/middle/Redis.webp'},
    { name: 'Rabbit MQ', image: '/skills/middle/Rabbit MQ.webp'},
    { name: 'Jobs & Workers', image: '/skills/middle/Jobs & Workers.webp'},
    { name: 'Regular Expression', image: '/skills/middle/Regular Expression.webp'},
    { name: 'HTTP Client', image: '/skills/middle/HTTP Client.webp'},
    { name: 'Parsing', image: '/skills/middle/Parsing.webp'},
    { name: 'PHP Traits', image: '/skills/middle/PHP Traits.webp'},
    { name: 'Symfony Advanced', image: '/skills/middle/Symfony Advanced.webp'},
    { name: 'Vue Advanced', image: '/skills/middle/Vue Advanced.webp'},
]

</script>

<style scoped>
.slide-enter-active {
    transition: all 0.3s ease-out;
}

.slide-leave-active {
    transition: all 0.3s ease-in;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-200px);
    opacity: 0;
}
</style>