<template>
  <div class="relative w-full mt-4 mb-6 xl:mt-5 xl:mb-[1.75rem] overflow-hidden border-[0.5px] border-solid rounded-lg prose-code bg-base-300 border-base-100 code-prose">
    <div v-if="opt_header" class="flex flex-row items-center justify-between px-3 py-2 border-b border-solid border-typo-400/20">
      <div class="flex items-center">
        <div v-if="language" class="inline w-5 h-5 mr-2 text-typo-500">
          <IconsCodeType :language="language" />
        </div>
        <span v-if="filename" class="antialiased font-bold xl:font-bold text-detail xl:text-xl-detail text-typo-500 font-jet">{{ filename }}</span>
      </div>
      <div v-if="opt_copy" class="w-5 h-5">
        <div v-if="copied" class="text-var-3">
          <IconsCodeCopy icon="copied" />
        </div>
        <button v-else class="text-typo-400 sm:hover:text-link" @click="copy(code)">
          <IconsCodeCopy icon="copy" />
        </button>
      </div>
    </div>
    <div class="relative">
      <div
        v-for="line of highlights"
        :key="line"
        class="absolute left-0 right-0 z-0 bg-base-100/50"
        :style="{
          top: 'calc(0.75rem + ' + (line - startline) + ' * ' + rem_value + ')',
          height: rem_value,
        }"
      ></div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '#imports';

export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: null,
    },
    filename: {
      type: String,
      default: null,
    },
    highlights: {
      type: Array as () => number[],
      default: () => [],
    },
    meta: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      copied: false,
      rem_value: '',
      opt_copy: true,
      opt_numbered: true,
      opt_header: true,
      startline: 1,
    };
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    this.processMeta();
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    copy(text: string) {
      navigator.clipboard.writeText(text);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    },
    handleResize() {
      this.rem_value = window.matchMedia('(min-width: 1280px)').matches ? '1.5rem' : '1.25rem';
    },
    processMeta() {
      if (this.meta !== null) {
        const regex = /\[(.*?)\]|{(.*?)\}/g;
        const options = this.meta.replace(regex, '').match(/\S+/g);

        if (options !== null) {
          if (options.includes('noheader')) {
            this.opt_header = false;
          }
          if (options.includes('nocopy')) {
            this.opt_copy = false;
          }
          if (options.includes('nonumber')) {
            this.opt_numbered = false;
          }
          const startline = options.findIndex(element => element.includes('startline='));
          if (startline !== -1) {
            this.startline = parseInt(options[startline].replace('startline=', ''));
          }
        }
      }
    },
  },
});
</script>

<style scoped>
:slotted(pre) {
  @apply flex m-0 py-3 px-4 font-jet text-detail xl:text-xl-detail overflow-x-auto;
}

:slotted(pre code) {
  @apply antialiased font-jet text-typo-500 flex flex-col z-[1];
  counter-reset: step;
  counter-increment: step v-bind(startline - 1);
}

:slotted(pre code .line) {
  @apply inline-table;
}

:slotted(pre code .line::before) {
  @apply w-4 mr-4 inline-block text-right text-typo-400/40;
  counter-increment: step;
  content: v-bind('opt_numbered ? "counter(step)" : ""');
}

:slotted(pre code .highlight.line::before) {
  @apply text-typo-400/90;
}
</style>
