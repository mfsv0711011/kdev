import {defineStore} from "pinia";
import {unAuthorizedClient} from "@/services/unAuthorized.js";
import {computed, reactive} from "vue";


export const useRequestForCallStore = defineStore('requestForCall', () => {
    const state = reactive({
        isLoading: false,
        response: null,
        error: null,
    })

    const pushRequestForCall = async data => {
        state.isLoading = true
        state.response = null
        state.error = null

        try {
            const response = await unAuthorizedClient.post('/request_for_calls', data)
            state.response = response.data
        } catch (error) {
            state.error = "So'rov yuborishda xatolik ro'y berdi"
            throw error
        } finally {
            state.isLoading = false
        }
    }

    return {
        isLoading: computed(() => state.isLoading),
        response: computed(() => state.response),
        error: computed(() => state.error),
        pushRequestForCall
    }
})