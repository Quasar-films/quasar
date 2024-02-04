<template>
    <div class="home">
        <div class="home__header">

        </div>
    </div>
</template>

<script setup lang="ts">
import home from '~/assets/constants/seo/home';

useSeoMetaData(home);

const store = useProductsStore();
await store.getProducts();
</script>

<style lang="scss" scoped>
.home {
    &__header {
    }
}
</style>
