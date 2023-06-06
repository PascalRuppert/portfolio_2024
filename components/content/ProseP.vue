<template>
  <p
    class="antialiased font-jet text-typo-500 text-body xl:text-xl-body group-[.home-hero]:mt-4 group-[.home-hero]:text-hero xl:group-[.home-hero]:text-xl-hero group-[.about-hero]:font-normal group-[.about-hero]:mt-4 group-[.about-hero]:[&:nth-child(n+3)]:mt-6 xl:group-[.about-hero]:[&:nth-child(n+3)]:mt-[1.75rem]"
  >
    <slot />
  </p>
</template>

<style scoped>
.article_content h2 + p {
  @apply mt-2  xl:mt-3;
}
.article_content p {
  @apply mt-6 xl:mt-[1.75rem];
}
</style>
