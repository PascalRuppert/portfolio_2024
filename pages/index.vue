<template>
  <div class="pt-10 pb-24 sm:pt-20 xl:pb-30">
    <HomeHero />
    <CaseSection />
    <ProjectSection />
    <ContactSection />
  </div>
</template>

<script>
export default {
  data() {
    return {
      memojiDesktop: null,
      memojiMobile: null,
      observer: null,
      observerOptions: {
        root: null,
        rootMargin: '-35px',
        threshold: '0.5',
      },
    };
  },
  mounted() {
    this.memojiDesktop = document.getElementById('Memoji_desktop');
    this.memojiMobile = document.getElementById('Memoji_mobile');
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.memojiDesktop.classList.add('hidden');
        this.memojiMobile.classList.add('hidden');
      } else {
        this.memojiDesktop.classList.remove('hidden');
        this.memojiMobile.classList.remove('hidden');
      }
    }, this.observerOptions);
    this.observer.observe(document.querySelector('.memoji'));
  },
  beforeUnmount() {
    this.observer.disconnect();
    this.memojiDesktop.classList.remove('hidden');
    this.memojiMobile.classList.remove('hidden');
  },
};
</script>
