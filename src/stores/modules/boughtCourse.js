import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {authorizedClient} from "@/services/unAuthorized.js";

export const useBoughtCourseStore = defineStore('boughtCourse', () => {
    const state = reactive({
        boughtCourses: [],
    })

    const pushBoughtCourse = data => authorizedClient.post('/bought_courses', data)
        .then(res => {
            state.boughtCourses = res.data['hydra:member'];
        })

    return {
        pushBoughtCourse,
        getBoughtCourses: computed(() => state.boughtCourses),
    }
})
