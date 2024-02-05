<template>
    <aside class="sidebar">
        <nav class="sidebar__navigation">
            <div class="sidebar__item sidebar__header">
                <AppButton
                    title="Sign in"
                    transparent
                    class="sidebar__btn-login"
                />

                <IconStar class="sidebar__icon"/>

                <AppLogo class="sidebar__title"/>
            </div>

            <ul class="sidebar__list">
                <li
                    v-for="link in links"
                    :key="link.id"
                    class="sidebar__item"
                >
                    <NuxtLink
                        :to="link.route"
                        class="sidebar__link link"
                    >
                        {{ link.name }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import IconStar from "~/components/icons/IconStar.vue";

const links = [
    { id: 1, name: 'About', route: '/about' },
    { id: 2, name: 'Profile', route: '/profile' },
    { id: 3, name: 'Top charts', route: '/' },
    { id: 4, name: 'Trending', route: '/' },
    { id: 5, name: 'Ratings', route: '/' },
]
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.sidebar {
    min-width: 240px;
    padding: 0 16px;
    border-radius: 0 $br8 $br8 0;
    background: $gradient-bg-color;
    transition: background 0.5s ease;
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
    height: 100vh;

    &__header {
        display: flex;
        align-items: center;
    }

    &__btn-login {
        position: fixed;
        top: 24px;
        right: 24px;
        z-index: 1000;
    }

    &__icon {
        margin-right: 10px;
    }

    &__item {
        padding: 24px 0;
        border-bottom: $main-border;
    }
}
</style>