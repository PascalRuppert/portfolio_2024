<template>
  <article>
    <div class="flex flex-row items-center gap-x-4 xl:gap-x-6">
      <picture>
        <source type="image/avif" :srcset="'/assets/org_logos/' + workplace.logo + '.avif'" />
        <source type="image/webp" :srcset="'/assets/org_logos/' + workplace.logo + '.webp'" />
        <img :src="'/assets/org_logos/' + workplace.logo + '.jpg'" :alt="$t('Image_alt.logo', { name: workplace.name })" class="h-[4.313rem] w-[4.313rem] rounded xl:h-20 xl:w-20" />
      </picture>
      <div>
        <h3 class="antialiased text-itemtitle font-jet text-typo-600 xl:text-xl-itemtitle">
          {{ workplace.name }}
          <span :class="workplace.shorten && 'hidden md:inline'" class="font-light"> {{ workplace.corp }}</span>
        </h3>
        <p class="mt-0.5 antialiased font-normal uppercase text-detail font-jet text-typo-400 xl:text-xl-detail xl:font-normal">
          {{ workplace.location.city }}<span class="hidden md:inline">, {{ workplace.location.country }}</span> · {{ workplace.tenure }}
        </p>
      </div>
    </div>

    <ol>
      <li v-for="position of workplace.positions" :key="position.title" class="flex pl-[1.813rem] gap-x-[3.125rem] xl:pl-[2.125rem] xl:gap-x-[3.938rem] group">
        <div>
          <div class="h-[0.625rem] w-[0.625rem] xl:h-[0.688rem] xl:w-[0.688rem] rounded-full absolute mt-10 group-first:mt-8 xl:mt-[2.813rem] xl:group-first:mt-[2.813rem] bg-[#D9D9D9] outline outline-[0.25rem] xl:outline-[0.375rem] outline-base-200"></div>
          <div class="w-0.5 xl:w-[0.188rem] h-[4.125rem] xl:h-[4.625rem] ml-1 bg-[#475C6D] group-last:h-[2.625rem] group-only:h-[2.125rem] xl:group-only:h-[2.625rem] group-first:h-[3.625rem] xl:group-first:h-[4.625rem]"></div>
        </div>
        <div class="mt-6 group-first:mt-4 xl:group-first:mt-6">
          <h4 class="antialiased italic text-job xl:text-xl-job font-jet text-typo-600">
            {{ position.title }}
          </h4>
          <p class="mt-0.5 antialiased uppercase text-detail xl:text-xl-detail font-jet text-typo-400">
            {{ position.duration }}
          </p>
        </div>
      </li>
    </ol>
  </article>
</template>

<script>
export default {
  props: {
    workplace: {
      type: Object,
      required: true,
    },
  },
};
</script>
