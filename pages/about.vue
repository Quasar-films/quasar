<template>
    <div class="about">
        <div>about</div>
    </div>
</template>

<script setup lang="ts">
import useSeoMetaData from "~/composables/useSeoMetaData";
import about from "~/assets/constants/seo/about";

useSeoMetaData(about);
</script>