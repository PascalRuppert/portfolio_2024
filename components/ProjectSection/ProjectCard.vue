<template>
  <li
    class="flex flex-col justify-between h-full col-span-4 px-6 pt-6 pb-8 rounded-lg sm:col-span-2 md:col-span-3 lg:col-span-2 bg-base-300 group/project hover:cursor-not-allowed group-[.minimized]:hidden group-[.minimized]:[&:nth-child(-n+2)]:flex lg:group-[.minimized]:[&:nth-child(-n+3)]:flex xl:group-[.minimized]:flex"
  >
    <div>
      <div class="flex items-center place-content-between">
        <ProjectIcon :icon="icon" class="w-10 h-10 text-var-2" />
        <IconsProjectLock class="w-4 h-4 text-[#BBB8BF] group-hover/project:text-var-4" />
      </div>
      <div class="mt-4">
        <h3 class="antialiased text-itemtitle font-jet text-typo-600 xl:text-xl-itemtitle text-shadow">
          {{ title }}
        </h3>
        <p class="mt-2 antialiased text-body font-jet text-typo-500 xl:text-xl-body">
          {{ description }}
        </p>
      </div>
    </div>

    <p class="mt-8 antialiased uppercase font-jet text-expertise text-typo-onCard xl:text-xl-expertise">{{ year }}<span class="mx-1 font-bold">·</span>{{ tags.join(', ') }}</p>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>
