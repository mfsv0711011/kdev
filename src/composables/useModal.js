import {computed, ref, watch} from "vue";

export default function() {
    const isOpen = ref(false)

    const setIsOpen = (isOpen) => isOpen.value = isOpen

    watch(() => isOpen.value, newValue =>{
        document.body.style.overflow = newValue ? 'hidden' : 'auto'
    })

    return { isOpen: computed(() => isOpen.value), setIsOpen }
}