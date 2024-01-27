<template>
  <div class="product">
    <h3 class="product__title">
      {{ $route.params.id }}
    </h3>

    <NuxtLink
      class="link--underline"
      to="/products"
    >
      Catalogue
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.product {
    &__title {
        margin-bottom: 40px;
    }
}
</style>
