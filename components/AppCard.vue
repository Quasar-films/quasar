<template>
    <div class="app-card">
        <div class="app-card__image-wrapper">
            <img :src="getImgSrc(content.imagePath)" alt="logo">
        </div>

        <div class="app-card__content">
            <h5 class="app-card__title">
                {{ content.title }}
            </h5>

            <div class="app-card__description">
                {{ content.description }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { CardType } from '~/types';

const props = defineProps({
    content: {
        type: Object as PropType<CardType>,
        required: true
    }
});

const getImgSrc = (path: string) => {
    return `/_nuxt/${path}`;
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.app-card {
    position: relative;
    width: 300px;

    &__image-wrapper {
        height: 360px;

        img {
            border-radius: $br8;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__content {
        position: absolute;
        bottom: 8px;
        left: 8px;
        right: 8px;
        display: flex;
        flex-direction: column;
        border-radius: $br8;
        padding: 6px 10px;
        background: rgba(5, 5, 5, 0.8);
    }
}
</style>
