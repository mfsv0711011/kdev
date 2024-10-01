import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {unAuthorizedClient} from "@/services/unAuthorized.js";

const getUrlByFilter = filter => {
    let url = '?';

    url += filter.isArchive != null ? `&isArchive=${filter.isArchive}` : '';
    url += filter.courseType ? `&courses.type.category.name=${filter.courseType}` : '';

    return url;
};

export const useModule = defineStore('module', () => {
    const state = reactive({
        isCoursesLoading: true,
        isCourseLoading: true,
        modules: {
            models: [],
            totalItems: 0
        },
        module: {
            courses: [],
            startMonth: null
        }
    })

    const fetchModules = async filter => {
        try {
            state.isCoursesLoading = true
            const { data } = await unAuthorizedClient.get('/modules' + getUrlByFilter(filter))
            state.modules.models = await data['hydra:member']
            state.modules.totalItems = await data['hydra:totalItems']
            state.isCoursesLoading = false
        } catch (err) {
            state.error = err
        }
    }

    const fetchModule = async id => {
        try {
            state.isCourseLoading = true
            const { data } = await unAuthorizedClient.get('/modules/' + id)
            state.module = await data
            state.isCourseLoading = false
        } catch (err) {
            state.error = err
        }
    }

    return {
        fetchModules,
        fetchModule,
        getModules: computed(() => state.modules),
        getModule: computed(() => state.module),
        isCoursesLoading: computed(() => state.isCoursesLoading),
        isCourseLoading: computed(() => state.isCourseLoading),
    }
})