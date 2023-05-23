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
    <main class="relative z-20 bg-base-200 mb-[188px] xl:mb-[174px] mt-14 sm:mt-18">
      <GridLines />
      <NuxtPage />
    </main>
  </div>
</template>
