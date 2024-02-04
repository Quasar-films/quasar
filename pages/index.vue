<template>
    <div class="home">
        <div class="home__header">
            <AppWallpaper
                :content="wallpaperContent"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import home from '~/assets/constants/seo/home';

useSeoMetaData(home);

const store = useProductsStore();
await store.getProducts();

const wallpaperContent = reactive({
    imagePath: 'assets/images/1707036315680zggtr2co.jpg',
    badge: 'NEW',
    title: 'Открой занавес! Все фильмы в одном месте',
    description: 'Погрузись в бескрайний мир киноискусства – у нас собраны сотни фильмов, чтобы каждый момент стал незабываемым',
    btnTitle: 'Explore'
});
</script>

<style lang="scss" scoped>
.home {
    &__header {
        height: 500px;
        display: flex;
        align-items: center;
    }
}
</style>
