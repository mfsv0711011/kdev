<template>
    <div class="cursor-pointer h-10 sm:h-12 xl:h-[54px] flex items-center relative rounded overflow-hidden ring-1 ring-lightGray/70 focus:ring-gray">
        <div class="h-full bg-purple flex items-center text-nowrap z2">
            <span class="px-4 text-white text-sm">Rasm yuklang</span>
        </div>
        <p class="text-xs font-gilroy-medium ml-2 text-nowrap overflow-ellipsis z-10">{{ selectedFileName }}</p>
        <input @change="changeFile" type="file" accept="image/png, image/jpeg" class="absolute file:cursor-pointer inset-0 file:outline-gray rounded outline-gray file:text-transparent opacity-0"/>
    </div>
</template>

<script setup>
import {computed, ref} from "vue";

const emit = defineEmits(['change-file']);
const selectedFile = ref()
const selectedFileName = computed(() => selectedFile.value?.name || 'Rasm tanlanmagan')

const changeFile = e => {
    selectedFile.value = e.target.files[0];
    emit('change-file', selectedFile.value);
}

const clear = () => selectedFile.value = null

defineExpose({ clear })

</script>

<style scoped>

</style>