<template>
  <section class="relative w-full">
    <div class="sm:flex sm:flex-col sm:h-[calc(100vh-7rem)] sm:max-h-[37.5rem] md:max-h-[46.875rem] sm:min-h-[31.25rem] xl:max-h-[62.5rem]">
      <div class="w-full px-6 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0">
        <div class="grid w-full grid-cols-4 gap-x-4 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8">
          <div class="col-span-4 md:col-span-6">
            <h3 class="antialiased text-section font-jet text-var-3 xl:text-xl-section">
              {{ client }}
            </h3>
            <h1 class="mt-2 antialiased text-herotitle font-jet text-typo-600 lg:text-lg-herotitle xl:text-xl-herotitle xl:mt-4">{{ title }}_</h1>
            <p class="mt-4 antialiased uppercase font-jet text-expertise text-typo-500 xl:text-xl-expertise xl:mt-6">{{ year }}<span class="mx-1 font-bold">·</span>{{ tags.join(', ') }}</p>
          </div>
        </div>
      </div>

      <div class="mt-10 overflow-hidden aspect-w-8 aspect-h-5 sm:aspect-none sm:flex-1">
        <video v-if="cover.type === 'video'" class="object-cover w-full h-full sm:w-full sm:h-full" loop autoplay muted playsinline :data-src="'../assets/case/' + cover.src" aria-hidden="true" :src="'../assets/case/' + cover.src" :poster="'../assets/case/' + cover.poster"></video>
        <img v-if="cover.type === 'image'" class="object-cover w-full h-full sm:w-full sm:h-full" :src="'../assets/case/' + cover.src" :class="'object-' + cover.pos" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    client: {
      type: String,
      required: true,
    },
    title: {
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
    cover: {
      type: Object,
      required: true,
    },
  },
};
</script>
