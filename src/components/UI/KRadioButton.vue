<template>
    <label class="relative flex items-center gap-1 md:gap-2.5 cursor-pointer p-2 md:p-3 rounded ring-1 ring-gray/30 has-[:checked]:ring-purple  select-none">
        <span v-if="sup" class="absolute top-0 right-0 w-fit h-fit flex justify-center items-center leading-none bg-[#DCD3FF] rounded-full text-purple p-0.5 md:p-1.5 text-[10px] md:text-sm font-gilroy-medium -translate-y-1/2 translate-x-1/2">
            {{ sup }}
        </span>
        <span
            class="size-5 md:size-8 flex-none rounded-full ring-1 ring-[#D4D4D4] block relative"
            :class="{'before:absolute before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:size-2.5 before:md:size-4 before:bg-purple before:rounded-full': modelValue === value}"
        ></span>
        <span class="text-[10px] md:text-xl" v-if="label">{{ label }}</span>
        <input
            v-bind="$attrs"
            type="radio"
            class="opacity-0 absolute"
            :checked="modelValue === value"
            :value="value"
            @change="$emit('update:modelValue', value)"
        />
    </label>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    value: {
        type: [String, Number],
        required: true
    },
    sup: {
        type: [String, Number],
        default: ''
    }
})
</script>

<style scoped>

</style>