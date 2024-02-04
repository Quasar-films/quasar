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
import type {Wallpaper} from '~/types';

const props = defineProps({
    content: {
        type: Object as PropType<Wallpaper>,
        required: true,
    },
});

const getImgSrc = (path: string) => {
    return `/_nuxt/${path}`;
};
</script>

<style lang="scss" scoped>
.app-wallpaper {
    &__item {
        &:not(:last-child) {
            margin-bottom: 24px;
        }
    }
}
</style>