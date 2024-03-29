<template>
  <li class="flex items-center justify-center col-span-2 mx-2 bg-white rounded-lg sm:mx-0 h-18 sm:col-span-1 lg:h-20 xl:h-22">
    <img class="h-8 lg:h-[2.313rem]" :src="'/assets/client_logos/' + logo" :alt="'Logo of ' + name" />
  </li>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
  },
};
</script>
