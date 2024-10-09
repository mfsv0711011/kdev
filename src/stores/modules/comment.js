import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {authorizedClient, unAuthorizedClient} from "@/services/unAuthorized.js";

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
        },
        myComments: {
            models: [],
            totalItems: 0
        }
    })

    const fetchComments = async (filters) => {
        try {
            const url = getAdditionalUrlForFilter(filters)
            const { data } = await unAuthorizedClient.get('/comments' + url +'&isApprove=true')
            state.comments.models = data['hydra:member']
            state.comments.totalItems = data['hydra:totalItems']
        } catch (err) {
            return err
        }
    }

    const fetchMyComments = (userId) => authorizedClient.get(`/comments?page=1&itemsPerPage=20&user.id=${userId}`)
        .then((res) => {
            state.myComments.models = res.data['hydra:member']
            state.myComments.totalItems = res.data['hydra:totalItems']
        })

    const pushComment = data => authorizedClient.post('/comments', data)
    const updateComment = (id, data) => authorizedClient.put('/comments/' + id, data)
    const deleteComment = id => authorizedClient.delete('/comments/' + id)

    return {
        getComments: computed(() => state.comments),
        getMyComments: computed(() => state.myComments),
        fetchComments,
        fetchMyComments,
        pushComment,
        updateComment,
        deleteComment,
    }
})
