<template>
    <div
        class="app-wallpaper"
        :style="{ backgroundImage: 'url(' + getImgSrc(content.imagePath) + ')', backgroundSize: 'cover', backgroundPosition: 'center' }"
    >
        <div class="app-wallpaper__content">
            <AppButton
                :title="content.badge"
                size="sm"
                transparent
                class="app-wallpaper__item"
            />

            <h3 class="app-wallpaper__item">
                {{ content.title }}
            </h3>

            <p class="app-wallpaper__item">
                {{ content.description }}
            </p>

            <AppButton
                :title="content.btnTitle"
                class="app-wallpaper__item"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { WallpaperType } from '~/types';

const props = defineProps({
    content: {
        type: Object as PropType<WallpaperType>,
        required: true
    }
});

const getImgSrc = (path: string) => {
    return `/_nuxt/${path}`;
};
</script>

<style lang="scss" scoped>
.app-wallpaper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 24px;
    position: relative;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    z-index: 1;
}

    &__item {
        position: relative;
        z-index: 2;

        &:not(:last-child) {
            margin-bottom: 24px;
        }
    }
}
</style>
