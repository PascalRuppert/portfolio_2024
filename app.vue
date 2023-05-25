<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en-US',
    class: 'overscroll-none',
  },
  bodyAttrs: {
    class: 'bg-base-200 overscroll-none',
  },
});
</script>

<template>
  <div>
    <PageHeader />
    <main class="relative z-20 bg-base-200 mb-[11.75rem] sm:mb-[10.5rem] xl:mb-[10.875rem] mt-14 sm:mt-18">
      <GridLines />
      <NuxtPage />
    </main>
    <PageFooter />
  </div>
</template>
