<template>
    <section class="py-[50px] lg:pt-[100px] bg-[#F9FAFB]" ref="root">
        <div class="container">
            <div class="gap-4 lg:gap-5 text-center mb-16 animation-fade-in">
                <HeadingOne>O’quvchilarimizni kurs haqidagi fikri</HeadingOne>
                <HeadingTwo>Har bir kurs vaqtida o’quvchilar bajargan amaliyot ishlari</HeadingTwo>
                <div class="my-10"></div>
            </div>
        </div>
        <div>
            <div ref="emblaRef3" class="embla animation-fade-in pl-5">
                <div class="embla__container py-2">
                    <div v-for="comment of comments.models" v-if="comments.models.length" :key="comment"
                         class="ml-5 flex-none shadow-md flex flex-col items-start p-4 lg:p-6 gap-2.5 lg:gap-5 bg-white rounded-2xl lg:rounded-[20px] w-[256px] lg:w-[460px]">
                        <div class="gap-4 flex items-center">
                            <img v-if="comment.image" :src="baseUrl + comment?.image?.filePath" alt="avatar"
                                 class="size-10 lg:size-[88px] rounded-full object-cover object-center"/>
                            <div v-else class="size-10 lg:size-[88px] rounded-full object-cover object-center">
                                <svg class="text-lightGray size-full lg-size-[88px] flex-none" height="1em" viewBox="0 0 32 32" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5" fill="currentColor"/>
                                    <path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m7.993 22.926A5 5 0 0 0 19 20h-6a5 5 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0"
                                          fill="currentColor"/>
                                </svg>
                            </div>
                            <div class="flex flex-col lg:gap-2 items-start">
                                <p class="font-gilroy-semibold lg:text-[26px] text-dark">
                                    {{ `${comment.user.givenName} ${comment.user.familyName}` }}</p>
                                <p class="font-gilroy-medium text-xs lg:text-[22px] text-lightGray">Junior Developer</p>
                            </div>
                        </div>
                        <div class="text-start">
                            <p :class="{'line-clamp-6': comment.text.length > 222}" class="overflow-hidden  text-xs lg:text-[22px] font-medium text-dark leading-[21.36px] lg:leading-[39.16px]">
                                {{ comment.text }}
                            </p>
                            <button
                                @click="showComment(comment)"
                                v-if="comment.text.length > 222"
                                class="text-xs lg:text-[22px] font-medium text-purple leading-[21.36px] lg:leading-[39.16px]">
                                Batafsil
                            </button>
                        </div>
                        <div class="flex justify-end w-full items-center mt-auto gap-4">
                            <button class="hover:bg-purple active:bg-red-600 rounded-full transition-all py-1 px-2 group flex items-center gap-2 text-xl font-medium text-dark">
                                <span class="group-hover:text-white text-dark/50">{{ comment.likesCount }}</span>
                                <svg class="size-8 text-dark/50 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                                    <path fill="currentColor" d="M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11"/>
                                </svg>
<!--                            filled heart    -->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"/></svg>-->
                            </button>
                            <p class="text-xs lg:text-[22px] text-dark/50 text-center">{{ formatDate(comment.createdAt) }}</p>
                        </div>
                    </div>
                    <div
                        class="flex justify-center items-center ml-5"
                        v-if="comments.totalItems > comments.models.length"
                        v-intersection-observer="onIntersectionObserver"
                    >
                        <svg class="animate-spin size-10 text-purple" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M16 8a7.92 7.92 0 0 0-2.431-5.568A7.78 7.78 0 0 0 5.057.896c-.923.405-1.758.992-2.449 1.712S1.371 4.182 1.011 5.105a7.53 7.53 0 0 0 .115 5.742c.392.892.961 1.7 1.658 2.368S4.307 14.41 5.2 14.758a7.3 7.3 0 0 0 2.799.493a7.16 7.16 0 0 0 6.526-4.547a7 7 0 0 0 .415-1.622l.059.002a1 1 0 0 0 .996-1.083h.004zm-1.589 2.655c-.367.831-.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434a6.8 6.8 0 0 1-2.608.454a6.68 6.68 0 0 1-4.685-2.065a6.6 6.6 0 0 1-1.38-2.173a6.5 6.5 0 0 1 .116-4.976c.342-.77.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326a6.27 6.27 0 0 1 4.784.116c.74.329 1.41.805 1.963 1.387s.988 1.27 1.272 2.011a6 6 0 0 1 .397 2.32h.004a1 1 0 0 0 .888 1.077a7 7 0 0 1-.481 1.578z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="container flex-col justify-center mt-[30px] animation-fade-in">
            <div class="flex items-center w-full justify-center gap-[30px]">
                <button class="size-[50px]" @click="emblaApi3.scrollPrev()">
                    <svg fill="none" height="50" viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4163 25.0013L39.583 25.0013" stroke="#591958" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="3"/>
                        <path d="M20.833 14.5853L10.4163 25.002" stroke="#591958" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="3"/>
                        <path d="M20.833 35.418L10.4163 25.0013" stroke="#591958" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="3"/>
                    </svg>
                </button>
                <button class="size-[50px]" @click="emblaApi3.scrollNext()">
                    <svg fill="none" height="50" viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.5837 24.9987H10.417" stroke="#591958" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="3"/>
                        <path d="M29.167 35.4167L39.5837 25" stroke="#591958" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="3"/>
                        <path d="M29.167 14.582L39.5837 24.9987" stroke="#591958" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="3"/>
                    </svg>
                </button>
            </div>
        </div>
        <div
            v-if="isOpenCommentModal"
            @click.self="isOpenCommentModal = false"
            class="fixed inset-0 bg-dark/80 z-50 p-4 lg:px-36 lg:py-20 xl:px-72 flex justify-center items-center "
        >
            <div class="bg-white p-5 lg:p-10 h-full flex flex-col w-full max-h-fit rounded-lg overflow-x-hidden overflow-y-auto">
                <div class="gap-4 flex items-center pb-5">
                    <img v-if="selectedComment.image" :src="baseUrl + selectedComment?.image?.filePath" alt="avatar"
                         class="size-28 lg:size-52 rounded object-cover object-center"/>
                    <div v-else class="size-10 lg:size-[88px] rounded-full object-cover object-center">
                        <svg class="text-lightGray size-full lg-size-[88px] flex-none" height="1em" viewBox="0 0 32 32" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5" fill="currentColor"/>
                            <path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m7.993 22.926A5 5 0 0 0 19 20h-6a5 5 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0"
                                  fill="currentColor"/>
                        </svg>
                    </div>
                    <div class="flex flex-col lg:gap-2 mb-auto">
                        <p class="font-gilroy-semibold text-3xl lg:text-5xl text-dark">
                            {{ `${selectedComment.user.givenName} ${selectedComment.user.familyName}` }}</p>
                        <p class="font-gilroy-medium text-lg lg:text-4xl text-lightGray">Junior Developer</p>
                    </div>
                </div>
                <div class="text-start mb-4">
                    <p class="text-base lg:text-[22px] break-words font-medium text-dark leading-[21.36px] lg:leading-[39.16px]">
                        {{ selectedComment.text }}
                    </p>
                </div>
                <div class="flex justify-end w-full items-center gap-4 mt-auto">
                    <button class="hover:bg-purple active:bg-red-600 rounded-full transition-all py-1 px-2.5 group flex items-center justify-center gap-2 text-xl font-medium text-dark">
                        <p class="group-hover:text-white text-sm lg:text-2xl text-dark/50">{{ selectedComment.likesCount }}</p>
                        <svg class="size-6 lg:size-8 text-dark/50 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                            <path fill="currentColor" d="M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11"/>
                        </svg>
                        <!--                            filled heart    -->
                        <!--                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"/></svg>-->
                    </button>
                    <p class="text-xs lg:text-[22px] text-dark/50 text-center">{{ formatDate(selectedComment.createdAt) }}</p>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import HeadingOne from "@/components/UI/HeadingOne.vue";
import HeadingTwo from "@/components/UI/HeadingTwo.vue";
import emblaCarouselVue from "embla-carousel-vue";
import Autoplay from "embla-carousel-autoplay";
import {computed, ref, watch} from "vue";
import { vIntersectionObserver } from '@vueuse/components'
import {formatDate} from "@/helpers/formatData.js";

defineProps({
    comments: {
        type: Object,
        required: true,
    }
})

const emit = defineEmits(['onIntersecting'])

const root = ref(null)

const isVisible = ref(false)
function onIntersectionObserver([{ isIntersecting }]) {
    isVisible.value = isIntersecting
}

const [emblaRef3, emblaApi3] = emblaCarouselVue(
    {align: "start", loop: true},
    [Autoplay()]
)

const baseUrl = computed(() => import.meta.env.VITE_APP_API_URL + '/media/')

const isOpenCommentModal = ref(false)
const selectedComment = ref({})

const showComment = comment => {
    isOpenCommentModal.value = true
    selectedComment.value = comment
    console.log(comment)
}

watch(
    () => isVisible.value,
    (newVal) => {
        if (newVal) {
            emit('onIntersecting')
        }
    }
)

watch(
    () => isOpenCommentModal.value,
    (newVal) => {
        document.body.style.overflow = newVal ? 'hidden': 'auto'
    }
)
</script>

<style scoped>
</style>