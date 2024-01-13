<template>
    <TheHeader/>
    <NuxtPage/>
    <TheFooter/>
</template>

<script setup lang="ts">
import Texts from "~/assets/constants/Texts";

useHead({
    titleTemplate: `${Texts.AppTitle} | %s`,
})
</script>