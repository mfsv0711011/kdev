<template>
    <button v-bind="$attrs" class="bg-purple h-10 sm:h-12 xl:h-[54px] rounded-10 text-white transition-all kButtonShadow">
        <slot/>
    </button>
</template>

<script setup>

</script>

<style scoped>
.kButtonShadow:hover {
    box-shadow: 0 4px 8px 2px #7F56D9aa;
}
</style>