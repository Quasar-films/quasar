<template>
    <header class="header">
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
const links = [
    {id: 1, name: 'Home', route: '/'},
    {id: 2, name: 'About', route: '/about'},
    {id: 3, name: 'Profile', route: '/profile'},
]
</script>

<style lang="scss" scoped>

</style>