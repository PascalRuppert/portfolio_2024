<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en-US',
    class: 'overscroll-none',
  },
  bodyAttrs: {
    class: 'bg-base-200 overscroll-none',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#04243d' },
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#2b5797' },
    { name: 'theme-color', content: '#021626' },
  ],
});
</script>

<template>
  <div>
    <PageHeader />
    <main class="relative z-20 bg-base-200 mb-[11rem] sm:mb-[10.5rem] xl:mb-[10.875rem] mt-14 sm:mt-18">
      <GridLines />
      <NuxtPage />
    </main>
    <PageFooter />
  </div>
</template>
