<template>
    <button
        class="app-button"
        :class="{sizeClass}"
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
    }
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
    height: 50px;
    font-family: $main-ff;
    color: $main-color;
    border: none;
    outline: none;
    padding: 14px 16px;
    border-radius: $br12;
    background: $secondary-bg-color;
    cursor: pointer;
    font-size: 16px;
}
</style>
