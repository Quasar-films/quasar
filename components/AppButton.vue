<template>
    <button
        class="app-button"
        :class="{
        'app-button--transparent': transparent,
        'app-button--sm': size === 'sm',
        'app-button--lg': size === 'lg'
    }"
    >
        {{ title }}
    </button>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { Size } from '~/types';

const props = defineProps({
    title: {
        type: String as PropType<string>,
        required: true
    },
    size: {
        type: String as PropType<Size>,
        default: 'md'
    },
    transparent: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.app-button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $main-ff;
    color: $main-color;
    padding: 10px 24px;
    border-radius: $br24;
    background: $secondary-bg-color;
    cursor: pointer;
    font-size: 16px;
    transition: .3s;
    position: relative;
    border: $violet-border;

    &--sm {
        padding: 6px 14px;
        font-size: 13px;
    }

    &:hover {
        background: $main-bg-color;
    }

    &--transparent {
        background: $gradient-bg-color;

        &:hover {
            background: $secondary-bg-color;
        }
    }
}
</style>
