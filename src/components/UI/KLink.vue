<template>
    <a v-bind="$attrs" :class="[`text-${textColor}`, 'hover:opacity-70 hover:text-blue-500 transition-all']"><slot/></a>
</template>

<script setup>
defineProps({
    textColor: {
        type: String,
        default: 'purple',
    }
})
</script>
