<template>
  <div>
    <svg v-if="icon === 'placeholder'" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2zM9 9h1m-1 4h6m-6 4h6" />
      </g>
    </svg>
  </div>
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
