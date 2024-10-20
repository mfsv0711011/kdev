import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import {authorizedClient, unAuthorizedClient} from "@/services/unAuthorized.js";

export const useUserStore = defineStore('userStore', () => {
    const state = reactive({
        accessToken: localStorage.getItem('kadirovdev-accessToken') || null,
        refreshToken: localStorage.getItem('kadirovdev-refreshToken') || null,
        user: {},
        myCourses: {
            models: [],
            totalItems: 0
        },
        myComments: {
            models: [],
            totalItems: 0
        }
    })

    const pushUser = (data) => unAuthorizedClient.post('/users', data).then((res) => state.user = res.data)
    const putUser = (data, userId) => authorizedClient.put('/users/' + userId , data)

    const fetchToken = (data) =>
        unAuthorizedClient.post('/users/auth', data).then((res) => {
            state.accessToken = res.data.accessToken
            state.refreshToken = res.data.refreshToken
            localStorage.setItem('kadirovdev-accessToken', res.data.accessToken)
            localStorage.setItem('kadirovdev-refreshToken', res.data.refreshToken)
        })

    function clearToken() {
        localStorage.removeItem('kadirovdev-accessToken')
        localStorage.removeItem('kadirovdev-refreshToken')
        location.reload()
    }

    const refreshToken = (data) =>
        unAuthorizedClient.post('/users/auth/refreshToken', { refreshToken: data })
            .then(async (res) => {
                state.accessToken = await res.data.accessToken
                state.refreshToken = await res.data.refreshToken
                localStorage.setItem('kadirovdev-accessToken', res.data.accessToken)
                localStorage.setItem('kadirovdev-refreshToken', res.data.refreshToken)
                location.reload()
            })

    const fetchAboutMe = () => authorizedClient.get('/users/about_me').then((res) => (state.user = res.data))
    const fetchMyCourses = () => authorizedClient.get('/users/my_courses')
        .then((res) => {
            state.myCourses.models = res.data['hydra:member']
            state.myCourses.totalItems = res.data['hydra:totalItems']
        })

    const changeAvatar = (id, data) => authorizedClient.put(`/users/${id}/avatar`, data)

    return {
        pushUser,
        putUser,
        fetchToken,
        clearToken,
        refreshToken,
        fetchAboutMe,
        fetchMyCourses,
        changeAvatar,
        getAccessToken: computed(() => localStorage.getItem('kadirovdev-accessToken')),
        getRefreshToken: computed(() => localStorage.getItem('kadirovdev-refreshToken')),
        isAuthorized: computed(() => !!state.accessToken),
        getUser: computed(() => state.user),
        getMyCourses: computed(() => state.myCourses),
    }
})
