<template>
    <AuthFrame>
        <form v-if="!isSendded" @submit.prevent="sendEmail" class="sm:col-span-4 sm:col-start-2 xl:col-span-2 xl:col-start-3 flex flex-col gap-4 lg:gap-7 w-full">
            <router-link :to="{ name: 'home' }" class="mb-4 lg:mb-8 w-fit mx-auto outline-gray">
                <img class="h-10 lg:h-14" src="/logo-full.svg" alt="logo">
            </router-link>
            <HeadingFive class="text-center">Parolni tiklash</HeadingFive>
            <KInput
                v-model="email"
                size="normal"
                theme="light"
                label="Avval ro'yxatdan o'tgan Elektron pochta manzilingizni kiriting."
                placeholder="Email kiriting..."
                no-animation
            />
            <KButton type="submit" class="rounded flex justify-center items-center" :isLoading :isDisabled>Kirish</KButton>
        </form>
        <div v-else class="sm:col-span-4 sm:col-start-2 xl:col-span-4 xl:col-start-2 flex flex-col gap-4 lg:gap-7 w-full">
            <router-link :to="{ name: 'home' }" class="mb-4 lg:mb-8 w-fit mx-auto focus:ring-2 focus:ring-gray outline-none">
                <img class="h-10 lg:h-14" src="/logo-full.svg" alt="logo">
            </router-link>
            <p v-if="!isAlreadySendded" class="text-lg text-center">Parolni tiklash uchun havola elektron pochtangizga yuborildi. Havolani amal qilish muddati 1 soat. Agar sizga xat bormagan bo'lsa, spam papkasini tekshiring yoki <button @click="sendEmail" class="text-purple">qayta urining</button>.</p>
            <p v-else class="text-lg text-center">Parol allaqachon jo'natilgan iltimos pochtangizni tekshiring yoki <router-link :to="{ name: 'sign-in' }" class="text-purple">kirishga</router-link> urinib ko'ring.</p>
        </div>
    </AuthFrame>
</template>

<script setup>
import KInput from "@/components/UI/KInput.vue";
import KButton from "@/components/UI/KButton.vue";
import AuthFrame from "@/components/AuthFrame.vue";
import HeadingFive from "@/components/UI/HeadingFive.vue";
import {computed, ref} from "vue";
import {useUserStore} from "@/stores/modules/user.js";
import {useToast} from "vue-toastification";
import {useRouter} from "vue-router";

const email = ref('')
const userStore = useUserStore()
const toast = useToast()
const router = useRouter()
const isLoading = ref(false)
const isSendded = ref(false)
const isAlreadySendded = ref(false)
const isDisabled = computed(() => !email.value)

const sendEmail = () => {
    isLoading.value = true
    userStore.sendRequestForResetPassword({ email: email.value })
        .then((res) => {
            isSendded.value = true
            if(res.status === 208) isAlreadySendded.value = true
        })
        .catch((err) => {
            console.log(err)
            toast.error('Xatolik yuz berdi!')
        })
        .finally(() => isLoading.value = false)
}

</script>

<style scoped>

</style>