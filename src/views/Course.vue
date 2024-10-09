<template>
    <div class="bg-[#F9FAFB]">
        <div class="container mt-7 mb-10 flex flex-col gap-4 lg:gap-7">
            <HeadingFour>{{ course.courseName }}</HeadingFour>
            <Paragraph>{{ course.aboutText }}</Paragraph>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 lg:gap-[30px] bg-gray p-2.5 lg:p-[30px] rounded-lg">
                <div v-for="skill of course.skills" :key="skill.name">
                    <Skill :skill/>
                </div>
            </div>
        </div>

        <div class="bg-white py-7">
            <div class="container">
                <div class="lg:text-2xl font-medium lg:py-10 flex flex-col gap-4 lg:gap-7">
                    <div class="flex flex-col gap-2.5 md:gap-7">
                        <HeadingFive>Dasturlash tillari va Texnologiyalar</HeadingFive>
                        <div
                            v-for="skill of course.filteredSkills"
                            :key="skill.id"
                        >
                            <Skill class="float-left min-w-[7.5rem] lg:min-w-[15rem] mr-2.5 lg:mr-5" :skill/>
                            <Paragraph>{{ skill?.text }}</Paragraph>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CourseRequirementInfoComponent v-if="module.getModules.models.length" :is-junior-route :teacher-full-name="moduleTeacherFullName"/>
        <div v-if="module.getModules.models.length" class="bg-white py-7">
            <div class="container flex flex-col gap-4 lg:gap-7">
                <CoursesRadioButtonLoader v-if="module.isCoursesLoading"/>
                <div v-if="!module.isCoursesLoading" class="flex flex-col gap-2.5 md:gap-7 md:mt-6">
                    <HeadingFive>Kursni tanlang</HeadingFive>
                    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                        <KRadioButton
                            v-for="course of module.getModules.models"
                            :key="course.id" v-model="selectedCourseId"
                            :value="course.id"
                            :label="course.name"
                            :sup="course.discountPercent ? course.discountPercent + '%' : ''"
                            name="course"
                            @change="clearCheckedCourses"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div v-if="module.getModules.models.length" class="container py-7">
            <PaymentLoader v-if="module.isCoursesLoading || module.isCourseLoading"/>
            <div v-if="!module.isCourseLoading" class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
                <div>
                    <p>Eng chuqur o’rgatilgan 0 dan to Strong Junior+ gacha bo’lgan kurs. 4 oy davom etadi</p>
                    <ul>
                        <li class="flex items-center gap-5 border-b border-[#D4D4D4] py-4 lg:py-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.9998" cy="11.9998" r="9.00375" fill="#80007F" fill-opacity="0.2"/>
                                <path d="M8.44141 12.3387L10.6093 14.5066L10.5953 14.4926L15.4863 9.60156" stroke="#80007F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p v-if="module.getModule.courses">Boshlanish oyi : {{ module.getModule?.courses[0]?.startMonth.name }}</p>
                        </li>
                        <li class="flex items-center gap-5 border-b border-[#D4D4D4] py-4 lg:py-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.9998" cy="11.9998" r="9.00375" fill="#80007F" fill-opacity="0.2"/>
                                <path d="M8.44141 12.3387L10.6093 14.5066L10.5953 14.4926L15.4863 9.60156" stroke="#80007F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Dushanba va payshanba kunlari</p>
                        </li>
                        <li class="flex items-center gap-5 border-b border-[#D4D4D4] py-4 lg:py-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.9998" cy="11.9998" r="9.00375" fill="#80007F" fill-opacity="0.2"/>
                                <path d="M8.44141 12.3387L10.6093 14.5066L10.5953 14.4926L15.4863 9.60156" stroke="#80007F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Soat 20:00 dan 22:00 gacha</p>
                        </li>
                        <li class="flex items-center gap-5 border-b border-transparent py-4 lg:py-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.9998" cy="11.9998" r="9.00375" fill="#80007F" fill-opacity="0.2"/>
                                <path d="M8.44141 12.3387L10.6093 14.5066L10.5953 14.4926L15.4863 9.60156" stroke="#80007F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p v-if="module.getModule.courses"><b class="text-purple">{{ module.getModule?.courses[0]?.countOfStudents }} ta</b> bo’sh o’rin qoldi</p>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col">
                    <p class="text-sm lg:text-xl font-medium mb-1">To’lov turi</p>
                    <div class="flex flex-col gap-4 lg:gap-8">
                        <div class="w-full grid grid-cols-2 gap-4 md:gap-7 m-0.5">
                            <KRadioButton v-model="selectedPayment" value="fully" label="To’liq"/>
                            <KRadioButton v-model="selectedPayment" value="monthly" label="Oylik"/>
                        </div>
                        <transition
                            enter-active-class="transition-all duration-400 ease-out"
                            leave-active-class="transition-all duration-100 ease-in"
                            enter-from-class="-translate-x-[200px] opacity-0"
                            leave-to-class="-translate-x-[200px] opacity-0"
                        >
                            <div v-if="selectedPayment === 'fully'" class="w-full grid grid-cols-2 gap-4 md:gap-7">
                                <p class="text-xl lg:text-[34px] font-gilroy-medium">{{ (coursePriceWithDiscount / 100).toLocaleString('en-US').replace(/,/g, ' ') }} <sub class="font-gilroy text-sm lg:text-2xl">uzs</sub></p>
                                <p v-if="module.getModule.courses.length && module.getModule.discountPercent" class="text-xl text-lightGray lg:text-[34px] font-gilroy-medium"><span class="line-through">{{ (module.getModule.courses?.reduce((acc, courseItem) => acc + courseItem?.price, 0) / 100).toLocaleString('en-US').replace(/,/g, ' ') }}</span> <sub class="font-gilroy text-sm lg:text-2xl">uzs</sub></p>
                                <p v-if="module.getModule.discountPercent" class="lg:text-xl text-green-700 col-span-2">Kursni summasini to'liq to'lov qilishda chegirma <span class="underline text-2xl">{{ module.getModule.discountPercent }}%</span></p>
                            </div>
                        </transition>
                        <transition
                            enter-active-class="transition-all duration-400 ease-in"
                            leave-active-class="transition-all duration-100 ease-out"
                            enter-from-class="translate-x-[200px] opacity-0"
                            leave-to-class="translate-x-[200px] opacity-0"
                        >
                            <div v-if="selectedPayment === 'monthly'">
                                <div class="w-full grid grid-cols-2 gap-4 md:gap-7" v-if="module.getModule.courses.length === 1">
                                    <div class="flex flex-col gap-4">
                                        <p v-if="module.getModule.courses.length" class="text-xl lg:text-[34px] font-gilroy-medium">{{ parseInt((module.getModule.courses[0].price / 100) / 12).toLocaleString('en-US').replace(/,/g, ' ') }} <sub class="font-gilroy text-sm lg:text-2xl">uzs/oyiga</sub></p>
                                        <p class="lg:text-xl font-medium col-span-2">12 to’lov</p>
                                    </div>
                                    <div class="flex flex-col gap-4">
                                        <p class="lg:text-xl">Oyma-oy to'lov qilish uchun administrator bilan bog'laning.</p>
                                        <div class="flex flex-col gap-2">
                                            <a href="tel:+998901305020" class="flex items-center gap-2 transition-all italic group hover:text-purple lg:text-xl">
                                                <svg class="size-6 text-dark group-hover:text-purple transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/>
                                                    </path>
                                                </svg>
                                                +998 90 130 50 20
                                            </a>
                                            <a href="https://t.me/kadirovDevAdmin" class="flex items-center gap-2 transition-all italic group hover:text-purple lg:text-xl">
                                                <svg class="size-6 text-dark group-hover:text-purple transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                        <path stroke-dasharray="20" stroke-dashoffset="20" d="M21 5l-2.5 15M21 5l-12 8.5">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"/>
                                                        </path>
                                                        <path stroke-dasharray="24" stroke-dashoffset="24" d="M21 5l-19 7.5">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/></path>
                                                        <path stroke-dasharray="14" stroke-dashoffset="14" d="M18.5 20l-9.5 -6.5">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="14;0"/></path>
                                                        <path stroke-dasharray="10" stroke-dashoffset="10" d="M2 12.5l7 1">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="10;0"/></path>
                                                        <path stroke-dasharray="8" stroke-dashoffset="8" d="M12 16l-3 3M9 13.5l0 5.5">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="8;0"/></path>
                                                    </g>
                                                </svg>
                                                @kadirovDevAdmin
                                            </a>
                                            <a href="https://www.instagram.com/kadirovdevadmin/" class="flex items-center gap-2 transition-all italic group hover:text-purple lg:text-xl">
                                                <svg class="size-6 text-dark group-hover:text-purple transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <circle cx="17" cy="7" r="1.5" fill="currentColor" fill-opacity="0">
                                                        <animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"/>
                                                    </circle>
                                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                        <path stroke-dasharray="72" stroke-dashoffset="72" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"/>
                                                        </path>
                                                        <path stroke-dasharray="28" stroke-dashoffset="28" d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4">
                                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0"/>
                                                        </path>
                                                    </g>
                                                </svg>
                                                @kadirovDevAdmin
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="p-5 bg-white shadow-md rounded flex flex-col gap-4">
                                    <label
                                        v-for="(course, index) of module.getModule.courses"
                                        :key="course.id"
                                        class="flex relative w-full justify-between items-start group transition-all rounded border border-lightGray/30 p-2.5 lg:p-4 cursor-pointer"
                                        :class="{
                                            'bg-purple text-white': isChecked(index, course.isActive),
                                            'bg-gray/20': isHovered(index),
                                            'opacity-50': !course.isActive,
                                            'text-red-500 bg-lightGray/20': !course.isActive
                                        }"
                                        @mouseenter="hoverIndex = index"
                                        @mouseleave="hoverIndex = null"
                                        @mousedown="toggleChecked(index)"
                                    >
                                        <div class="flex items-center gap-4">
                                            <input :disabled="!course.isActive" type="checkbox" class="invisible absolute" :checked="isChecked(index, course.isActive)" >
                                            <p class="lg:text-xl">{{ index + 1 }} - oy</p>
                                        </div>
                                        <div>
                                            <div class="border-b border-lightGray/40 w-52">Boshlanish oyi: {{ course.startMonth.name }}</div>
                                            <div class="border-b border-lightGray/40 w-52">Narxi: {{ course.price }}</div>
                                            <div class="border-b border-lightGray/40 w-52">
                                                <div v-if="showFreePlace(course.countOfStudents, course.members) < 0">Ushbu kursda joy qolmadi.</div>
                                                <div v-else>
                                                    <span class="text-[#0d6efd] font-gilroy-bold" :class="{'text-blue': isChecked(index, course.isActive)}">{{ course.countOfStudents }}</span>
                                                    ta joydan
                                                    <span class="font-gilroy-bold" :class="{'text-black': showFreePlace(course.countOfStudents, course.members) > 5, 'text-red-500': showFreePlace(course.countOfStudents, course.members) <= 5, }">{{ showFreePlace(course.countOfStudents, course.members) }}</span>
                                                    ta qoldi.
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                    <div v-if="totalSumCheckedCourses" class="w-full flex items-center gap-2 ">
                                        <p class="lg:text-xl">Jami: </p>
                                        <p class="text-xl lg:text-2xl font-gilroy-medium">{{ (totalSumCheckedCourses / 100).toLocaleString('en-US').replace(/,/g, ' ') }} <sub class="font-gilroy text-sm lg:text-base">uzs</sub></p>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <div class="w-full flex gap-5 flex-col mt-4 lg:mt-7 justify-center">
                        <KButton v-if="userStore.isAuthorized" class="text-white w-full lg:w-1/2 font-gilroy-semibold">To’lovni amalga oshirish</KButton>
                        <p v-if="isVisibleMessageOfAuthorizing && !userStore.isAuthorized" class="lg:text-xl">Kursga yozilish uchun avval <router-link :to="{ name: 'sign-in' }" class="text-purple font-gilroy-semibold">tizimga kiring</router-link> yoki <router-link :to="{ name: 'sign-up' }" class="text-purple font-gilroy-semibold">ro'yxatdan o'ting</router-link>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeadingFour from "@/components/UI/HeadingFour.vue";
import Paragraph from "@/components/UI/Paragraph.vue";
import { juniorSkills, middleSkills } from '@/constants/courses.js'
import Skill from "@/components/Skill.vue";
import {computed, onMounted, ref, watch} from "vue";
import KRadioButton from "@/components/UI/KRadioButton.vue";
import HeadingFive from "@/components/UI/HeadingFive.vue";
import {useRoute} from "vue-router";
import {useModule} from "@/stores/modules/temp/module.js";
import PaymentLoader from "@/components/loaders/PaymentLoader.vue";
import CoursesRadioButtonLoader from "@/components/loaders/CoursesRadioButtonLoader.vue";
import KButton from "@/components/UI/KButton.vue";
import {useUserStore} from "@/stores/modules/user.js";
import CourseRequirementInfoComponent from "@/components/CourseRequirementInfoComponent.vue";

const module = useModule()
const userStore = useUserStore()
const route = useRoute()
const isJuniorRoute = route.params.slug === 'junior-full-stack-web-developer'

const juniorCourse = {
    courseName: 'Junior Full Stack Developer Kursi',
    aboutText: 'Endi dasturlashni o’rgangan odam junior dasturchi bo’ladi. Bu “kichik” dasturchi degani. Junior dasturchining ko’p hollarda tajribasi bo’lmaydi, chunki ular endi boshlagan bo’lishadi. Bu kursimizda siz 12ta texnologiyalar orqali veb sayt yaratishni o’rganasiz. O’zingiz uchun portfolio yaratishni o’rganasiz. 5-6 oy davom etadigan bu kursimiz onlayn jonli tarzda bo’lib o’tadi.',
    skills: juniorSkills,
    filteredSkills: juniorSkills.filter(skill => skill.text !== '')
}

const middleCourse = {
    courseName: 'Middle Full Stack Developer Kursi',
    aboutText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet atque consequuntur cumque cupiditate deleniti dicta dolores error esse est, expedita facere fuga hic inventore ipsam itaque iure labore laudantium nesciunt perferendis quaerat quis saepe sunt tempora velit veritatis voluptates voluptatum! Cum ex, expedita impedit ipsum iste non nulla placeat.',
    skills: middleSkills,
    filteredSkills: middleSkills.filter(skill => skill.text !== '')
}

const course = computed(() => isJuniorRoute ? juniorCourse : middleCourse)
const coursePriceWithDiscount = computed(() => (module.getModule.courses?.reduce((acc, courseItem) => acc + courseItem?.price, 0) - (module.getModule.courses.reduce((acc, courseItem) => acc + courseItem?.price, 0) * (module.getModule.discountPercent / 100))) || module.getModule.courses.reduce((acc, courseItem) => acc + courseItem?.price, 0))
const moduleTeacherFullName = computed(() => module.getModule?.courses[0]?.teacher?.givenName + ' ' + module.getModule?.courses[0]?.teacher?.familyName)
const isVisibleMessageOfAuthorizing = computed(() => (module.getModule.courses.length === 1 && selectedPayment.value === 'fully') || module.getModule.courses.length > 1)

const selectedCourseId = ref()
const selectedPayment = ref('fully')

watch(selectedCourseId, () => {
    module.fetchModule(selectedCourseId.value)
})

const showFreePlace = (countOfStudents, members) => {
    if (members <= 0) return countOfStudents;

    const freePlace = countOfStudents - members;

    if (freePlace > 10) {
        const secondDigit = freePlace % 10;
        return secondDigit > 5 ? secondDigit - 5 : secondDigit;
    }

    return freePlace;
};

onMounted(async () => {
    await module.fetchModules({ isArchive: false, courseType: isJuniorRoute ? 'web-junior' : 'web-middle' })
    selectedCourseId.value = module.getModules.models[0]?.id
})


const hoverIndex = ref(null);
const checkedCourses = ref([]);
const allPricesCheckedCourses = computed(() => checkedCourses.value.map(checkedCourse => module.getModule.courses[checkedCourse].price));
const totalSumCheckedCourses = computed(() => allPricesCheckedCourses.value.length ? allPricesCheckedCourses.value.reduce((a, b) => a + b) : 0);

const clearCheckedCourses = () => {
    checkedCourses.value = []
}

const isHovered = index => {
    if (hoverIndex.value === null || checkedCourses.value.includes(index)) return false;

    for (let i = 0; i <= hoverIndex.value; i++) {
        if (i === index && module.getModule.courses[i].isActive) {
            return true;
        }
    }
    return false;
};

const isChecked = (index, isActive) => isActive ? checkedCourses.value.includes(index) : false

const toggleChecked = (index) => {
    if (checkedCourses.value.includes(index)) {
        checkedCourses.value = checkedCourses.value.filter(i => i !== index && i < index);
    } else {
        for (let i = 0; i <= index; i++) {
            if (module.getModule.courses[i].isActive && !checkedCourses.value.includes(i)) {
                checkedCourses.value.push(i);
            }
        }
    }
};

</script>

<style scoped>

</style>