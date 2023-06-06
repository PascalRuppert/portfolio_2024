<template>
  <h2 :id="id" class="antialiased text-sectiontitle font-jet text-typo-600 xl:text-xl-sectiontitle scroll-mt-24">
    <slot />
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>();
</script>

<style>
.article_content h2:not(:first-child) {
  @apply mt-12 xl:mt-20;
}

.article_content {
  counter-reset: chapter;
  counter-increment: chapter 0;
}

.article_content h2::before {
  @apply inline-block font-light;
  counter-increment: chapter;
  content: counter(chapter, decimal-leading-zero) '_';
}
</style>
