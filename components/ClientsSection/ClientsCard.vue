<template>
  <li class="flex items-center justify-center h-20 col-span-2 sm:col-span-1 sm:h-18 lg:h-[5.5rem] bg-white rounded-lg">
    <img class="h-8 lg:h-[2.313rem]" :src="'assets/client_logos/' + logo" :alt="'Logo of ' + name" />
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
