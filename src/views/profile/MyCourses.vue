<template>
    <div>
        <h3 class="text-2xl lg:text-3xl text-dark font-gilroy-semibold mb-4">Mening kurslarim</h3>
        <div v-if="userStore.getMyCourses.models.length && !isLoading" class="hidden lg:block p-5 rounded w-full bg-white shadow-md">
            <div class="border border-loaderGray rounded overflow-hidden w-full overflow-x-auto">
                <table class="table-auto w-full">
                    <thead>
                    <tr class="text-dark lg:text-lg font-gilroy-semibold">
                        <th class="text-start py-4 px-6 border-b border-lightGray">#</th>
                        <th class="text-start py-4 px-5 border-b border-lightGray">Nomi</th>
                        <th class="text-start py-4 px-5 border-b border-lightGray">Boshlanish vaqti</th>
                        <th class="text-start py-4 px-5 border-b border-lightGray">Telegram guruh linki</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(myCourse, index) of userStore.getMyCourses.models"
                        :key="myCourse.id"
                        class="even:bg-loaderGray/30 odd:bg-loaderGray/10 text-dark lg:text-lg font-gilroy-semibold"
                    >
                        <td class="py-4 px-6">{{ index + 1 }}</td>
                        <td class="py-4 px-5">{{ myCourse.course.name }}</td>
                        <td class="py-4 px-5">{{ myCourse.course.startMonth.name }}</td>
                        <td class="py-4 px-5"><a v-if="myCourse.course.link" target="_blank" class="text-purple outline-gray" :href="myCourse.course.link">{{ myCourse.course.link }}</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-if="isLoading" class="hidden lg:block p-5 rounded w-full bg-white shadow-md">
            <div class="border border-loaderGray rounded overflow-hidden w-full overflow-x-auto">
                <MyCoursesTableLoader/>
            </div>
        </div>
        <div class="lg:hidden flex flex-col gap-5">
            <MyCoursesCardLoader
                v-for="item of [1,2,3]"
                :key="item"
                v-if="isLoading"
            />
            <div
                v-if="userStore.getMyCourses.models.length && !isLoading"
                v-for="(myCourse, index) of userStore.getMyCourses.models"
                :key="myCourse.id"
                class="rounded bg-white shadow-md sm:text-lg overflow-hidden"
            >
                <div class="w-full flex items-center justify-between border-lightGray border-b py-4 bg-gray text-white px-5 gap-2">
                    <p>#</p>
                    <p>{{ index + 1 }}</p>
                </div>
                <div class="w-full flex items-center justify-between border-lightGray border-b py-4 px-5 gap-2">
                    <p>Nomi</p>
                    <p>{{ myCourse.course.name }}</p>
                </div>
                <div class="w-full flex items-center justify-between border-lightGray border-b py-4 px-5 gap-2">
                    <p>Boshlanish vaqti</p>
                    <p>{{ myCourse.course.startMonth.name }}</p>
                </div>
                <div class="w-full flex items-center justify-between py-4 px-5 gap-2">
                    <p>Guruh linki</p>
                    <p><a v-if="myCourse.course.link" target="_blank" class="text-purple text-sm outline-gray" :href="myCourse.course.link">{{ myCourse.course.link }}</a></p>
                </div>
            </div>
        </div>
    </div>
    <div v-if="!userStore.getMyCourses.models.length && !isLoading" class="h-full flex justify-center items-center">
        <HeadingTwo class="text-center mt-10 text-lg font-gilroy-semibold text-dark/70">Hech nima topilmadi(</HeadingTwo>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useUserStore} from "@/stores/modules/user.js";
import MyCoursesTableLoader from "@/components/loaders/MyCoursesTableLoader.vue";
import MyCoursesCardLoader from "@/components/loaders/MyCoursesCardLoader.vue";
import HeadingTwo from "@/components/UI/HeadingTwo.vue";

const userStore = useUserStore();
const isLoading = ref(false);

onMounted(() => {
    isLoading.value = true;
    userStore.fetchMyCourses()
        .finally(() => isLoading.value = false)
})
</script>

<style scoped>

</style>