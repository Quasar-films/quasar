<template>
    <div class="profile">
        <div>profile</div>
    </div>
</template>

<script setup lang="ts">
import Texts from "~/assets/constants/Texts";

const title = 'Profile';
const description = 'Profile'

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