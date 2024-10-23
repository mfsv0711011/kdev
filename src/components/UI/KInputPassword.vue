<template>
    <div>
        <label class="relative">
            <span class="text-inherit">{{ label }}</span>
            <input
                :class="{
                    'ring-1 ring-red-600 focus:ring-red-600': errorMessage.length,
                    'ring-white/70 focus:ring-white/70': !errorMessage.length,
                    'mt-1': label,
                    'px-4 lg:px-5 py-4 lg:py-5 text-xl lg:text-2xl': size === 'large',
                    'px-2 lg:px-5 py-2 lg:py-2.5 text-lg lg:text-xl': size === 'normal',
                    'bg-[#323232] text-white': theme === 'dark',
                    'bg-white text-dark': theme === 'light',
                }"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :type="isVisible ? 'text' : 'password'"
                class="animation-fade-in outline-none focus:ring-1 w-full rounded font-gilroy-medium"
                :placeholder
            >
            <button @click="toggle" class="absolute right-4 top-1/2 -translate-y-1/2">
                <EyeIcon v-if="!isVisible"/>
                <EyeOffIcon v-else />
            </button>
        </label>
        <p :class="{'mt-1': errorMessage}" class="animation-fade-in text-end text-red-600 text-base lg:text-xl">{{errorMessage}}</p>
    </div>
</template>

<script setup>
import EyeIcon from "@/components/UI/EyeIcon.vue";
import {ref} from "vue";
import EyeOffIcon from "@/components/UI/EyeOffIcon.vue";

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
    },
    size: {
        type: String,
        default: 'large'
    },
    theme: {
        type: String,
        default: 'dark'
    }
})
const isVisible = ref(false)

const toggle = () => isVisible.value = !isVisible.value
</script>
