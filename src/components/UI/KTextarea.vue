<template>
    <div class="h-full flex flex-col">
        <label class="h-full">
            <span>{{ label }}</span>
            <textarea
                :class="{
                    'ring-1 ring-red-600 focus:ring-red-600': errorMessage.length,
                    'ring-white/70 focus:ring-white/70': !errorMessage.length,
                    'h-full': !rows
                }"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :rows
                class="animation-fade-in outline-none focus:ring-1 focus:ring-white/70 w-full text-white rounded bg-[#323232] px-4 lg:px-5 py-4 lg:py-5 text-xl lg:text-2xl font-gilroy-medium"
                :placeholder
            />
        </label>
        <p class="animation-fade-in text-end text-red-600 mt-1 text-base lg:text-xl">{{errorMessage}}</p>
    </div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    errorMessage: {
        type: String,
        default: ''
    },
    rows: {
        type: Number,
    }
})
</script>

<style scoped>

</style>