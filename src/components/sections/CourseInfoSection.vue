<template>
    <section id="info" class="py-[50px] lg:py-[100px] bg-[#F9FAFB]">
        <div class="container">
            <div class="gap-4 lg:gap-5 text-center mb-16 animation-fade-in">
                <HeadingOne>Kurs davomidagi yo’lingiz</HeadingOne>
<!--                <HeadingThree class="text-xl font-normal">Powerful, self-serve product and growth analytics to help you convert, engage,<br> and retain more users. Trusted by over 4,000 startups.</HeadingThree>-->
            </div>

            <transition
                enter-active-class="transition-all duration-400 ease-out"
                leave-active-class="transition-all duration-100 ease-in"
                enter-from-class="-translate-x-[200px] opacity-0"
                leave-to-class="-translate-x-[200px] opacity-0"
            >
                <div
                    v-if="isJuniorCourseTheme"
                    class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                    <div
                        v-for="courseTheme of juniorCourseThemes"
                        :key="courseTheme.id"
                        class="p-6 bg-white flex flex-col gap-[30px] animation-fade-in"
                    >
                        <div>
                            <img :src="courseTheme.icon" alt="icon">
                        </div>
                        <div>
                            <p class="text-2xl font-gilroy-semibold text-darkGray">{{ courseTheme.heading }}</p>
                            <ul class="text-gray list-disc ml-6 gap-4 flex flex-col mt-4 text-lg">
                                <li
                                    v-for="listItem of courseTheme.list"
                                    :key="listItem.id"
                                >
                                    {{ listItem.name }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </transition>

            <transition
                enter-active-class="transition-all duration-400 ease-in"
                leave-active-class="transition-all duration-100 ease-out"
                enter-from-class="translate-x-[200px] opacity-0"
                leave-to-class="translate-x-[200px] opacity-0"
            >
                <div v-if="!isJuniorCourseTheme" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div
                        v-for="courseTheme of middleCourseThemes"
                        :key="courseTheme.id"
                        class="p-6 bg-white flex flex-col gap-[30px] animation-fade-in"
                    >
                        <div>
                            <img :src="courseTheme.icon" alt="icon">
                        </div>
                        <div>
                            <p class="text-2xl font-gilroy-semibold text-darkGray">{{ courseTheme.heading }}</p>
                            <ul class="text-gray list-disc ml-6 gap-4 flex flex-col mt-4 text-lg">
                                <li
                                    v-for="listItem of courseTheme.list"
                                    :key="listItem.id"
                                >
                                    {{ listItem.name }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </transition>

        </div>
    </section>
</template>

<script setup>
// import HeadingThree from "@/components/UI/HeadingThree.vue";
import HeadingOne from "@/components/UI/HeadingOne.vue";

defineProps({
    isJuniorCourseTheme: {
        type: Boolean,
        default: true
    }
})

const juniorCourseThemes = [
    {
        id: 1,
        heading: '1-Modul.',
        icon: '/Featured%20icon.svg',
        list: [
            {
                id: 1,
                name: 'Umumiy Dasturlash Teoriyasi.'
            },
            {
                id: 2,
                name: '1 oy davom etadi.'
            }
        ]
    },
    {
        id: 2,
        heading: '2-Modul.',
        icon: '/Featured%20icon%20(1).svg',
        list: [
            {
                id: 1,
                name: 'HTML / CSS.'
            },
            {
                id: 2,
                name: 'Bootstrap.'
            },
            {
                id: 3,
                name: '1 oy davom etadi..'
            }
        ]
    },
    {
        id: 3,
        heading: '3-Modul.',
        icon: '/Featured%20icon%20(2).svg',
        list: [
            {
                id: 1,
                name: 'Git.'
            },
            {
                id: 2,
                name: 'MySQL.'
            },
            {
                id: 3,
                name: 'PHP.'
            },
            {
                id: 4,
                name: '1 oy davom etadi.'
            }
        ]
    },
    {
        id: 4,
        heading: '4-Modul.',
        icon: '/Featured%20icon%20(3).svg',
        list: [
            {
                id: 1,
                name: 'Symfony.'
            },
            {
                id: 2,
                name: 'API-Platform.'
            },
            {
                id: 3,
                name: '1.5 oy davom etadi.'
            },
        ]
    },
    {
        id: 5,
        heading: '5-Modul.',
        icon: '/Featured%20icon%20(4).svg',
        list: [
            {
                id: 1,
                name: 'JavaScript.'
            },
            {
                id: 2,
                name: 'VueJS.'
            },
            {
                id: 3,
                name: '1.5 oy davom etadi.'
            },
        ]
    },
    {
        id: 6,
        heading: '6-Modul.',
        icon: '/Featured%20icon%20(5).svg',
        list: [
            {
                id: 1,
                name: 'Mustaqil ish.'
            },
            {
                id: 2,
                name: 'Kursda o\'tilgan mavzular asosida loyiha yaratish. O\'quvchilar mustaqil bajarishadi.'
            },
        ]
    },
]
const middleCourseThemes = [
    {
        id: 1,
        heading: '1-Modul.',
        icon: '/Featured%20icon.svg',
        list: [
            {
                id: 1,
                name: 'Linux OS.'
            },
            {
                id: 2,
                name: 'Docker.'
            },
            {
                id: 3,
                name: '1 oy davom etadi.'
            }
        ]
    },
    {
        id: 2,
        heading: '2-Modul.',
        icon: '/Featured%20icon%20(1).svg',
        list: [
            {
                id: 1,
                name: 'VDS / SSH.'
            },
            {
                id: 2,
                name: 'Domain.'
            },
            {
                id: 3,
                name: '1 oy davom etadi.'
            }
        ]
    },
    {
        id: 3,
        heading: '3-Modul.',
        icon: '/Featured%20icon%20(2).svg',
        list: [
            {
                id: 1,
                name: 'Nginx.'
            },
            {
                id: 2,
                name: 'CI/CD.'
            },
            {
                id: 3,
                name: '1 oy davom etadi.'
            }
        ]
    },
    {
        id: 4,
        heading: '4-Modul.',
        icon: '/Featured%20icon%20(3).svg',
        list: [
            {
                id: 1,
                name: 'Bash / RegExp.'
            },
            {
                id: 2,
                name: 'SOLID.'
            },
            {
                id: 3,
                name: 'PHP Trait.'
            },
            {
                id: 4,
                name: 'Cron.'
            },
            {
                id: 5,
                name: '1 oy davom etadi.'
            },
        ]
    },
    {
        id: 5,
        heading: '5-Modul.',
        icon: '/Featured%20icon%20(4).svg',
        list: [
            {
                id: 1,
                name: 'Jobs and Workers.'
            },
            {
                id: 2,
                name: 'Redis.'
            },
            {
                id: 3,
                name: 'Unit/Application test.'
            },
            {
                id: 4,
                name: 'HTTP Client / Parsing.'
            },
            {
                id: 5,
                name: 'Vue Advanced.'
            },
            {
                id: 5,
                name: '1 oy davom etadi.'
            },
        ]
    },
    {
        id: 6,
        heading: '6-Modul.',
        icon: '/Featured%20icon%20(5).svg',
        list: [
            {
                id: 1,
                name: 'Amaliyot.'
            },
            {
                id: 2,
                name: '2 oy davom etadi.'
            },
        ]
    },
]
</script>

<style scoped>
</style>