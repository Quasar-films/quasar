<template>
    <div class="profile">
        <div>profile</div>
    </div>
</template>

<script setup lang="ts">
import useSeoMetaData from "~/composables/useSeoMetaData";
import profile from "~/assets/constants/seo/profile";

useSeoMetaData(profile);
</script>