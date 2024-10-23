<template>
    <label class="relative">
        <select
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)"
            class="w-full bg-transparent rounded px-3 h-10 sm:h-12 xl:h-[54px] flex items-center lg:text-lg text-dark outline-none ring-1 ring-lightGray/70 focus:ring-gray"
        >
            <option selected disabled class="hidden" value="">Kursni tanlang</option>
            <option :value="item.course['@id']" v-for="item of list" :key="item.id">{{ item.course.name }}</option>
        </select>
    </label>
</template>

<script setup>
defineProps({
    list: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: [Object, String],
        required: true
    }
})
</script>
