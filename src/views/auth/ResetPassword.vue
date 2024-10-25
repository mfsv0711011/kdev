<template>
    <AuthFrame>
        <form v-if="hasAccess" @submit.prevent="resetPassword" class="sm:col-span-4 sm:col-start-2 xl:col-span-2 xl:col-start-3 flex flex-col gap-4 lg:gap-7 w-full">
            <router-link :to="{ name: 'home' }" class="mb-4 lg:mb-8 w-fit mx-auto outline-gray">
                <img class="h-10 lg:h-14" src="/logo-full.svg" alt="logo">
            </router-link>
            <HeadingFive class="text-center">Parolni tiklash</HeadingFive>
            <KInput
                type="password"
                v-model="password"
                size="normal"
                theme="light"
                label="Yangi parol"
                placeholder="Yangi parolni kiriting..."
                no-animation
                :error-message="errors.password"
            />
            <KButton type="submit" class="rounded flex justify-center items-center" :isLoading :isDisabled>Kirish</KButton>
        </form>
        <div v-else class="sm:col-span-4 sm:col-start-2 xl:col-span-4 xl:col-start-2 flex flex-col gap-4 lg:gap-7 w-full">
            <router-link :to="{ name: 'home' }" class="mb-4 lg:mb-8 w-fit mx-auto focus:ring-2 focus:ring-gray outline-none">
                <img class="h-10 lg:h-14" src="/logo-full.svg" alt="logo">
            </router-link>
            <p class="text-lg text-center">Havolani amal qilish muddati tugagan. <router-link :to="{ name: 'forgot-password' }" class="text-purple">Qayta urinib ko'ring</router-link>.</p>
        </div>
    </AuthFrame>
</template>

<script setup>
import KInput from "@/components/UI/KInput.vue";
import KButton from "@/components/UI/KButton.vue";
import AuthFrame from "@/components/AuthFrame.vue";
import HeadingFive from "@/components/UI/HeadingFive.vue";
import {computed, onMounted, ref} from "vue";
import {useUserStore} from "@/stores/modules/user.js";
import {useToast} from "vue-toastification";
import { object, string } from "yup";
import { useField, useForm } from "vee-validate";
import {useRouter} from "vue-router";

const props = defineProps({
    resetToken: {
        type: String,
        required: true
    }
})

const userStore = useUserStore()
const toast = useToast()
const router = useRouter()
const isLoading = ref(false)
const hasAccess = ref(true)
const isDisabled = computed(() => password.value === undefined ? true : password.value.length < 6 )

// Validation
const schema = object({
    password: string().required('Qatorni to\'diring.').min(6, 'Kamida 6ta belgidan iborat bo\'lishi kerak.'),
})

const { handleSubmit, errors } = useForm({ validationSchema: schema })

const resetPassword = handleSubmit(async (values) => {
    isLoading.value = true
    userStore.resetPassword({
        newPassword: password.value,
        resetToken: props.resetToken,
    })
        .then(() => {
            toast.success('Parolingiz muvaffaqiyatli o\'zgartirildi')
            router.push({ name: 'sign-in' })
        })
        .catch(() => {
            toast.error('Xatolik yuz berdi!')
        })
        .finally(() => isLoading.value = false)
})

const { value: password } = useField('password')

onMounted(() => {
    userStore.checkResetToken({ refreshToken: props.resetToken })
        .then((res) => {
            console.log(res)
            hasAccess.value = res.data.isAvailable
        })
})
</script>

<style scoped>

</style>