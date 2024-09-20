<template>
    <div>
        <label>
            <span class="text-inherit">{{ label }}</span>
            <input
                :class="{
                    'ring-1 ring-red-600 focus:ring-red-600': errorMessage.length,
                    'ring-white/70 focus:ring-white/70': !errorMessage.length,
                    'mt-1': label
                }"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                type="text"
                class="animation-fade-in outline-none focus:ring-1 w-full text-white rounded bg-[#323232] px-4 lg:px-5 py-4 lg:py-5 text-xl lg:text-2xl font-gilroy-medium"
                :placeholder
            >
        </label>
        <p :class="{'mt-1': errorMessage}" class="animation-fade-in text-end text-red-600 text-base lg:text-xl">{{errorMessage}}</p>
    </div>
</template>

<script setup>
import {useAttrs} from "vue";

defineProps({
    modelValue: {
        type: [String, Number],
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
    }
})

const attrs = useAttrs()
</script>

<style scoped>

</style>