<template>
    <transition :duration="550" name="nested">
        <div
            v-if="show"
            @click.self="$emit('on-cancel')"
            class="outer fixed inset-0 bg-dark/30 flex justify-center items-center"
        >
            <div class="inner p-5 sm:p-10 rounded-lg shadow-md bg-white w-5/6 lg:w-1/2 relative">
                <div class="flex">
                    <p class="text-2xl lg:text-3xl font-gilroy-semibold mb-5">{{ title }}</p>
                    <button
                        @click="$emit('on-cancel')"
                        class="absolute top-4 lg:top-6 right-4 lg:right-6 hover:bg-lightGray/40 transition-all outline-gray"
                    >
                        <svg class="size-4 lg:size-6 text-dark" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/>
                        </svg>
                    </button>
                </div>
                <slot class="mb-5 lg:text-xl"></slot>
                <div class="flex gap-2 sm:gap-4 justify-center sm:w-1/2 ml-auto font-gilroy-semibold">
                    <KButton :is-loading class="w-1/2" @click="$emit('on-confirm')">Ha</KButton>
                    <button
                        class="h-10 sm:h-12 xl:h-[54px] border hover:shadow-lg rounded-10 hover:text-white transition-all outline-gray hover:bg-black w-1/2 bg-white text-dark"
                        @click="$emit('on-cancel')"
                    >Yo'q</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import KButton from "@/components/UI/KButton.vue";

defineProps({
    show: { type: Boolean, default: false },
    title: { type: String, default: 'O’chirish' },
    description: { type: String, default: '' },
    isLoading: { type: Boolean, default: false },
})
</script>

<style scoped>
.nested-enter-active, .nested-leave-active {
    transition: all 0.2s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
    transform: scale(1);
    transition: all 0.1s ease-in-out;
}

.nested-enter-active .inner {
    transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    transform: scale(.9);
    opacity: 0.001;
}
</style>