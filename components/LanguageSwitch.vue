<script setup>
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <div id="lang_switch" class="flex mb-10 gap-x-1 sm:ml-6 sm:gap-x-2 sm:mb-0 text-section text-typo-600 font-jet sm:text-body xl:text-xl-body">
    <a class="cursor-pointer group" :class="{ active: locale === 'en' }" :href="switchLocalePath('en')">
      <p>EN</p>
      <div class="hidden sm:block w-full h-px mt-px bg-gradient-to-r from-link to-link bg-no-repeat [background-position:0] [background-size:0] motion-safe:transition-all motion-safe:duration-200 group-hover:[background-size:100%]"></div>
    </a>
    <p>|</p>
    <a class="cursor-pointer group" :class="{ active: locale === 'ja' }" :href="switchLocalePath('ja')">
      <p>JP</p>
      <div class="hidden sm:block w-full h-px mt-px bg-gradient-to-r from-link to-link bg-no-repeat [background-position:0] [background-size:0] motion-safe:transition-all motion-safe:duration-200 group-hover:[background-size:100%]"></div>
    </a>
  </div>
</template>

<style scoped>
#lang_switch a.active {
  @apply text-link pointer-events-none;
}
</style>
