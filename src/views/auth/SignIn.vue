<template>
    <AuthFrame>
        <form @submit.prevent="signIn" class="sm:col-span-4 sm:col-start-2 xl:col-span-2 xl:col-start-3 flex flex-col gap-4 lg:gap-7 w-full">
            <router-link :to="{ name: 'home' }" class="mb-4 lg:mb-8 w-fit mx-auto focus:ring-2 focus:ring-gray outline-none">
                <img class="h-10 lg:h-14" src="/logo-full.svg" alt="logo">
            </router-link>
            <HeadingFive class="text-center">Kirish</HeadingFive>
            <KInput
                v-model="form.email"
                size="normal"
                theme="light"
                label="Email"
                placeholder="Email..."
                no-animation
            />
            <KInput
                type="password"
                v-model="form.password"
                size="normal"
                theme="light"
                label="Parol"
                placeholder="Parol..."
                no-animation
            />
            <router-link :to="{ name: 'forgot-password' }" class="text-purple font-gilroy-semibold ml-auto -mt-2 lg:-mt-4 focus:ring-2 focus:ring-gray outline-none w-fit">Parolni unutdingizmi?</router-link>
            <KButton type="submit" class="rounded flex justify-center items-center" :isLoading :isDisabled>Kirish</KButton>
            <p>Agar hali ro'yxatdan o'tmagan bo'lsangiz, <router-link :to="{ name: 'sign-up' }" class="text-purple font-gilroy-semibold focus:ring-2 focus:ring-gray outline-none">ro'yxatdan o'ting</router-link>.</p>
        </form>
    </AuthFrame>
</template>

<script setup>
import KInput from "@/components/UI/KInput.vue";
import {computed, reactive, ref} from "vue";
import KButton from "@/components/UI/KButton.vue";
import HeadingFive from "@/components/UI/HeadingFive.vue";
import {useUserStore} from "@/stores/modules/user.js";
import {useRouter} from "vue-router";
import {useToast} from "vue-toastification";
import AuthFrame from "@/components/AuthFrame.vue";

const form = reactive({
    email: "",
    password: "",
})
const router = useRouter()
const userStore = useUserStore()
const isLoading = ref(false)
const isDisabled = computed(() => !(!!form.email && !!form.password))
const toast = useToast()
const err = ref()

const signIn = () => {
    isLoading.value = true
    userStore.fetchToken(form)
        .then(() => {
            router.push({ name: 'home'})
        })
        .catch((error) => {
            console.log(error)
            err.value = error
            toast.error('Email yoki parol noto\'g\'ri.')
        })
        .finally(() => isLoading.value = false)
}
</script>
