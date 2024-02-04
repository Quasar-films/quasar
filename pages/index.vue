<template>
    <div class="home">
        <div class="home__header">
            <AppWallpaper
                :content="wallpaperContent"
            />
        </div>

        <div class="home__list">
            <AppCard
                v-for="(item, index) in cards"
                :key="index"
                :content="item"
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
    imagePath: 'assets/images/2.png',
    badge: 'NEW',
    title: 'Открой занавес! Все фильмы в одном месте',
    description: 'Погрузись в бескрайний мир киноискусства – у нас собраны сотни фильмов, чтобы каждый момент стал незабываемым',
    btnTitle: 'Explore'
});

const cards = reactive([
    {
        imagePath: 'assets/images/1707035569865a30nawsz.jpg',
        title: 'Title 1',
        description: 'Desc 1',
    },
    {
        imagePath: 'assets/images/1707036795728kihqdrrq.jpg',
        title: 'Title 2',
        description: 'Desc 2',
    },
    {
        imagePath: 'assets/images/170703591194285av727k.jpg',
        title: 'Title 3',
        description: 'Desc 3',
    },
    {
        imagePath: 'assets/images/1707035915011395ofs3c.jpg',
        title: 'Title 4',
        description: 'Desc 4',
    },
]);
</script>

<style lang="scss" scoped>
.home {
    &__header {
        height: 500px;
        display: flex;
        align-items: center;
    }

    &__list {
        padding: 24px;
        flex-wrap: wrap;
        display: flex;
        gap: 16px;
    }
}
</style>
