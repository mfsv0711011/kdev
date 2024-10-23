<template>
    <div class="h-full flex flex-col">
        <label class="h-full">
            <span v-if="label">{{ label }}</span>
            <textarea
                :class="{
                    'ring-1 bg-[#323232] text-white ring-red-600 focus:ring-red-600': errorMessage.length,
                    'h-full': !rows,
                    'bg-[#323232] text-white focus:ring-1 ring-white/70 focus:ring-white/70': theme === 'dark' && !errorMessage.length,
                    'bg-white text-dark ring-1 ring-lightGray/70 focus:ring-gray': theme === 'light' && !errorMessage.length,
                    'px-4 lg:px-5 py-4 lg:py-5 text-xl lg:text-2xl': size === 'large',
                    'px-3 lg:px-5 py-4 lg:py-5 text-lg lg:text-xl': size === 'normal',
                }"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :rows
                class="animation-fade-in outline-none w-full rounded font-gilroy-medium"
                :placeholder
            />
        </label>
        <p v-if="errorMessage" class="animation-fade-in text-end text-red-600 mt-1 text-base lg:text-xl">{{ errorMessage }}</p>
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
    },
    theme: {
        type: String,
        default: 'dark'
    },
    size: {
        type: String,
        default: 'large'
    },
})
</script>
