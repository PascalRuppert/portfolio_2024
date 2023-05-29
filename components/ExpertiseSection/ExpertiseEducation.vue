<template>
  <article>
    <div class="flex flex-row items-center gap-x-4 xl:gap-x-6">
      <img class="h-[4.313rem] w-[4.313rem] rounded xl:h-20 xl:w-20" :src="'assets/org_logos/' + education.logo" :alt="'Logo of ' + education.institution" />
      <div>
        <h3 class="antialiased text-itemtitle font-jet text-typo-600 xl:text-xl-itemtitle">
          {{ education.major }}
          <span class="font-light">{{ education.degree }}</span>
        </h3>
        <p class="mt-0.5 antialiased font-bold text-detail font-jet text-typo-500 xl:text-xl-detail xl:font-bold">
          {{ education.institution }}
        </p>
        <p class="antialiased uppercase text-detail font-jet text-typo-400 xl:text-xl-detail xl:font-normal">
          {{ education.duration }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    education: {
      type: Object,
      required: true,
    },
  },
};
</script>
