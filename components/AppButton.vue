<template>
    <button
        class="app-button"
        :class="{sizeClass, 'app-button--transparent': transparent}"
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

const sizeClass = computed(() => {
    return `app-logo--${props.size}`
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
    border: none;
    outline: none;
    padding: 10px 24px;
    border-radius: $br24;
    background: $secondary-bg-color;
    cursor: pointer;
    font-size: 16px;
    transition: .3s;
    position: relative;

    &--transparent {
        background: $gradient-bg-color;
        border: $violet-border;

        &:hover {
            background: $main-bg-color;
        }
    }
}
</style>
