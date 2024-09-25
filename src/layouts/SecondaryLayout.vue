<template>
    <div id="main" class="flex bg-[#F9FAFB] flex-col min-h-dvh">
        <HeaderComponent/>
        <router-view/>
        <FooterComponent/>
    </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

</script>

<style scoped>

</style>