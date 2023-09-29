<template>
  <section class="relative w-full">
    <div class="sm:flex sm:flex-col sm:h-[calc(100vh-7rem)] sm:max-h-[37.5rem] md:max-h-[46.875rem] sm:min-h-[31.25rem] xl:max-h-[62.5rem]">
      <div class="w-full px-6 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0">
        <div class="grid w-full grid-cols-4 gap-x-4 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8">
          <div class="col-span-4 md:col-span-6">
            <h3 class="antialiased text-section font-jet text-var-3 xl:text-xl-section">
              {{ client }}
            </h3>
            <div class="relative block">
              <h1 id="Title" class="absolute antialiased text-herotitle font-jet text-typo-600 lg:text-lg-herotitle xl:text-xl-herotitle after:content-['\_'] after:font-light" aria-hidden="true"></h1>
              <h1 class="mt-2 antialiased opacity-0 xl:mt-4 text-herotitle font-jet text-typo-600 lg:text-lg-herotitle xl:text-xl-herotitle">
                {{ title }}
              </h1>
            </div>
            <p class="mt-4 antialiased uppercase font-jet text-expertise text-typo-500 xl:text-xl-expertise xl:mt-6">{{ year }}<span class="mx-1 font-bold">·</span>{{ tags.join(', ') }}</p>
          </div>
        </div>
      </div>

      <div class="mt-10 overflow-hidden aspect-w-8 aspect-h-5 sm:aspect-none sm:flex-1">
        <div class="hidden xl:block">
          <div class="absolute w-full bottom-4">
            <div class="flex items-center justify-center w-10 h-10 p-2 mx-auto bg-white rounded-full shadow-lg animate-bounce dark:bg-slate-800 ring-1 ring-slate-900/5 dark:ring-slate-200/20">
              <svg class="w-6 h-6 text-var-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>

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
  data() {
    return {
      delay: 50,
      position: this.title.length - 20,
    };
  },
  mounted() {
    this.typewriter();
  },
  methods: {
    typewriter() {
      document.querySelector('#Title').innerHTML = this.title.substring(0, this.position);
      if (this.position++ !== this.title.length) {
        document.querySelector('#Title').classList.add('after:animate-none');
        setTimeout(this.typewriter, this.delay);
      } else {
        document.querySelector('#Title').classList.remove('after:animate-none');
        document.querySelector('#Title').classList.add('after:animate-cursor-blink');
      }
    },
  },
};
</script>
