<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="relative px-6 mt-20 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0 xl:mt-30">
    <div class="grid w-full grid-cols-4 gap-x-4 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8">
      <h2 class="col-span-2 mb-10 antialiased xl:mb-12 text-sectiontitle font-jet text-typo-600 xl:text-xl-sectiontitle text-shadow">Also worth<br />mentioning</h2>
    </div>

    <ol class="grid w-full grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8 xl:gap-y-8 group" :class="isMinimized && 'minimized'">
      <ContentQuery v-slot="{ data }" path="/project">
        <ProjectCard v-for="item of data" :key="item" :title="item.title" :description="item.description" :icon="item.icon" :year="item.year" :tags="item.tags" />
      </ContentQuery>
    </ol>

    <button class="inline-block mt-6 antialiased uppercase text-btn text-typo-600 font-jet xl:text-xl-btn xl:hidden group" @click="toggleClass">
      <p v-if="isMinimized" class="flex gap-x-2">
        Show all
        <span>
          <svg width="0.75rem" height="1.25rem" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7.5L6 12.5L11 7.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="square" />
          </svg>
        </span>
      </p>
      <p v-if="!isMinimized" class="flex gap-x-2">
        Show less
        <span>
          <svg width="0.75rem" height="1.25rem" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 12.5L6 7.5L1 12.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="square" />
          </svg>
        </span>
      </p>
      <div class="w-full h-px mt-px bg-typo-600 sm:bg-[unset] sm:bg-gradient-to-r sm:from-link sm:to-link sm:bg-no-repeat sm:[background-position:0] sm:[background-size:0] sm:motion-safe:transition-all sm:motion-safe:duration-200 sm:group-hover:[background-size:100%]"></div>
    </button>
  </section>
</template>

<script setup lang="ts">
const isMinimized = ref(true);
function toggleClass() {
  isMinimized.value = !isMinimized.value;
}
</script>
