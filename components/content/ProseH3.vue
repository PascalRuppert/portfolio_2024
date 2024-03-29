<template>
  <h3 class="mt-[1.625rem] antialiased text-itemtitle font-jet text-typo-600 xl:text-xl-itemtitle scroll-mt-22 xl:scroll-mt-24 xl:mt-[1.875rem]">
    <slot />
  </h3>
</template>

<style>
.article_content h2 + h3 {
  @apply mt-4 xl:mt-6;
}
</style>
