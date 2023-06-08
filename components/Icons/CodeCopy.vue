<template>
  <svg v-if="icon === 'copy'" class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
      <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </g>
  </svg>

  <svg v-else-if="icon === 'copied'" class="h-full, w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 12l5 5L20 7" />
  </svg>
</template>

<script lang="ts">
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
