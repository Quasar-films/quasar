<template>
    <div class="products">
        <h3 class="products__header">
            {{ title }}
        </h3>

        <div class="products__content">
            <NuxtLink
                v-for="item in items"
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

const items = ref([
    {id: 1, name: 'item1'},
    {id: 2, name: 'item2'},
    {id: 3, name: 'item3'},
    {id: 4, name: 'item4'},
]);
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