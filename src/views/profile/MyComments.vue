<template>
    <h3 class="text-2xl lg:text-3xl text-dark font-gilroy-semibold mb-4">Mening izohlarim</h3>
    <div v-if="commentStore.getMyComments.models.length && !isLoading" class="hidden lg:block p-5 rounded w-full bg-white shadow-md">
        <div class="rounded overflow-hidden w-full overflow-x-auto">
            <table class="table-auto w-full border-collapse">
                <thead class="border border-gray bg-gray">
                    <tr class="text-white lg:text-lg font-gilroy-semibold">
                        <th class="text-start py-4 px-5 border-b border-lightGray">#</th>
                        <th class="text-start py-4 px-5 border-b border-lightGray">Izoh</th>
                        <th class="text-start py-4 px-5 border-b border-lightGray">Holati</th>
                        <th v-if="hasIsNotApproved" class="text-start py-4 px-5 border-b border-lightGray">Boshqaruv</th>
                    </tr>
                </thead>
                <tbody class="border border-loaderGray">
                <tr
                    v-if="commentStore.getMyComments.models.length && !isLoading"
                    v-for="(myComment, index) of commentStore.getMyComments.models"
                    :key="myComment.id"
                    class="border-b border-loaderGray text-dark lg:text-lg font-gilroy-semibold"
                >
                    <td class="py-4 px-6 align-top">
                        <div>{{ index + 1 }}</div>
                    </td>
                    <td class="py-4 px-5">
                        <button @click="toggleClamp(index)" class="text-wrap text-start outline-gray" :class="{'line-clamp-5' : !expandedComments[index]}">
                            {{ myComment.text}}
                        </button>
                    </td>
                    <td class="py-4 px-6 align-top">
                        <div v-if="myComment.isApprove">
                            <svg class="size-8 text-teal-600" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <g fill="none">
                                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m3.535 6.381l-4.95 4.95l-2.12-2.121a1 1 0 0 0-1.415 1.414l2.758 2.758a1.1 1.1 0 0 0 1.556 0l5.586-5.586a1 1 0 0 0-1.415-1.415"/>
                                </g>
                            </svg>
                        </div>
                        <div v-else>
                            <svg class="size-8 text-orange-400" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M12 6a1 1 0 0 0-.993.883L11 7v5l.009.131a1 1 0 0 0 .197.477l.087.1l3 3l.094.082a1 1 0 0 0 1.226 0l.094-.083l.083-.094a1 1 0 0 0 0-1.226l-.083-.094L13 11.585V7l-.007-.117A1 1 0 0 0 12 6"/>
                            </svg>
                        </div>
                    </td>
                    <td v-if="hasIsNotApproved" class="py-4 px-5 align-top">
                        <div v-if="!myComment.isApprove" class="flex gap-4 p-0.5">
                            <button @click="openEditPopup(myComment.id)" class="size-7 flex justify-center items-center rounded-full bg-purple group hover:bg-white transition-all">
                                <svg class="size-4 text-white group-hover:text-purple transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36">
                                    <path fill="currentColor" d="m4.22 23.2l-1.9 8.2a2.06 2.06 0 0 0 2 2.5a2 2 0 0 0 .43 0L13 32l15.84-15.78L20 7.4Z" class="clr-i-solid clr-i-solid-path-1"/>
                                    <path fill="currentColor" d="m33.82 8.32l-5.9-5.9a2.07 2.07 0 0 0-2.92 0L21.72 5.7l8.83 8.83l3.28-3.28a2.07 2.07 0 0 0-.01-2.93" class="clr-i-solid clr-i-solid-path-2"/>
                                    <path fill="none" d="M0 0h36v36H0z"/>
                                </svg>
                            </button>
                            <button @click="openDeletePopup(myComment.id)" class="size-7 flex justify-center items-center rounded-full bg-red-600 group hover:bg-white transition-all">
                                <svg class="size-5 text-white group-hover:text-red-600 transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    </div>
    <div v-if="isLoading" class="hidden lg:block p-5 rounded w-full bg-white shadow-md">
        <div class="border border-loaderGray rounded overflow-hidden w-full overflow-x-auto">
            <MyCommentsTableLoader/>
        </div>
    </div>
    <div class="lg:hidden flex flex-col gap-5">
        <MyCommentsCardLoader
            v-for="item of [1,2,3]"
            :key="item"
            v-if="isLoading"
        />
        <div
            v-if="commentStore.getMyComments.models.length && !isLoading"
            v-for="(myComment, index) of commentStore.getMyComments.models"
            :key="myComment.id"
            class="rounded bg-white shadow-md sm:text-lg overflow-hidden"
        >
            <div class="w-full flex items-center justify-between border-lightGray border-b py-4 bg-gray text-white px-5 gap-2">
                <p>{{ index + 1 }}</p>
                <div v-if="!myComment.isApprove" class="flex gap-4 p-0.5">
                    <button @click="openEditPopup(myComment.id)" class="size-7 flex justify-center items-center rounded-full bg-purple group hover:bg-white transition-all">
                        <svg class="size-4 text-white group-hover:text-purple transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36">
                            <path fill="currentColor" d="m4.22 23.2l-1.9 8.2a2.06 2.06 0 0 0 2 2.5a2 2 0 0 0 .43 0L13 32l15.84-15.78L20 7.4Z" class="clr-i-solid clr-i-solid-path-1"/>
                            <path fill="currentColor" d="m33.82 8.32l-5.9-5.9a2.07 2.07 0 0 0-2.92 0L21.72 5.7l8.83 8.83l3.28-3.28a2.07 2.07 0 0 0-.01-2.93" class="clr-i-solid clr-i-solid-path-2"/>
                            <path fill="none" d="M0 0h36v36H0z"/>
                        </svg>
                    </button>
                    <button @click="openDeletePopup(myComment.id)" class="size-7 flex justify-center items-center rounded-full bg-red-600 group hover:bg-white transition-all">
                        <svg class="size-5 text-white group-hover:text-red-600 transition-all" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="w-full flex items-center justify-between border-lightGray border-b py-4 px-5 gap-2">
                <p>Holati:</p>
                <div>
                    <div v-if="myComment.isApprove">
                        <svg class="size-8 text-teal-600" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <g fill="none">
                                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m3.535 6.381l-4.95 4.95l-2.12-2.121a1 1 0 0 0-1.415 1.414l2.758 2.758a1.1 1.1 0 0 0 1.556 0l5.586-5.586a1 1 0 0 0-1.415-1.415"/>
                            </g>
                        </svg>
                    </div>
                    <div v-else>
                        <svg class="size-8 text-orange-400" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M12 6a1 1 0 0 0-.993.883L11 7v5l.009.131a1 1 0 0 0 .197.477l.087.1l3 3l.094.082a1 1 0 0 0 1.226 0l.094-.083l.083-.094a1 1 0 0 0 0-1.226l-.083-.094L13 11.585V7l-.007-.117A1 1 0 0 0 12 6"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="w-full flex items-center justify-between border-lightGray border-b py-4 px-5 gap-2">
                <p class="mb-auto">Izoh: </p>
                <button @click="toggleClamp(index)" class="text-right outline-gray" :class="{'line-clamp-6' : !expandedComments[index]}">{{ myComment.text }}</button>
            </div>
        </div>
    </div>

    <div v-if="!commentStore.getMyComments.models.length && !isLoading" class="h-full flex justify-center items-center">
        <HeadingTwo class="text-center mt-10 text-lg font-gilroy-semibold text-dark/70">Hech nima topilmadi(</HeadingTwo>
    </div>
    <ConfirmPopup
        :is-loading="isLoadingForDelete"
        :show="isVisibleDeletePopup"
        @on-cancel="() => isVisibleDeletePopup = false"
        @on-confirm="deleteComment"
    >
        <p class="mb-5">Siz rostdan ham ushbu izohni o’chirmoqchimisiz?</p>
    </ConfirmPopup>
    <ConfirmPopup
        :is-loading="isLoadingForEdit"
        :show="isVisibleEditPopup"
        @on-cancel="() => isVisibleEditPopup = false"
        @on-confirm="updateComment"
        title="O’zgartirish"
    >
        <KTextarea class="mb-5" :rows="8" placeholder="Izohni o'zgartirish" size="normal" label="Izohni o'zgartirish" theme="light" v-model="text"/>
    </ConfirmPopup>
</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {getUserData} from "@/helpers/getUserDataFromToken.js";
import MyCommentsTableLoader from "@/components/loaders/MyCommentsTableLoader.vue";
import MyCommentsCardLoader from "@/components/loaders/MyCommentsCardLoader.vue";
import HeadingTwo from "@/components/UI/HeadingTwo.vue";
import {useCommentStore} from "@/stores/modules/comment.js";
import ConfirmPopup from "@/components/ConfirmPopup.vue";
import KTextarea from "@/components/UI/KTextarea.vue";
import {useToast} from "vue-toastification";

const commentStore = useCommentStore()
const toast = useToast()
const isLoading = ref(false)
const isVisibleDeletePopup = ref(false)
const selectedCommentId = ref(null)
const isLoadingForDelete = ref(false)
const isLoadingForEdit = ref(false)
const isVisibleEditPopup = ref(false)
const expandedComments = ref(commentStore.getMyComments.models.map(() => false));
const hasIsNotApproved = computed(() => commentStore.getMyComments.models.some(comment => !comment.isApprove));
const text = ref('')

const toggleClamp = (index) => {
    expandedComments.value[index] = !expandedComments.value[index];
};

const openDeletePopup = (id) => {
    isVisibleDeletePopup.value = true
    selectedCommentId.value = id
}

const deleteComment = () => {
    isLoadingForDelete.value = true
    commentStore.deleteComment(selectedCommentId.value)
        .then(async () => {
            const userData = await getUserData()
            await commentStore.fetchMyComments(userData.id)
            selectedCommentId.value = null
            toast.success('Izohingiz o\'chirildi.')
        })
        .catch(() => {
            toast.error('Izohni o\'chirishda xatolik yuz berdi.')
        })
        .finally(() => {
            isLoadingForDelete.value = false
            isVisibleDeletePopup.value = false
        })
}

const openEditPopup = (id) => {
    isVisibleEditPopup.value = true
    selectedCommentId.value = id
    const comment = commentStore.getMyComments.models.find(comment => comment.id === id)
    text.value = comment.text
}

const updateComment = () => {
    isLoadingForEdit.value = true
    commentStore.updateComment(selectedCommentId.value, { text: text.value })
        .then(async () => {
            const userData = await getUserData()
            await commentStore.fetchMyComments(userData.id)
            selectedCommentId.value = null
            toast.success('Izohingiz o\'zgartirildi.')
        })
        .catch(() => {
            toast.error('Izohni o\'zgartirishda xatolik yuz berdi.')
        })
        .finally(() => {
            isVisibleEditPopup.value = false
            isLoadingForEdit.value = false
        })
}

watch(
    [() => isVisibleEditPopup.value, () => isVisibleDeletePopup.value],
    (newVal) => {
        if(newVal.some(val => val)) {
            document.body.style.overflow = 'hidden'
            document.body.style.scrollbarGutter = 'stable'
        } else {
            document.body.style.overflow =  'auto'
            document.body.style.scrollbarGutter = 'auto'
        }
    }
)

onMounted(async () => {
    isLoading.value = true
    const userData = await getUserData()
    await commentStore.fetchMyComments(userData.id)
        .finally(() => isLoading.value = false)
})
</script>
