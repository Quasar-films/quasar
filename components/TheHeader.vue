<template>
  <header class="header">
    <AppLogo />

    <nav class="header__nav">
      <ul class="header__list">
        <li
          v-for="link in links"
          :key="link.id"
          class="header__list-item"
        >
          <NuxtLink
            :to="link.route"
            class="header__link link"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const links = [
    { id: 1, name: 'Home', route: '/' },
    { id: 2, name: 'About', route: '/about' },
    { id: 3, name: 'Profile', route: '/profile' }
]
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.header {
    display: flex;
    position: fixed;
    top: 0;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    width: 100%;
    background: $gradient-bg-color;

    &__list {
        display: flex;
        align-items: center;
    }

    &__list-item {
        list-style: none;

        &:not(:last-child) {
            margin-right: 20px;
        }
    }

    &__link {
        font-size: 18px;
    }
}
</style>
