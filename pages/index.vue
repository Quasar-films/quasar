<template>
    <main class="main">
        <div>home</div>
    </main>
</template>

<script setup lang="ts">
import useSeoMetaData from "~/composables/useSeoMetaData";
import home from "~/assets/constants/seo/home";

useSeoMetaData(home);
</script>