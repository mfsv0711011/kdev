<template>
    <nav aria-label="Progress">
        <ol role="list" class="flex items-center w-full">
            <li v-for="(step, stepIdx) in steps" :key="step.name" :class="[stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-[120px] md:pr-[150px] lg:pr-[232px]' : '', 'relative']">
                <template v-if="step.status === 'complete'">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="h-0.5 w-full bg-purple" />
                    </div>
                    <div class="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple bg-white">
                        <svg class="size-6 text-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                        </svg>

                        <span class="sr-only">{{ step.name }}</span>
                    </div>
                </template>
                <template v-else-if="step.status === 'current'">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="h-0.5 w-full bg-[#EAECF0]" />
                    </div>
                    <div class="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#EAECF0] bg-white" aria-current="step">
                        <span class="h-2.5 w-2.5 rounded-full bg-[#EAECF0]" aria-hidden="true" />
                        <span class="sr-only">{{ step.name }}</span>
                    </div>
                </template>
                <template v-else>
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="h-0.5 w-full bg-[#EAECF0]" />
                    </div>
                    <div class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#EAECF0] bg-white hover:border-gray-400">
                        <span class="h-2.5 w-2.5 rounded-full bg-[#EAECF0]" aria-hidden="true" />
                        <span class="sr-only">{{ step.name }}</span>
                    </div>
                </template>
            </li>
        </ol>
    </nav>
</template>

<script setup>
defineProps({
    steps: {
        type: Array,
        required: true,
    }
})
</script>