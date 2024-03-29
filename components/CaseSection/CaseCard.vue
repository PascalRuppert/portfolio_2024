<template>
  <a :href="link" class="col-span-4 sm:col-span-2 md:col-span-3 group hover:cursor-pointer">
    <div class="overflow-hidden rounded aspect-w-4 aspect-h-3">
      <picture>
        <source media="(min-width: 1408px)" :srcset="img + '-640.avif 640w,' + img + '-1280.avif 1280w,' + img + '-1600.avif 1600w'" sizes="39em" type="image/avif" />
        <source media="(min-width: 1408px)" :srcset="img + '-640.webp 640w,' + img + '-1280.webp 1280w,' + img + '-1600.webp 1600w'" sizes="39em" type="image/webp" />
        <source media="(min-width: 1408px)" :srcset="img + '-640.jpg 640w,' + img + '-1280.jpg 1280w,' + img + '-1600.jpg 1600w'" sizes="39em" />

        <source media="(min-width: 1280px)" :srcset="img + '-640.avif 640w,' + img + '-1280.avif 1280w,' + img + '-1600.avif 1600w'" sizes="calc((100vw - 10em) / 2)" type="image/avif" />
        <source media="(min-width: 1280px)" :srcset="img + '-640.webp 640w,' + img + '-1280.webp 1280w,' + img + '-1600.webp 1600w'" sizes="calc((100vw - 10em) / 2)" type="image/webp" />
        <source media="(min-width: 1280px)" :srcset="img + '-640.jpg 640w,' + img + '-1280.jpg 1280w,' + img + '-1600.jpg 1600w'" sizes="calc((100vw - 10em) / 2)" />

        <source media="(min-width: 720px)" :srcset="img + '-400.avif 400w,' + img + '-640.avif 640w,' + img + '-800.avif 800w,' + img + '-960.avif 960w,' + img + '-1280.avif 1280w,' + img + '-1600.avif 1600w'" sizes="calc((100vw - 7.5em) / 2)" type="image/avif" />
        <source media="(min-width: 720px)" :srcset="img + '-400.webp 400w,' + img + '-640.webp 640w,' + img + '-800.webp 800w,' + img + '-960.webp 960w,' + img + '-1280.webp 1280w,' + img + '-1600.webp 1600w'" sizes="calc((100vw - 7.5em) / 2)" type="image/webp" />
        <source media="(min-width: 720px)" :srcset="img + '-400.jpg 400w,' + img + '-640.jpg 640w,' + img + '-800.jpg 800w,' + img + '-960.jpg 960w,' + img + '-1280.jpg 1280w,' + img + '-1600.jpg 1600w'" sizes="calc((100vw - 7.5em) / 2)" />

        <source :srcset="img + '-400.avif 400w,' + img + '-640.avif 640w,' + img + '-800.avif 800w,' + img + '-960.avif 960w,' + img + '-1280.avif 1280w,' + img + '-1600.avif 1600w'" sizes="calc(100vw - 3em)" type="image/avif" />
        <source :srcset="img + '-400.webp 400w,' + img + '-640.webp 640w,' + img + '-800.webp 800w,' + img + '-960.webp 960w,' + img + '-1280.webp 1280w,' + img + '-1600.webp 1600w'" sizes="calc(100vw - 3em)" type="image/webp" />
        <source :srcset="img + '-400.jpg 400w,' + img + '-640.jpg 640w,' + img + '-800.jpg 800w,' + img + '-960.jpg 960w,' + img + '-1280.jpg 1280w,' + img + '-1600.jpg 1600w'" sizes="calc(100vw - 3em)" />
        <img :src="img + '-1600.jpg'" class="object-cover object-center w-full h-full ease-in-out sm:motion-safe:transition sm:motion-safe:duration-200 sm:group-hover:scale-105" :alt="$t('Image_alt.caseCard', { name: client })" />
      </picture>
    </div>
    <h3 class="mt-4 antialiased text-itemtitle font-jet text-typo-600 xl:text-xl-itemtitle text-shadow">
      {{ title }}
    </h3>
    <p class="mt-2 antialiased text-body font-jet text-typo-500 xl:text-xl-body">
      {{ description }}
    </p>
    <div class="inline-block mt-4 antialiased uppercase text-btn text-typo-600 font-jet xl:text-xl-btn">
      <p class="after:content-['->'] after:ml-2">{{ $t('CaseSection.cta') }}</p>
      <div class="w-full h-px mt-px bg-typo-600 sm:bg-[unset] sm:bg-gradient-to-r sm:from-link sm:to-link sm:bg-no-repeat sm:[background-position:0] sm:[background-size:0] sm:motion-safe:transition-all sm:motion-safe:duration-200 sm:group-hover:[background-size:100%]"></div>
    </div>
  </a>
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
    client: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      img: '/assets/case/' + this.$props.image,
      link: this.$props.slug.replace('/en/', '/'),
    };
  },
};
</script>
