<template>
    <div>
        <h3>home</h3>

        <div>
            {{ store.items }}
        </div>

        <AppInput v-model="value" />
    </div>
</template>

<script setup lang="ts">
import home from '~/assets/constants/seo/home';

useSeoMetaData(home);

const store = useProductsStore();
await store.getProducts();

const value = ref('');
</script>
