<template>
    <div class="products">
        <h3 class="products__header">
            {{ title }}
        </h3>

        <div class="products__content">
            <NuxtLink
                v-for="item in productsStore.items"
                :key="item.id"
                :to="'/product/' + item.id"
                class="products__item link--underline"
            >
                {{ item.name }}
            </NuxtLink>
        </div>

        <h4>
            product: {{ productsStore.getProductById(1) }}
        </h4>

        <h5>
            all: {{ productsStore.getProductsCount }} products
        </h5>

        <div>
            <h4>
                {{ counter }}
            </h4>

            <AppButton title="Plus" @click="inc"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const title = ref('Products');

const counter = useState('counter', () => 330);

let refCounter = ref(0);

const inc = () => refCounter.value++;

const dec = () => refCounter.value--;

const productsStore = useProductsStore();

productsStore.getProducts();
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

    &__button {
        width: 24px;
        height: 24px;
        color: black;
        cursor: pointer;
    }
}
</style>