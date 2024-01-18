<template>
    <div class="profile">
        <div>profile {{ sameCounter }}</div>
    </div>
</template>

<script setup lang="ts">
import profile from "~/assets/constants/seo/profile";

useSeoMetaData(profile);

definePageMeta({
    middleware: 'auth'
})

const sameCounter = useState('counter')
</script>