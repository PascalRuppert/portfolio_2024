<template>
  <NuxtLink :to="slug" class="col-span-4 sm:col-span-2 md:col-span-3 group hover:cursor-pointer">
    <div class="overflow-hidden rounded aspect-w-4 aspect-h-3">
      <img :src="'../assets/case/' + image" :alt="image" class="object-cover object-center w-full h-full transition duration-150 ease-in-out group-hover:scale-105" />
    </div>
    <h3 class="mt-4 antialiased text-itemtitle font-jet text-typo-600 xl:text-xl-itemtitle text-shadow">
      {{ title }}
    </h3>
    <p class="mt-2 antialiased text-body font-jet text-typo-500 xl:text-xl-body">
      {{ description }}
    </p>
    <div class="inline-block mt-4 antialiased uppercase text-btn text-typo-600 font-jet xl:text-xl-btn">
      View project ->
      <div class="w-full h-px mt-px bg-typo-600 sm:bg-[unset] sm:bg-gradient-to-r sm:from-link sm:to-link sm:bg-no-repeat sm:[background-position:0] sm:[background-size:0] sm:motion-safe:transition-all sm:motion-safe:duration-150 sm:group-hover:[background-size:100%]"></div>
    </div>
  </NuxtLink>
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
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
