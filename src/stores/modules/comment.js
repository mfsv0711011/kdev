import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {unAuthorizedClient} from "@/services/unAuthorized.js";

const getAdditionalUrlForFilter = filters => {
    const filter = {
        page: filters.page,
        itemsPerPage: filters.itemsPerPage,
        foo: filters.foo
    }

    const params = Object.entries(filter)
        .filter(([key, value]) => value !== undefined)  // undefined qiymatlarni filter qilamiz
        .map(([key, value]) => `${key}=${value}`)  // key=value formatiga o'tkazamiz
        .join('&');  // '&' bilan ulaymiz

    return params ? `?${params}` : '';
}

export const useCommentStore = defineStore('comment', () => {
    const state = reactive({
        comments: {
            models: [],
            totalItems: 0
        }
    })

    const fetchComments = async (filters) => {

        const url = getAdditionalUrlForFilter(filters)
        const { data } = await unAuthorizedClient.get('/comments' + url +'&isApprove=true')
        state.comments.models = data['hydra:member']
        state.comments.totalItems = data['hydra:totalItems']
    }

    return {
        getComments: computed(() => state.comments),
        fetchComments,
    }
})
