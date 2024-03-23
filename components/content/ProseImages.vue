<template>
  <div class="grid w-full grid-cols-4 gap-4 mt-10 sm:gap-6 xl:gap-8 xl:mt-16">
    <div
      v-for="(img, index) of images"
      :key="img.alt"
      class="col-span-4 overflow-hidden"
      :class="{
        'sm:col-span-2': index > 0 && images.length > 2,
        'aspect-w-3 aspect-h-2': aspect,
      }"
    >
      <picture>
        <source media="(min-width: 1408px)" :srcset="path + img.src + '-960.avif 960w,' + path + img.src + '-1280.avif 1280w,' + path + img.src + '-1600.avif 1600w,' + path + img.src + '-1800.avif 1800w'" sizes="53.0625em" type="image/avif" />
        <source media="(min-width: 1408px)" :srcset="path + img.src + '-960.webp 960w,' + path + img.src + '-1280.webp 1280w,' + path + img.src + '-1600.webp 1600w,' + path + img.src + '-1800.webp 1800w'" sizes="53.0625em" type="image/webp" />
        <source media="(min-width: 1408px)" :srcset="path + img.src + '-960.jpg 960w,' + path + img.src + '-1280.jpg 1280w,' + path + img.src + '-1600.jpg 1600w,' + path + img.src + '-1800.jpg 1800w'" sizes="53.0625em" />

        <source
          media="(min-width: 1280px)"
          :srcset="path + img.src + '-800.avif 800w,' + path + img.src + '-960.avif 960w,' + path + img.src + '-1280.avif 1280w,' + path + img.src + '-1600.avif 1600w,' + path + img.src + '-1800.avif 1800w'"
          sizes="calc(((100vw - 288px) * 0.666) + 96px)"
          type="image/avif"
        />
        <source
          media="(min-width: 1280px)"
          :srcset="path + img.src + '-800.webp 800w,' + path + img.src + '-960.webp 960w,' + path + img.src + '-1280.webp 1280w,' + path + img.src + '-1600.webp 1600w,' + path + img.src + '-1800.webp 1800w'"
          sizes="calc(((100vw - 288px) * 0.666) + 96px)"
          type="image/webp"
        />
        <source media="(min-width: 1280px)" :srcset="path + img.src + '-800.jpg 800w,' + path + img.src + '-960.jpg 960w,' + path + img.src + '-1280.jpg 1280w,' + path + img.src + '-1600.jpg 1600w,' + path + img.src + '-1800.jpg 1800w'" sizes="calc(((100vw - 288px) * 0.666) + 96px)" />

        <source
          media="(min-width: 960px)"
          :srcset="path + img.src + '-640.avif 640w,' + path + img.src + '-800.avif 800w,' + path + img.src + '-960.avif 960w,' + path + img.src + '-1280.avif 1280w,' + path + img.src + '-1600.avif 1600w'"
          sizes="calc(((100vw - 216px) * 0.666) + 72px)"
          type="image/avif"
        />
        <source
          media="(min-width: 960px)"
          :srcset="path + img.src + '-640.webp 640w,' + path + img.src + '-800.webp 800w,' + path + img.src + '-960.webp 960w,' + path + img.src + '-1280.webp 1280w,' + path + img.src + '-1600.webp 1600w'"
          sizes="calc(((100vw - 216px) * 0.666) + 72px)"
          type="image/webp"
        />
        <source media="(min-width: 960px)" :srcset="path + img.src + '-640.jpg 640w,' + path + img.src + '-800.jpg 800w,' + path + img.src + '-960.jpg 960w,' + path + img.src + '-1280.jpg 1280w,' + path + img.src + '-1600.jpg 1600w'" sizes="calc(((100vw - 216px) * 0.666) + 72px)" />

        <source media="(min-width: 720px)" :srcset="path + img.src + '-640.avif 640w,' + path + img.src + '-800.avif 800w,' + path + img.src + '-960.avif 960w,' + path + img.src + '-1280.avif 1280w,' + path + img.src + '-1600.avif 1600w'" sizes="calc(100vw - 96px)" type="image/avif" />
        <source media="(min-width: 720px)" :srcset="path + img.src + '-640.webp 640w,' + path + img.src + '-800.webp 800w,' + path + img.src + '-960.webp 960w,' + path + img.src + '-1280.webp 1280w,' + path + img.src + '-1600.webp 1600w'" sizes="calc(100vw - 96px)" type="image/webp" />
        <source
          media="(min-width: 720px)"
          :srcset="path + img.src + '-640.jpg 640w,' + path + img.src + '-800.jpg 800w,' + path + img.src + '-960.jpg 960w,' + path + img.src + '-1280.jpg 1280w,' + path + img.src + '-1600.jpg 1600w,' + path + img.src + '-1800.jpg 1800w'"
          sizes="calc(100vw - 96px)"
        />

        <source :srcset="path + img.src + '-400.avif 400w,' + path + img.src + '-640.avif 640w,' + path + img.src + '-800.avif 800w,' + path + img.src + '-960.avif 960w,' + path + img.src + '-1280.avif 1280w,' + path + img.src + '-1600.avif 1600w'" sizes="calc(100vw - 48px)" type="image/avif" />
        <source :srcset="path + img.src + '-400.webp 400w,' + path + img.src + '-640.webp 640w,' + path + img.src + '-800.webp 800w,' + path + img.src + '-960.webp 960w,' + path + img.src + '-1280.webp 1280w,' + path + img.src + '-1600.webp 1600w'" sizes="calc(100vw - 48px)" type="image/webp" />
        <source :srcset="path + img.src + '-400.jpg 400w,' + path + img.src + '-640.jpg 640w,' + path + img.src + '-800.jpg 800w,' + path + img.src + '-960.jpg 960w,' + path + img.src + '-1280.jpg 1280w,' + path + img.src + '-1600.jpg 1600w'" sizes="calc(100vw - 48px)" />
        <img :src="path + img.src + '-1800.jpg'" class="object-cover object-center w-full h-full" :alt="img.alt" />
      </picture>
    </div>
  </div>
</template>

<script setup>
defineProps({
  images: {
    type: Object,
    required: true,
  },
  aspect: {
    type: Boolean,
    required: false,
    default: true,
  },
});
const path = '../assets/case/';
</script>
