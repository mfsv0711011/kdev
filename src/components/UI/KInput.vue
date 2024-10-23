<template>
    <div>
        <label>
            <span v-if="label" class="text-base text-gray">{{ label }} <span v-if="required">*</span></span>
            <div class="relative">
                <input
                    :class="{
                    'bg-[#323232] text-white': errorMessage.length && theme === 'dark',
                    'bg-white text-dark': errorMessage.length && theme === 'light',
                    'ring-1 ring-red-600 focus:ring-red-600': errorMessage.length,
                    'mt-1': label,
                    'px-4 lg:px-5 py-4 lg:py-5 text-xl lg:text-2xl': size === 'large',
                    'px-2 lg:px-5 py-2 lg:py-2.5 text-lg lg:text-xl': size === 'normal',
                    'bg-[#323232] text-white focus:ring-1 ring-white/70 focus:ring-white/70': theme === 'dark' && !errorMessage.length,
                    'bg-white text-dark ring-1 ring-lightGray/70 focus:ring-gray': theme === 'light' && !errorMessage.length,
                    'animation-fade-in ': !noAnimation,
                }"
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    :type="calculatedType"
                    class="outline-none w-full rounded font-gilroy-medium"
                    :placeholder
                >
                <button type="button" v-if="type === 'password'" @click.prevent="toggle" class="absolute rounded-full outline-gray right-4 top-1/2 -translate-y-1/2">
                    <EyeIcon v-if="isVisible" class="text-2xl text-dark"/>
                    <EyeOffIcon v-else class="text-2xl text-dark"/>
                </button>
            </div>
        </label>
        <div
            v-if="errorMessage"
            :class="{
                'mt-1': errorMessage,
                'animation-fade-in ': !noAnimation,
                'text-base lg:text-xl': size === 'large',
                'text-sm lg:text-sm': size === 'normal',
            }"
            class="flex gap-2 items-center justify-end text-red-600"
        >

            <ExclaminationIcon/>
            {{errorMessage}}
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from "vue";
import EyeOffIcon from "@/components/UI/EyeOffIcon.vue";
import EyeIcon from "@/components/UI/EyeIcon.vue";
import ExclaminationIcon from "@/components/UI/ExclaminationIcon.vue";

const props = defineProps({
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
    },
    type: {
        type: String,
        default: 'text'
    },
    required: {
        type: Boolean,
        default: false
    },
    noAnimation: {
        type: Boolean,
        default: false
    },
    bordered: {
        type: Boolean,
        default: false
    }
})

const isVisible = ref(false)
const calculatedType = computed(() => props.type === 'password' ? isVisible.value ? 'text' : 'password' : props.type)

const toggle = () => isVisible.value = !isVisible.value
</script>
