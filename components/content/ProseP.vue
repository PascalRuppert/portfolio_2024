<template>
  <p class="antialiased font-jet text-typo-500 text-body xl:text-xl-body">
    <slot />
  </p>
</template>

<style scoped>
.article_content h2 + p {
  @apply mt-2  xl:mt-3;
}

.article_content h3 + p {
  @apply mt-2  xl:mt-2;
}

.article_content p {
  @apply mt-[1.625rem]  xl:mt-[1.875rem];
}

.home-hero p {
  @apply mt-4 text-hero xl:text-xl-hero;
}

.about-hero p {
  @apply font-normal mt-4;
}

.about-hero p:nth-child(n + 3) {
  @apply mt-[1.625rem] xl:mt-[1.875rem];
}
</style>
