<template>
    <div class="" ref="root">
        <MainSection/>
        <StatisticSection/>
        <CoursesSection/>
        <CourseInfoSection/>
        <RoadMapSection/>
        <StudentsProjects/>
        <StudentsFeedbackSection
            v-if="allComments.totalItems"
            :comments="allComments"
            @on-intersecting="reFetchComments"
            :root
        />
        <RequestSection/>
    </div>
</template>

<script setup>
import MainSection from "@/components/sections/MainSection.vue";
import StatisticSection from "@/components/sections/StatisticSection.vue";
import CourseInfoSection from "@/components/sections/CourseInfoSection.vue";
import CoursesSection from "@/components/sections/CoursesSection.vue";
import RoadMapSection from "@/components/sections/RoadMapSection.vue";
import StudentsProjects from "@/components/sections/StudentsProjects.vue";
import StudentsFeedbackSection from "@/components/sections/StudentsFeedbackSection.vue";
import RequestSection from "@/components/sections/RequestSection.vue";
import { onMounted, reactive, ref } from "vue";
import { useCommentStore } from "@/stores/modules/comment.js";

const filters = reactive({
    page: 1,
    itemsPerPage: 10
})
const root = ref(null)

const allComments = ref({
    models: [],
    totalItems: 0
})

const commentStore = useCommentStore()
const reFetchComments = async () => {
    if(allComments.value.models.length) {
        filters.page += 1
    }

    await commentStore.fetchComments(filters)
    allComments.value.models = [...allComments.value.models, ...commentStore.getComments.models]
}
onMounted(async () => {
    await commentStore.fetchComments(filters)
    allComments.value.models = commentStore.getComments.models
    allComments.value.totalItems = commentStore.getComments.totalItems
})
</script>

<style>

.embla {
    overflow: hidden;
}
.embla__container {
    display: flex;
}


.animation-fade-in {
    animation: fade-in linear;
    animation-timeline: view();
}

@keyframes fade-in {
    0% { scale: .7; opacity: .9; }
    25%, 100% { scale: 1; opacity: 1; }
}
</style>