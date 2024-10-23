<template>
    <section class="h-fit relative z-20 bg-[#F9FAFB] py-[50px] lg:py-[90px] 2xl:py-36">
        <div class="container flex flex-col gap-6 lg:gap-[50px]">
            <div class="gap-4 lg:gap-5 text-center animation-fade-in">
                <HeadingOne>Bizning raqamlar</HeadingOne>
                <HeadingThree>Bizning kompaniyamiz haqida qisqacha raqamli ma’lumot</HeadingThree>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 justify-center">
                <div class="flex flex-col text-center gap-3 animation-fade-in">
                    <p class="text-6xl font-gilroy-semibold">10+</p>
                    <p class="text-2xl font-gilroy-semibold text-darkGray">Malakali ekspertlar</p>
                </div>
                <div class="flex flex-col text-center gap-3 animation-fade-in">
                    <p class="text-6xl font-gilroy-semibold">1k+</p>
                    <p class="text-2xl font-gilroy-semibold text-darkGray">Bitirgan o’quvchilarimiz</p>
                </div>
                <div class="flex flex-col text-center gap-3 animation-fade-in">
                    <p class="text-6xl font-gilroy-semibold">{{ yearsOfExperience }}+</p>
                    <p class="text-2xl font-gilroy-semibold text-darkGray">Yil tajriba</p>
                </div>
                <div class="flex flex-col text-center gap-3 animation-fade-in">
                    <p class="text-6xl font-gilroy-semibold">25+</p>
                    <p class="text-2xl font-gilroy-semibold text-darkGray">Texnologiyalar</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import HeadingThree from "@/components/UI/HeadingThree.vue";
import HeadingOne from "@/components/UI/HeadingOne.vue";
import {computed} from "vue";

const yearsOfExperience = computed(() => new Date().getFullYear() - new Date((new Date().setFullYear(2010))).getFullYear());
</script>
