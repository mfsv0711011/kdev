import {onMounted, onUnmounted, ref, watch} from "vue";

export default function() {
    const isTop = ref(true)
    const setValueToIsTop = () => {
        isTop.value = scrollY === 0
    }
    onMounted(() => {
        window.addEventListener("scroll", setValueToIsTop)
    })

    onUnmounted(() => {
        window.removeEventListener("scroll", setValueToIsTop)
    })
    return isTop
}