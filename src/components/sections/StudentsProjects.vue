<template>
    <section class="py-[50px] lg:py-[100px] bg-white">
        <div class="container">
            <div class="gap-4 lg:gap-5 text-center mb-16 animation-fade-in">
                <HeadingOne>Kurs amaliyotida bajarilgan ishlar</HeadingOne>
                <HeadingTwo>Har bir kurs vaqtida o’quvchilar bajargan amaliyot ishlari</HeadingTwo>
            </div>
        </div>
        <div class="mb-5">
            <div class="embla animation-fade-in" ref="emblaRef">
                <div class="embla__container">
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/bank2.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/boshqar1.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/boshqar2.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/itWork1.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/itWork2.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/kadirovDev2.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/testing1.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/testing2.jpg" alt="img">
                    </div>
                </div>
            </div>
            <div class="embla animation-fade-in mt-5" ref="emblaRef2">
                <div class="embla__container">
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/bank2.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/boshqar1.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/boshqar2.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/itWork1.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/itWork2.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/kadirovDev2.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/testing1.jpg" alt="img">
                    </div>
                    <div class="w-[370px] lg:w-[550px] flex-none ml-5 shadow-md border border-dark/50 rounded-lg overflow-hidden">
                        <img src="/works/testing2.jpg" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import HeadingOne from "@/components/UI/HeadingOne.vue";
import HeadingTwo from "@/components/UI/HeadingTwo.vue";
import emblaCarouselVue from "embla-carousel-vue";
import AutoScroll from "embla-carousel-auto-scroll";

const [emblaRef] = emblaCarouselVue(
    { loop: true, dragFree: false },
    [AutoScroll({ playOnInit: true, speed: 1, autoplay: true })]
);
const [emblaRef2] = emblaCarouselVue(
    { loop: true, dragFree: false },
    [AutoScroll({ playOnInit: true, direction: "backward", speed: 1, autoplay: true })]
)
</script>

<style scoped>

</style>