<template>
    <div>
        <main class="main">
            <TheSidebar />
            <NuxtPage class="inner" />
        </main>
    </div>
</template>

<script setup lang="ts">
const AppTitle = useAppConfig().title;

useHead({
    titleTemplate: (text: string = '') => {
        return text
            ? `${AppTitle} | ${text}`
            : `${AppTitle}`;
    }
})
</script>
