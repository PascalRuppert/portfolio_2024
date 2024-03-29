<template>
  <div>
    <svg v-if="icon === 'placeholder'" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2zM9 9h1m-1 4h6m-6 4h6" />
      </g>
    </svg>

    <svg v-if="icon === 'radio'" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 3L4.629 6.749A1 1 0 0 0 4 7.677V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H4.5M4 12h16M7 12v-2m10 6v.01M13 16v.01"></path>
    </svg>

    <svg v-if="icon === 'health'" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <path d="M19.5 13.572L12 21l-2.896-2.868m-6.117-8.104A5 5 0 0 1 12 7.006a5 5 0 1 1 7.5 6.572" />
        <path d="M3 13h2l2 3l2-6l1 3h3" />
      </g>
    </svg>

    <svg v-if="icon === 'insurance'" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.46 20.846A12 12 0 0 1 3.5 6A12 12 0 0 0 12 3a12 12 0 0 0 8.5 3a12 12 0 0 1-.09 7.06M15 19l2 2l4-4" />
    </svg>

    <svg v-if="icon === 'cloud'" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 18.004H6.657C4.085 18 2 15.993 2 13.517c0-2.475 2.085-4.482 4.657-4.482c.393-1.762 1.794-3.2 3.675-3.773c1.88-.572 3.956-.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57.811 3.128 1.986M19 22v-6m3 3l-3-3l-3 3"
      />
    </svg>

    <svg v-if="icon === 'process'" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <path d="M3 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M17 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
        <path d="M19 8v5a5 5 0 0 1-5 5h-3l3-3m0 6l-3-3m-6-2v-5a5 5 0 0 1 5-5h3l-3-3m0 6l3-3" />
      </g>
    </svg>

    <svg v-if="icon === 'plane'" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.639 10.258l4.83-1.294a2 2 0 1 1 1.035 3.863L6.015 16.71l-4.45-5.02l2.897-.776l2.45 1.414l2.897-.776l-3.743-6.244l2.898-.777l5.675 5.727zM3 21h18" />
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
