<template>
    <div class="about">
        <div>about</div>
    </div>
</template>

<script setup lang="ts">
import Texts from "~/assets/constants/Texts";

const title = 'About';
const description = 'Information about us'

useSeoMeta({
    title: title,
    description: description,
    ogDescription: description,
    ogTitle: title,
    ogImage: '',
    ogType: 'website',
    ogLocale: 'en_GB',
    twitterCard: 'summary',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: '',
    twitterImageAlt: Texts.AppTitle,
});
</script>