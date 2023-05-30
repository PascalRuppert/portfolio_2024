<template>
  <div class="col-span-1">
    <div class="mx-auto shadow-tool h-14 w-14 min-[600px]:h-18 min-[600px]:w-18 md:h-20 md:w-20 xl:h-22 xl:w-22 rounded-xl min-[600px]:rounded-2xl md:rounded-[1.125rem] xl:rounded-[1.25rem] bg-base-300">
      <img :src="'assets/tools/' + tool.logo" :alt="'Logo of ' + tool.name" />
    </div>
    <p class="mt-2 text-center min-[600px]:mt-3 lg:mt-4 text-tools min-[600px]:text-sm-tools xl:text-xl-tools font-jet text-typo-600">
      {{ tool.name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    tool: {
      type: Object,
      required: true,
    },
  },
};
</script>
