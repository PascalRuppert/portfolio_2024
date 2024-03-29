<template>
  <aside class="sticky self-start hidden col-span-1 col-start-1 top-22 lg:block xl:top-24">
    <nav>
      <h4 class="font-bold text-detail xl:text-xl-detail xl:font-bold font-jet text-typo-500">On this page</h4>
      <ul role="list" class="relative mt-2 space-y-1 before:absolute before:h-[calc(100%-0.5rem)] before:w-0.5 before:top-1 before:-left-px before:rounded before:bg-typo-500/10 xl:mt-3 xl:space-y-2">
        <li v-for="{ id, text } in toc" :id="'toc_' + id" :key="id" class="relative">
          <nuxt-link
            :to="{ hash: '#' + id }"
            class="block w-full pl-3 font-jet text-detail xl:text-xl-detail before:pointer-events-none before:absolute before:-left-px before:top-1/2 before:h-3 before:w-0.5 xl:before:h-4 before:-translate-y-1/2 before:rounded hover:before:block"
            :class="{
              'hover:text-typo-500 text-typo-400 before:bg-typo-400/50 before:hidden': id !== activeToc,
              'text-var-1 before:bg-var-1  before:block': id === activeToc,
            }"
          >
            {{ text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  props: {
    toc: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeToc: '',
      observer: null,
      observerOptions: {
        root: null,
        rootMargin: '-80px 0px -300px',
        threshold: '1',
      },
    };
  },
  mounted() {
    setTimeout(() => {
      document.documentElement.classList.add('scroll-smooth');
      document.querySelectorAll('.article_content h2[id]').forEach(section => {
        this.observer.observe(section);
      });
    }, 200);
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting) {
          this.activeToc = id;
        }
      });
    }, this.observerOptions);
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
};
</script>
