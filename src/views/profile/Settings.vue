<template>
    <div class="h-full">
        <h3 class="text-2xl lg:text-3xl text-dark font-gilroy-semibold mb-4">Sozlamalar</h3>
        <SettingsLoader v-if="isLoading"/>
        <form v-if="userStore.getUser.id && !isLoading" @submit.prevent="save" class="p-5 rounded w-full bg-white shadow-md grid grid-cols-12 justify-between gap-5">
            <div class="col-span-12">
                <KInput v-model="form.givenName" theme="light" placeholder="Ism" no-animation size="normal" label="Ism"/>
            </div>
            <div class="col-span-12">
                <KInput v-model="form.familyName" theme="light" placeholder="Familiya" no-animation size="normal" label="Familiya"/>
            </div>
            <div class="col-span-12">
                <KInput v-model="form.email" theme="light" placeholder="Email" no-animation size="normal" label="Email"/>
            </div>
            <div class="col-span-12">
                <KInput v-model="form.phoneNumber" theme="light" placeholder="Telefont raqam" no-animation size="normal" label="Telefon raqam"/>
            </div>
            <div class="col-span-12">
                <KInput v-model="form.telegramNumber" theme="light" placeholder="Telegram username" no-animation size="normal" label="Telegram username"/>
            </div>
            <div class="col-span-12 flex justify-end">
                <KButton :is-disabled="!isEdited" type="submit" class="px-5 font-gilroy-semibold text-lg">Saqlash</KButton>
            </div>
        </form>
        <div v-if="!userStore.getUser.id && !isLoading" class="h-full flex justify-center items-center">
            <HeadingTwo class="text-center mt-10 text-lg font-gilroy-semibold text-dark/70">Hech nima topilmadi(</HeadingTwo>
        </div>
    </div>
</template>

<script setup>
import KInput from "@/components/UI/KInput.vue";
import KButton from "@/components/UI/KButton.vue";
import {computed, onMounted, reactive, ref} from "vue";
import {useUserStore} from "@/stores/modules/user.js";
import {getUserData} from "@/helpers/getUserDataFromToken.js";
import {useToast} from "vue-toastification";
import SettingsLoader from "@/components/loaders/SettingsLoader.vue";
import HeadingTwo from "@/components/UI/HeadingTwo.vue";
import {useRouter} from "vue-router";

const userStore = useUserStore()
const isLoading = ref(false)
const form = reactive({
    givenName: '',
    familyName: '',
    email: '',
    phoneNumber: '',
    telegramNumber: '',
})

const router = useRouter()

const isEdited = computed(() => {
    return form.givenName !== userStore.getUser.givenName ||
        form.familyName !== userStore.getUser.familyName ||
        form.email !== userStore.getUser.email ||
        form.phoneNumber !== userStore.getUser.phoneNumber ||
        form.telegramNumber !== userStore.getUser.telegramNumber
})

const toast = useToast()

const save = async () => {
    const userData = await getUserData()
    await userStore.putUser(form, userData.id)
        .then(() => {
            toast.success('Ma\'lumotlar saqlandi!')
            userStore.fetchAboutMe().
                catch(() => {
                    router.replace({ name: 'sign-in' })
            })
        })
        .catch(() => {
            toast.error('Xatolik yuz berdi!')
        })
}

onMounted(async () => {
    try {
        isLoading.value = true
        await userStore.fetchAboutMe()
    } catch (err) {
        await userStore.refreshToken(userStore.getRefreshToken)
        await userStore.fetchAboutMe()
    } finally {
        isLoading.value = false
    }
    form.givenName = userStore.getUser.givenName
    form.familyName = userStore.getUser.familyName
    form.email = userStore.getUser.email
    form.phoneNumber = userStore.getUser.phoneNumber
    form.telegramNumber = userStore.getUser.telegramNumber
})
</script>

<style scoped>

</style>