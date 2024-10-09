<template>
    <div id="main" class="flex flex-col min-h-dvh">
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
* {
    scrollbar-gutter: stable;
}
</style>