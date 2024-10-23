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
                            v-for="course of onlyNewModules"
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
<!--                        <li class="flex items-center gap-5 border-b border-[#D4D4D4] py-4 lg:py-7">-->
<!--                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <circle cx="11.9998" cy="11.9998" r="9.00375" fill="#80007F" fill-opacity="0.2"/>-->
<!--                                <path d="M8.44141 12.3387L10.6093 14.5066L10.5953 14.4926L15.4863 9.60156" stroke="#80007F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                            </svg>-->
<!--                            <p>Dushanba va payshanba kunlari</p>-->
<!--                        </li>-->
                        <li class="flex items-center gap-5 border-b border-[#D4D4D4] py-4 lg:py-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.9998" cy="11.9998" r="9.00375" fill="#80007F" fill-opacity="0.2"/>
                                <path d="M8.44141 12.3387L10.6093 14.5066L10.5953 14.4926L15.4863 9.60156" stroke="#80007F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Soat 20:00 dan 22:00 gacha</p>
                        </li>
                        <li v-if="module.getModule.courses.length < 2" class="flex items-center gap-5 border-b border-transparent py-4 lg:py-7">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.9998" cy="11.9998" r="9.00375" fill="#80007F" fill-opacity="0.2"/>
                                <path d="M8.44141 12.3387L10.6093 14.5066L10.5953 14.4926L15.4863 9.60156" stroke="#80007F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div>
                                <span
                                    class="font-gilroy-bold text-purple"
                                    :class="{
                                        'text-black': showFreePlace(module.getModule?.courses[0]?.countOfStudents, module.getModule?.courses[0]?.members) > 5,
                                        'text-red-500': showFreePlace(module.getModule?.courses[0]?.countOfStudents, module.getModule?.courses[0]?.members) <= 5,
                                    }"
                                >{{ showFreePlace(module.getModule?.courses[0]?.countOfStudents, module.getModule?.courses[0]?.members) }}</span>
                                ta qoldi.
                            </div>
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
                                <p v-if="module.getModule.discountPercent && canEnrollCourse.status" class="lg:text-xl text-green-700 col-span-2">Kursni summasini to'liq to'lov qilishda chegirma <span class="underline text-2xl">{{ module.getModule.discountPercent }}%</span></p>
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
                            </div>
                        </transition>
                    </div>
                    <div class="w-full flex gap-5 flex-col mt-4 lg:mt-7 justify-center">
                        <KButton v-if="userStore.isAuthorized" @click="bought" class="text-white w-full lg:w-1/2 font-gilroy-semibold">To’lovni amalga oshirish</KButton>
                        <p v-if="isVisibleMessageOfAuthorizing && !userStore.isAuthorized" class="lg:text-xl">Kursga yozilish uchun avval <router-link :to="{ name: 'sign-in' }" class="text-purple font-gilroy-semibold">tizimga kiring</router-link> yoki <router-link :to="{ name: 'sign-up' }" class="text-purple font-gilroy-semibold">ro'yxatdan o'ting</router-link>.</p>
                    </div>

                    <!-- Start Payme Form -->
                    <form :action="paymeUrl" class="hidden" method="POST">

                        <!-- Payme Cashbox ID  -->
                        <input :value="paymeLogin" name="merchant" type="hidden"/>

                        <!-- Cost with tiyin -->
                        <input :value="payme.amount" name="amount" type="hidden"/>

                        <!-- Payment data -->
                        <input :value="payme.transactionId" name="account[transactionId]" type="hidden"/>

                        <!-- === OPTIONAL DATA === -->
                        <!-- Language. By default 'ru'. Available options: ru|uz|en -->
                        <input name="lang" type="hidden" value="uz"/>

                        <!--
                            Currency. By default '860'. Available options: 643|840|860|978
                            643 - RUB
                            840 - USD
                            860 - UZS
                            978 - EUR
                        -->
                        <input name="currency" type="hidden" value="860"/>

                        <!--
                            URL to redirecting after payment. By default, payme redirects to URL of Referer header value.
                            URL may contain that will be replaced by Payme:
                            :transaction - id of transaction. Can be null if payme couldn't create transaction
                            :account.{field} - field of account object
                            For example: https://your-service.com/payme/:transaction
                        -->
                        <!--
                            <input type="hidden" name="callback" value="{{ REDIRECT_URL }}"/>
                        -->

                        <!-- Redirect timeout after successful payment in milliseconds  -->
                        <input name="callback_timeout" type="hidden" value="15"/>

                        <!--
                            Payment description. You can also specify descriptions in few
                            languages by using description object like name="description[{lang}]".
                            As {lang} you can use ru, en or uz
                        -->
                        <input :value="payme.description" name="description" type="hidden"/>

                        <!--
                            Details of payment. You can use JSON object encoded by BASE64.
                            For example:
                            {
                                "discount": {
                                     "title": "discount 5%",
                                     "price": 10000
                                },
                                "shipping": {
                                      "title": "Shipment to Termez 28/23",
                                      "price": 500000
                                },
                                "items": [
                                    {
                                        "title": "Tomato",
                                        "price": 505000,
                                        "count": 2
                                    }
                                ]
                            }
                         -->
                        <input :value="payme.detail" name="detail" type="hidden"/>

                        <button ref="paymeButton" type="submit">Pay with <b>Payme</b></button>
                    </form>
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
import {computed, onMounted, reactive, ref, watch} from "vue";
import KRadioButton from "@/components/UI/KRadioButton.vue";
import HeadingFive from "@/components/UI/HeadingFive.vue";
import {useRoute} from "vue-router";
import {useModule} from "@/stores/modules/temp/module.js";
import PaymentLoader from "@/components/loaders/PaymentLoader.vue";
import CoursesRadioButtonLoader from "@/components/loaders/CoursesRadioButtonLoader.vue";
import KButton from "@/components/UI/KButton.vue";
import {useUserStore} from "@/stores/modules/user.js";
import CourseRequirementInfoComponent from "@/components/CourseRequirementInfoComponent.vue";
import { useBoughtCourseStore } from "@/stores/modules/boughtCourse.js";

const module = useModule()
const userStore = useUserStore()
const boughtCourseStore = useBoughtCourseStore()
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
const paymeButton = ref(null)

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
    selectedCourseId.value = onlyNewModules.value[0].id
})


const onlyNewModules = computed(() => module.getModules.models.filter(moduleItem => moduleItem.courses.length < 2 && moduleItem.courses[0].isActive));
const canEnrollCourse = computed(() => {
    if (module.getModule.courses.length === 1 && !module.getModule.courses[0].isActive) {
        return { status: false, reason: 'Ushbu kursga yozilish to\'xtatilgan.' }
    }

    return { status: true }
});

// Payme
const payme = reactive({
    amount: 0,
    price: 0,
    transactionId: 0,
    description: 'Kompyuter texnologiyalari sohasida maslahat xizmatlari',
    detail: ''
})

const detailDto = reactive({
    items: [
        {
            count: 1,
            title: 'Kompyuter texnologiyalari sohasida maslahat xizmatlari',
            price: null,
            code: '10305013001000000',
            package_code: '1545643',
            vat_percent: 0
        }
    ],
})


const paymeUrl = import.meta.env.VITE_APP_PAYME_URL;
const paymeLogin = import.meta.env.VITE_APP_PAYME_LOGIN;
const boughtCourse = reactive({
    courses: []
})

const bought = () => {
    boughtCourseStore.pushBoughtCourse({
        courses: module.getModule.courses.map(item => item.id),
        promo: '',
        hasDiscount: true
    })
        .then(() => {
            console.log(boughtCourseStore.getBoughtCourses)
            payme.amount = 0
            boughtCourseStore.getBoughtCourses.forEach((boughtCourse) => {
                payme.amount += boughtCourse.price
            })
            payme.transactionId = boughtCourseStore.getBoughtCourses[0].paymeTransaction
            payme.description = 'Dasturchi maslahati uchun to\'lov'
            detailDto.items[0].price = payme.amount
            payme.detail = btoa(JSON.stringify(detailDto))
        })
        .then(() => {
            paymeButton.value.click()
        })
}
</script>
