<template>
    <div class="flex flex-wrap gap-2.5 items-center justify-between rounded-lg px-3 py-3 md:px-8 md:py-5 bg-gradient-to-r from-[#00ADD3] to-[#6100FF] text-white">
        <div class="flex gap-2.5 items-center">
            <p class="text-xl md:text-3xl font-gilroy-bold">Bu kursimizda {{ discountPercent }}% chegirmani qo’lga kiriting</p>
            <img class="size-10 md:size-[60px]" src="/gift-dynamic-premium.png" alt="gift-dynamic-premium">
        </div>
        <div class="flex items-center md:flex-row-reverse gap-5">
            <p class="text-sm md:text-xl font-gilroy-medium">Aksiya ohirigacha qoldi</p>
            <p class="text-lg md:text-3xl font-gilroy-bold">{{ remainsTime }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    discountPercent: {
        type: Number,
        required: true,
    },
    remainsTime: {
        type: [String, Date],
        required: true
    }
})
</script>
