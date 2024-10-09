<template>
    <a v-bind="$attrs" class="kButtonShadow flex justify-center items-center px-5 bg-purple h-10 sm:h-12 xl:h-[54px] rounded-10 text-white transition-all outline-gray">
        <slot/>
    </a>
</template>

<script setup>
defineProps({
    isLoading: {
        type: Boolean,
        default: false
    },
    isDisabled: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.kButtonShadow:hover {
    box-shadow: 0 4px 8px 2px #7F56D9aa;
}
</style>