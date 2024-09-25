<template>
    <div class="bg-white rounded-[10px] p-2.5 lg:p-5 flex items-center gap-1 lg:gap-2.5 shadow-md h-fit animation-fade-in">
        <div class="size-6 lg:size-10 flex justify-center items-center">
            <img class="w-full flex-none" :src="skill.image" alt="html-image">
        </div>
        <p class="text-xs lg:text-2xl font-gilroy-semibold">{{ skill.name }}</p>
    </div>
</template>

<script setup>
defineProps({
    skill: {
        type: Object,
        required: true,
    }
})
</script>

<style scoped>

</style>