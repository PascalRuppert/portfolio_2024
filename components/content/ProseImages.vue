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
      <img :src="'../assets/case/' + img.src" :alt="img.alt" class="object-cover object-center w-full h-full" />
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
</script>
