<template>
    <section class="py-[50px] lg:py-[100px] bg-[#F9FAFB]">
        <div class="container">
            <div class="gap-4 lg:gap-5 text-center mb-16 animation-fade-in">
                <HeadingOne>Full Stack Web Developer</HeadingOne>
                <HeadingTwo>Kurslarimiz yo’li</HeadingTwo>
            </div>
            <div class="sm:flex hidden flex-col gap-[50px]">
                <div class="flex flex-col justify-center gap-3 animation-fade-in">
                    <div class="mx-auto">
                        <Progress :steps="steps"/>
                    </div>
                    <div class="flex justify-center gap-8">
                        <div class="text-center w-[240px]">
                            <p class="text-lg font-gilroy-semibold text-middleGray">Full Stack Developer </p>
                            <p class="text-gray">O’rganish tavsiya qilinadigan tartib</p>
                        </div>
                        <div class="text-center w-[240px]">
                            <p class="text-lg font-gilroy-semibold text-middleGray">Junior Full Stack Web Developer </p>
                            <p class="text-gray">Boshlang’ich bilimlar</p>
                        </div>
                        <div class="text-center w-[240px]">
                            <p class="text-lg font-gilroy-semibold text-middleGray">Middle Full Stack Web Developer </p>
                            <p class="text-gray">Yuqori darajadagi bilim</p>
                        </div>
                        <div class="text-center w-[240px]">
                            <p class="text-lg font-gilroy-semibold text-middleGray">Amaliyot </p>
                            <p class="text-gray">Amaliyot qismimiz</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col sm:hidden gap-16">
                <div class="flex flex-col gap-4 items-center animation-fade-in">
                    <div class="flex flex-col gap-3 items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4629_2252)">
                                <rect width="24" height="24" rx="12" fill="#F9F5FF"/>
                                <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="#7F56D9" stroke-width="1.5"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0964 7.38967L9.93638 14.2997L8.03638 12.2697C7.68638 11.9397 7.13638 11.9197 6.73638 12.1997C6.34638 12.4897 6.23638 12.9997 6.47638 13.4097L8.72638 17.0697C8.94638 17.4097 9.32638 17.6197 9.75638 17.6197C10.1664 17.6197 10.5564 17.4097 10.7764 17.0697C11.1364 16.5997 18.0064 8.40967 18.0064 8.40967C18.9064 7.48967 17.8164 6.67967 17.0964 7.37967V7.38967Z" fill="#7F56D9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4629_2252">
                                    <rect width="24" height="24" rx="12" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div class="text-center w-[240px]">
                            <p class="text-lg font-gilroy-semibold text-middleGray">Full Stack Developer </p>
                            <p class="text-gray">O’rganish tavsiya qilinadigan tartib</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4629_9017)">
                                <rect width="24" height="24" rx="12" fill="white"/>
                                <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="#EAECF0" stroke-width="1.5"/>
                                <circle cx="12" cy="12" r="4" fill="#EAECF0"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4629_9017">
                                    <rect width="24" height="24" rx="12" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div class="text-center w-[240px]">
                            <p class="text-lg font-gilroy-semibold text-middleGray">Junior Full Stack Web Developer </p>
                            <p class="text-gray">Boshlang’ich bilimlar</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4629_9017)">
                                <rect width="24" height="24" rx="12" fill="white"/>
                                <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="#EAECF0" stroke-width="1.5"/>
                                <circle cx="12" cy="12" r="4" fill="#EAECF0"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4629_9017">
                                    <rect width="24" height="24" rx="12" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div class="text-center w-[240px]">
                            <p class="text-lg font-gilroy-semibold text-middleGray">Middle Full Stack Dasturlash </p>
                            <p class="text-gray">Yuqori darajadagi bilim</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4629_9017)">
                                <rect width="24" height="24" rx="12" fill="white"/>
                                <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="#EAECF0" stroke-width="1.5"/>
                                <circle cx="12" cy="12" r="4" fill="#EAECF0"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4629_9017">
                                    <rect width="24" height="24" rx="12" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div class="text-center w-[240px]">
                            <p class="text-lg font-gilroy-semibold text-middleGray">Prakticum </p>
                            <p class="text-gray">Praktika qismimiz</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import HeadingOne from "@/components/UI/HeadingOne.vue";
import HeadingTwo from "@/components/UI/HeadingTwo.vue";
import Progress from "@/components/Progress.vue";


const steps = [
    { name: 'Step 1', href: '#', status: 'complete' },
    { name: 'Step 2', href: '#', status: 'upcoming' },
    { name: 'Step 3', href: '#', status: 'upcoming' },
    { name: 'Step 4', href: '#', status: 'upcoming' },
]

const steps2 = [
    { name: 'Step 1', href: '#', status: 'complete' },
    { name: 'Step 2', href: '#', status: 'upcoming' },
    { name: 'Step 3', href: '#', status: 'upcoming' },
]
</script>

<style scoped>

</style>