<template>
    <div class="products">
        <h3 class="products__header">
            {{ title }}
        </h3>

        <div class="products__content">
            <NuxtLink
                v-for="item in products"
                :key="item.id"
                :to="'/product/' + item.id"
                class="products__item link--underline"
            >
                {{ item.name }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const title = ref('Products');

const { data: products } = await useAsyncData('products', () => $fetch('/api/test'));
const counter = useState('counter', () => 330);
</script>

<style lang="scss" scoped>
.products {
    &__header {
        margin-bottom: 40px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    &__item {
        display: inline-flex;
        cursor: pointer;
        transition: .15s;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }
}
</style>