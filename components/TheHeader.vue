<template>
    <header class="header">
        <h2 class="header__title">
            {{ title }}
        </h2>

        <nav class="header__nav">
            <ul class="header__list">
                <li
                    v-for="link in links" :key="link.id"
                    class="header__link"
                >
                    <NuxtLink :to="link.route">
                        {{ link.name }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import Texts from "~/assets/constants/Texts";

const links = [
    {id: 1, name: 'Home', route: '/'},
    {id: 2, name: 'About', route: '/about'},
    {id: 3, name: 'Profile', route: '/profile'},
]

const title = Texts.title;
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.header {
    &__title {
        font-family: $secondary-ff;
    }
}
</style>