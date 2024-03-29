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
              <h1 class="mt-2 antialiased opacity-0 xl:mt-4 text-herotitle font-jet text-typo-600 lg:text-lg-herotitle xl:text-xl-herotitle after:content-['\_']">
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

        <video v-if="cover.type === 'video'" class="object-cover w-full h-full sm:w-full sm:h-full" loop autoplay muted playsinline :poster="'/assets/case/' + cover.poster + '.jpg'" aria-hidden="true">
          <source media="(min-width: 1280px)" :src="path + cover.src + '-1920.webm'" type="video/webm" />
          <source media="(min-width: 1280px)" :src="path + cover.src + '-1920.mp4'" type="video/mp4" />
          <source media="(min-width: 1280px)" :src="path + cover.src + '-1920.mov'" type="video/mov" />

          <source media="(min-width: 854px)" :src="path + cover.src + '-1280.webm'" type="video/webm" />
          <source media="(min-width: 854px)" :src="path + cover.src + '-1280.mp4'" type="video/mp4" />
          <source media="(min-width: 854px)" :src="path + cover.src + '-1280.mov'" type="video/mov" />

          <source media="(min-width: 640px)" :src="path + cover.src + '-854.webm'" type="video/webm" />
          <source media="(min-width: 640px)" :src="path + cover.src + '-845.mp4'" type="video/mp4" />
          <source media="(min-width: 640px)" :src="path + cover.src + '-845.mov'" type="video/mov" />

          <source :src="path + cover.src + '-640.webm'" type="video/webm" />
          <source :src="path + cover.src + '-640.mp4'" type="video/mp4" />
          <source :src="path + cover.src + '-640.mov'" type="video/mov" />
        </video>

        <picture v-if="cover.type === 'image'">
          <source
            :srcset="
              path +
              cover.src +
              '-400.avif 400w,' +
              path +
              cover.src +
              '-640.avif 640w,' +
              path +
              cover.src +
              '-800.avif 800w,' +
              path +
              cover.src +
              '-960.avif 960w,' +
              path +
              cover.src +
              '-1280.avif 1280w,' +
              path +
              cover.src +
              '-1600.avif 1600w,' +
              path +
              cover.src +
              '-1800.avif 1800w,' +
              path +
              cover.src +
              '-2000.avif 2000w'
            "
            type="image/avif"
          />
          <source
            :srcset="
              path +
              cover.src +
              '-400.webp 400w,' +
              path +
              cover.src +
              '-640.webp 640w,' +
              path +
              cover.src +
              '-800.webp 800w,' +
              path +
              cover.src +
              '-960.webp 960w,' +
              path +
              cover.src +
              '-1280.webp 1280w,' +
              path +
              cover.src +
              '-1600.webp 1600w,' +
              path +
              cover.src +
              '-1800.webp 1800w,' +
              path +
              cover.src +
              '-2000.webp 2000w'
            "
            type="image/webp"
          />
          <source
            :srcset="
              path +
              cover.src +
              '-400.jpg 400w,' +
              path +
              cover.src +
              '-640.jpg 640w,' +
              path +
              cover.src +
              '-800.jpg 800w,' +
              path +
              cover.src +
              '-960.jpg 960w,' +
              path +
              cover.src +
              '-1280.jpg 1280w,' +
              path +
              cover.src +
              '-1600.jpg 1600w,' +
              path +
              cover.src +
              '-1800.jpg 1800w,' +
              path +
              cover.src +
              '-2000.jpg 2000w'
            "
          />
          <img :src="path + cover.src + '-400.jpg'" class="object-cover w-full h-full sm:w-full sm:h-full" :class="'object-' + cover.pos" :alt="$t('Image_alt.caseCard', { name: client })" />
        </picture>
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
      path: '/assets/case/',
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
