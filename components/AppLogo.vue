<template>
    <NuxtLink to="/">
        <div class="app-logo" :class="sizeClass">
            {{ title }}
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Size } from '~/types';

const title = useAppConfig().title;

const props = defineProps({
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
@import "assets/scss/variables";

.app-logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: $secondary-ff;
    font-size: 28px;
    border-radius: $br8;
    cursor: pointer;
    position: relative;

    &:hover {
        color: $violet-color;
        transition: 0.3s ease;
    }

    &--sm {
        font-size: 22px;
        background: $secondary-bg-color;
        padding: 3px 6px;
        border-radius: $br4;
    }

    &--lg {
        font-size: 40px;
        background: $secondary-bg-color;
        padding: 6px 12px;
        border-radius: $br12;
    }
}
</style>
