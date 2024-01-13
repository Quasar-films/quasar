<template>
    <TheHeader/>
    <NuxtPage/>
    <TheFooter/>
</template>

<script setup lang="ts">
import Texts from "~/assets/constants/Texts";

useHead({
    titleTemplate: (text: string = '') => {
        return text
            ? `${Texts.AppTitle} | ${text}`
            : `${Texts.AppTitle}`;
    },
})
</script>