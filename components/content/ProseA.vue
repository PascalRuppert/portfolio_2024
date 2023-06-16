<template>
  <NuxtLink v-bind="attributes">
    <span
      class="cursor-pointer underline underline-offset-[6px] sm:no-underline text-var-2 sm:bg-gradient-to-r from-var-2 to-var-2 sm:bg-no-repeat [background-position:0_121%] [background-size:100%_5px] sm:motion-safe:transition-[background,color] sm:motion-safe:duration-200 sm:hover:[background-size:100%_100%] sm:hover:text-base-200"
    >
      <slot />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  blank: {
    type: Boolean,
    default: false,
  },
});

function isHttpUrl(string: string | URL) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === 'http:' || url.protocol === 'https:';
}
const attributes = {
  to: props.href,
  target: '_self',
};
if (isHttpUrl(props.href) || props.blank) {
  attributes.target = '_blank';
}
</script>
