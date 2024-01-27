<template>
  <div id="app">
    <TheHeader />
    <main>
      <NuxtPage />
    </main>
    <TheFooter />
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
