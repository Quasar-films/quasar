<template>
    <TheHeader/>
    <main>
        <NuxtPage/>
    </main>
    <TheFooter/>
</template>

<script setup lang="ts">
const AppTitle = useAppConfig().title;

useHead({
    titleTemplate: (text: string = '') => {
        return text
            ? `${AppTitle} | ${text}`
            : `${AppTitle}`;
    },
})
</script>