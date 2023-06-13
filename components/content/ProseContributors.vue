<template>
  <div class="mt-14 xl:mt-20">
    <p v-if="company.name != undefined" class="antialiased italic text-body font-jet text-typo-400 xl:text-xl-body">
      Special thanks to
      <span v-for="(person, index) of contributors" :key="person" class="inline-block whitespace-nowrap">{{ index + 1 === contributors.length ? person : person + ',&nbsp;' }}</span>
      and the team at
      <NuxtLink :to="company.link" target="_blank" rel="noopener noreferrer"
        ><span
          class="underline underline-offset-[6px] sm:no-underline text-var-2 sm:bg-gradient-to-r from-var-2 to-var-2 sm:bg-no-repeat [background-position:0_121%] [background-size:100%_5px] sm:motion-safe:transition-[background,color] sm:motion-safe:duration-200 sm:hover:[background-size:100%_100%] focus:[background-size:100%_100%] cursor-pointer sm:hover:text-base-200"
          >{{ company.name }}</span
        ></NuxtLink
      >.
    </p>
    <p v-else class="antialiased italic text-body font-jet text-typo-400 xl:text-xl-body">
      Special thanks to
      <span v-for="(person, index) of contributors" :key="person" class="inline-block whitespace-nowrap">{{ index + 1 === contributors.length - 1 ? person + ' and&nbsp;' : index + 1 === contributors.length ? person : person + ',&nbsp;' }}</span
      >.
    </p>
  </div>
</template>

<script setup>
defineProps({
  contributors: {
    type: Array,
    required: true,
  },
  company: {
    type: Object,
    required: false,
    default() {
      return {};
    },
  },
});
</script>
