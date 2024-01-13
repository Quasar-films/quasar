<template>
    <div class="app-logo">
        {{ title }}
    </div>
</template>

<script setup lang="ts">
import Texts from "~/assets/constants/Texts";

const title = Texts.AppTitle;
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.app-logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: $secondary-ff;
    font-size: 28px;
    background: $secondary-bg-color;
    padding: 4px 8px;
    border-radius: $br6;
}
</style>