import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {authorizedClient} from "@/services/unAuthorized.js";

export const useMediaObjectStore = defineStore('mediaObject', () => {
    const state = reactive({
        mediaObject: null,
    })

    const pushMediaObject = data => authorizedClient.post('/media_objects', data)

    return {
        pushMediaObject,
        getMediaObject: computed(() => state.mediaObject)
    }
})