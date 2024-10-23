<template>
    <div class="flex flex-col gap-2.5 md:gap-7 md:mt-6">
        <div class="w-36 lg:w-64 h-5 lg:h-10 animate-pulse bg-loaderGray"></div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
            <div v-for="item of [1,2,3,4,5,6,7,8]" :key="item" class="w-full h-10 lg:h-14 animate-pulse bg-loaderGray"></div>
        </div>
    </div>
</template>
