<template>
  <article>
    <h3 class="antialiased uppercase text-section font-jet text-var-3 xl:text-xl-section">
      {{ skill.group }}
    </h3>
    <ul class="flex flex-wrap flex-auto gap-4 mt-4">
      <li v-for="tag of skill.tags" :key="tag" class="px-3 py-2 rounded-lg xl:px-4 xl:py-[0.625rem] bg-base-300">
        <p class="antialiased uppercase font-jet text-expertise text-typo-500 xl:text-xl-expertise">
          {{ tag }}
        </p>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
};
</script>
