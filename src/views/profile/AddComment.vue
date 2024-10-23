<template>
    <div>
        <h3 class="text-2xl lg:text-3xl text-dark font-gilroy-semibold mb-4">Izoh qoldirish</h3>
        <AddCommentLoader v-if="isLoading"/>
        <div v-if="userStore.getMyCourses.models.length && !isLoading" class="p-5 rounded w-full bg-white shadow-md grid grid-cols-12 justify-between gap-5">
            <div class="col-span-12 lg:col-span-7">
                <KSelect v-model="form.course" :list="userStore.getMyCourses.models"/>
            </div>
            <div class="col-span-12 lg:col-span-5">
                <KFileInput ref="fileComponent" @change-file="setImage"/>
            </div>
            <div class="w-full col-span-12">
                <KTextarea v-model="form.text" theme="light" :rows="8" placeholder="Izohingizni yozing..." size="normal"/>
            </div>
            <div class="col-span-12 flex justify-end -mt-2">
                <KButton :is-loading="isLoadingForSend" @click="sendComment" class="px-5 font-gilroy-semibold text-lg">Jo'natish</KButton>
            </div>
        </div>
    </div>
    <div v-if="!userStore.getMyCourses.models.length && !isLoading" class="h-full flex justify-center items-center">
        <HeadingTwo class="text-center mt-10 text-lg font-gilroy-semibold text-dark/70">Hech nima topilmadi(</HeadingTwo>
    </div>
</template>

<script setup>
import { useUserStore } from "@/stores/modules/user.js";
import { onMounted, ref } from "vue";
import KSelect from "@/components/UI/KSelect.vue";
import KFileInput from "@/components/UI/KFileInput.vue";
import KTextarea from "@/components/UI/KTextarea.vue";
import KButton from "@/components/UI/KButton.vue";
import AddCommentLoader from "@/components/loaders/AddCommentLoader.vue";
import HeadingTwo from "@/components/UI/HeadingTwo.vue";
import {useMediaObjectStore} from "@/stores/modules/mediaObject.js";
import {useCommentStore} from "@/stores/modules/comment.js";
import {useToast} from "vue-toastification";

const userStore = useUserStore();
const mediaObjectStore = useMediaObjectStore();
const commentStore = useCommentStore();
const toast = useToast()

const form = ref({
    course: '',
    text: '',
});

const isLoading = ref(false);
const isLoadingForSend = ref(false);
const image = ref();
const fileComponent = ref(null);

const setImage = img => image.value = img;

const sendComment = async () => {
    isLoadingForSend.value = true
    if (image.value) {
        const formData = new FormData();
        formData.append("file", image.value);

        await mediaObjectStore.pushMediaObject(formData)
            .then(res => {
                form.value.image = res.data['@id'];
            })
    }
    await commentStore.pushComment(form.value)
        .then(() => {
            form.value.course = ''
            form.value.text = ''
            fileComponent.value.clear()
            toast.success('Izohingiz muvoffaqiyatli yuborildi!')
        })
        .finally(() => {
            isLoadingForSend.value = false
        })
}

onMounted(async () => {
    isLoading.value = true;
    await userStore.fetchMyCourses()
        .finally(() => isLoading.value = false)
})
</script>
