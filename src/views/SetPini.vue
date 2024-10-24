<template>
    <AuthFrame>
        <div class="sm:col-span-6 flex flex-col md:flex-row gap-14 items-center w-full">
            <div class="w-7/12 select-none hidden md:block p-4 bg-white rounded shadow-lg">
                <img src="/jshshir.jpg" alt="JSHSHIR rasmi" class="w-full">
            </div>
            <form @submit.prevent="setPini" class="py-6 flex flex-col gap-4 lg:gap-7 lg:w-5/12">
                <router-link :to="{ name: 'home' }" class="mb-4 lg:mb-8 w-fit mx-auto focus:ring-2 focus:ring-gray outline-none">
                    <img class="h-10 lg:h-14" src="/logo-full.svg" alt="logo">
                </router-link>
                <HeadingFive class="text-center">JSHSHIR'ni kiritish</HeadingFive>
                <div class="select-none md:hidden p-4 bg-white rounded shadow-md w-full">
                    <img src="/jshshir.jpg" alt="JSHSHIR rasmi" class="select-none md:hidden block w-full">
                </div>
                <KInput
                    type="text"
                    v-model="pini"
                    size="normal"
                    theme="light"
                    label="JSHSHIR"
                    placeholder="JSHSHIR'ni kiriting..."
                    no-animation
                    :error-message="errors.pini"
                />
                <KButton type="submit" class="rounded flex justify-center items-center" :isLoading :isDisabled>Kiritish</KButton>
            </form>
        </div>
    </AuthFrame>
</template>

<script setup>
import KInput from "@/components/UI/KInput.vue";
import KButton from "@/components/UI/KButton.vue";
import AuthFrame from "@/components/AuthFrame.vue";
import HeadingFive from "@/components/UI/HeadingFive.vue";
import {useField, useForm} from "vee-validate";
import {object, string} from "yup";
import {useRouter} from "vue-router";
import {computed, ref} from "vue";
import {useToast} from "vue-toastification";
import {useUserStore} from "@/stores/modules/user.js";
import {getUserData} from "@/helpers/getUserDataFromToken.js";

const router = useRouter()
const isLoading = ref(false)
const toast = useToast()
const userStore = useUserStore()
const isDisabled = computed(() => !pini.value)

// Validation
const schema = object({
    pini: string()
        .required('Qatorni to\'diring.')
        .test('is-valid-pini', 'JSHSHIR faqat raqamlardan iborat bo\'lishi kerak', val => {
            return val.trim().match(/^\d+$/)
        })
        .length(14, 'JSHSHIR 14ta belgidan iborat bo\'lishi kerak.')
})

const { handleSubmit, errors } = useForm({ validationSchema: schema })

const setPini = handleSubmit(async (values) => {
    const userData = await getUserData()

    isLoading.value = true
    userStore.setPini(userData.id, values)
        .then(() => {
            toast.success('JSHSHIR raqami muvaffaqiyatli kiritildi!')
            router.back()
        })
        .catch(() => {
            toast.error('Xatolik yuz berdi!')
        })
        .finally(() => isLoading.value = false)
})

const { value: pini } = useField('pini')
</script>
