<template>
    <AuthFrame>
        <form @submit.prevent="signUp" class="sm:col-span-4 sm:col-start-2 xl:col-span-2 xl:col-start-3 flex flex-col gap-4 lg:gap-6 w-full mt-5 lg:mt-10">
            <router-link :to="{ name: 'home' }" class="mb-4 lg:mb-8 w-fit mx-auto focus:ring-2 focus:ring-gray outline-none">
                <img class="h-10 lg:h-14" src="/logo-full.svg" alt="logo">
            </router-link>
            <HeadingFive class="text-center">Ro’yhatdan o’tish</HeadingFive>
            <KInput
                v-model="givenName"
                :error-message="errors.givenName"
                size="normal"
                theme="light"
                label="Ism"
                placeholder="Ism..."
                required
                no-animation
            />
            <KInput
                v-model="familyName"
                :error-message="errors.familyName"
                size="normal"
                theme="light"
                label="Familiya"
                placeholder="Familiya..."
                required
                no-animation
            />
            <KInput
                v-model="phoneNumber"
                :error-message="errors.phoneNumber"
                size="normal"
                theme="light"
                label="Telefon raqam"
                placeholder="+998991234567"
                required
                no-animation
            />
            <KInput
                v-model="telegramNumber"
                :error-message="errors.telegramNumber"
                size="normal"
                theme="light"
                label="Telegram username"
                placeholder="Telegram username..."
                required
                no-animation
            />
            <KInput
                v-model="email"
                :error-message="errors.email"
                size="normal"
                theme="light"
                label="Email"
                placeholder="Email..."
                required
                no-animation
            />
            <KInput
                type="password"
                v-model="password"
                :error-message="errors.password"
                size="normal"
                label="Parol"
                theme="light"
                placeholder="Parol..."
                required
                no-animation
            />
            <KInput
                type="password"
                v-model="rePassword"
                :error-message="errors.rePassword"
                size="normal"
                label="Parolni takrorlang"
                theme="light"
                placeholder="Parolni takrorlang..."
                required
                no-animation
            />
            <label>
                <div class="flex gap-2 items-center w-fit">
                    <input v-model="publicOffer" type="checkbox" class="accent-purple size-4 -mt-1 focus:ring-2 focus:ring-gray outline-none">
                    <div class="w-full">
                        <router-link
                            :to="{ name: 'public-offer' }"
                            class="text-purple font-gilroy-semibold text-end focus:ring-2 focus:ring-gray outline-none"
                        >Ommaviy ofertani</router-link> qabul qilaman
                    </div>
                </div>

                <div v-if="errors.publicOffer" class="flex items-center gap-2 text-red-600 text-end w-full">
                    <ExclaminationIcon class="-mt-0.5"/>
                    {{ errors.publicOffer }}
                </div>
            </label>
            <KButton
                type="submit"
                class="rounded flex justify-center items-center"
                :isLoading
            >Kirish</KButton>
            <p class="mb-5 lg:mb-10">
                Agar allaqachon ro'yxatdan o'tgan bo'lsangiz, tizimga
                <router-link
                    :to="{ name: 'sign-in' }"
                    class="text-purple font-gilroy-semibold focus:ring-2 focus:ring-gray outline-none"
                >kiring</router-link>.
            </p>
        </form>
    </AuthFrame>
</template>

<script setup>
import AuthFrame from "@/components/AuthFrame.vue";
import KInput from "@/components/UI/KInput.vue";
import KButton from "@/components/UI/KButton.vue";
import HeadingFive from "@/components/UI/HeadingFive.vue";
import { ref } from "vue";
import { useUserStore } from "@/stores/modules/user.js";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { boolean, object, string } from "yup";
import { useField, useForm } from "vee-validate";
import ExclaminationIcon from "@/components/UI/ExclaminationIcon.vue";

const userStore = useUserStore()
const toast = useToast()
const router = useRouter()

const isLoading = ref(false)


// Validation
const schema = object({
    givenName: string().required('Qatorni to\'diring.').min(2, 'Kamida 2ta belgidan iborat bo\'lishi kerak.'),
    familyName: string().required('Qatorni to\'diring.').min(2, 'Kamida 2ta belgidan iborat bo\'lishi kerak.'),
    telegramNumber: string()
        .required('Qatorni to\'diring.')
        .min(5, 'Kamida 5ta belgidan iborat bo\'lishi kerak.')
        .test('is-valid-username', 'Username \'@\' belgisi bilan boshlanishi kerak', val => {
            return val.startsWith('@')
        }),
    email: string().required('Qatorni to\'diring.').email(),
    phoneNumber: string()
        .required('Qatorni to\'diring.')
        .test('is-valid-phone', 'Telefon raqam \'+\' belgisi bilan boshlanishi kerak va raqamlardan iborat bo\'lishi kerak', val => {
            return val.trim().match(/^\+\d+$/)
        })
    ,
    password: string().required('Qatorni to\'diring.').min(6, 'Kamida 6ta belgidan iborat bo\'lishi kerak.'),
    rePassword: string()
        .required('Qatorni to\'diring.')
        .test('equals-password', 'Parollaringiz bir-biri bilan to\'g\'ri kelishi kerak', val => {
            return password.value === val
        }),
    publicOffer: boolean().oneOf([true], 'Ommaviy offerta shartlariga rozi bo\'lishingiz kerak.').required()
})

const { handleSubmit, errors } = useForm({ validationSchema: schema, initialValues: { publicOffer: false } })

const signUp = handleSubmit(async (values) => {
    const newValues = {...values}
    delete newValues.publicOffer
    delete newValues.rePassword
    console.log(newValues);

    userStore.pushUser(newValues)
        .then(() => {
            userStore.fetchToken({ email: newValues.email, password: newValues.password })
                .then(() => router.push({ name: 'home' }))
        })
        .catch(() => {
            toast.error('Xatolik yuz berdi!')
        })
        .finally(() => isLoading.value = false)
})

const { value: givenName } = useField('givenName')
const { value: familyName } = useField('familyName')
const { value: telegramNumber } = useField('telegramNumber')
const { value: email } = useField('email')
const { value: phoneNumber } = useField('phoneNumber')
const { value: password } = useField('password')
const { value: rePassword } = useField('rePassword')
const { value: publicOffer } = useField('publicOffer')
</script>

<style scoped>

</style>