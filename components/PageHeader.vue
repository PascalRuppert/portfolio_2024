<template>
  <header class="fixed top-0 z-30 w-full bg-base-200/95 backdrop-blur-md">
    <div id="Header_desktop" class="hidden sm:block">
      <GridLines class="-z-10" />
      <div class="flex flex-row flex-wrap content-center justify-between w-full px-6 h-18 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0">
        <a :href="localePath('/')">
          <IconsMenuBack v-if="activeRoute === 'case-slug'" class="w-10 h-10 text-typo-600 hover:-translate-x-1 motion-safe:transition-all motion-safe:duration-200" />
          <div v-else id="Memoji_desktop" class="w-[2.375rem] h-[2.375rem] group select-none" :class="{ hidden: activeRoute === 'index' }">
            <picture>
              <source type="image/avif" srcset="../assets/memoji/Memoji.avif" />
              <source type="image/webp" srcset="../assets/memoji/Memoji.webp" />
              <img src="../assets/memoji/Memoji.png" :alt="$t('Image_alt.memoji')" class="block w-full h-full group-hover:hidden" />
            </picture>
            <picture>
              <source type="image/avif" srcset="../assets/memoji/Memoji_wink.avif" />
              <source type="image/webp" srcset="../assets/memoji/Memoji_wink.webp" />
              <img src="../assets/memoji/Memoji_wink.png" :alt="$t('Image_alt.memoji')" class="hidden w-full h-full group-hover:block" />
            </picture>
          </div>
        </a>
        <nav class="flex flex-row flex-wrap content-center antialiased gap-x-10 text-typo-600 text-body xl:text-xl-body font-jet">
          <a :href="localePath('/')" :class="{ active: activeRoute === 'index' }" class="group">
            <p class="before:content-['//_']">{{ $t('nav.home') }}</p>
            <div class="w-full h-px mt-px bg-gradient-to-r from-link to-link bg-no-repeat [background-position:0] [background-size:0] motion-safe:transition-all motion-safe:duration-200 group-hover:[background-size:100%]"></div>
          </a>
          <a :href="localePath('/about')" :class="{ active: activeRoute === 'about' }" class="group">
            <p class="before:content-['//_']">{{ $t('nav.about') }}</p>
            <div class="w-full h-px mt-px bg-gradient-to-r from-link to-link bg-no-repeat [background-position:0] [background-size:0] motion-safe:transition-all motion-safe:duration-200 group-hover:[background-size:100%]"></div>
          </a>
          <a href="mailto:ixd.pascalruppert@gmail.com" class="group">
            <p class="before:content-['//_']">{{ $t('nav.contact') }}</p>
            <div class="w-full h-px mt-px bg-gradient-to-r from-link to-link bg-no-repeat [background-position:0] [background-size:0] motion-safe:transition-all motion-safe:duration-200 group-hover:[background-size:100%]"></div>
          </a>
          <LanguageSwitch />
        </nav>
      </div>
    </div>

    <div id="Header_mobile" class="sm:hidden">
      <GridLines class="-z-10" />
      <div class="flex flex-row flex-wrap content-center justify-between w-full px-6 h-14 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0">
        <a :href="localePath('/')">
          <IconsMenuBack v-if="activeRoute === 'case-slug'" class="w-8 h-8 text-typo-600" />
          <picture v-else>
            <source type="image/avif" srcset="../assets/memoji/Memoji.avif" />
            <source type="image/webp" srcset="../assets/memoji/Memoji.webp" />
            <img id="Memoji_mobile" src="../assets/memoji/Memoji.png" alt="Memoji of Pascal" class="w-8 h-8" :class="{ hidden: activeRoute === 'index' }" />
          </picture>
        </a>
        <button id="MenuBtn" aria-label="Menu" class="z-10 w-8 h-8 text-typo-600" @click="mobileMenu()">
          <IconsMenuClose v-if="menuOpen" />
          <IconsMenuButton v-else />
        </button>
      </div>

      <div id="Menu_mobile" class="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen pb-20 pl-8 bg-base-100 pt-28" :class="{ hidden: !menuOpen }">
        <div>
          <LanguageSwitch />
          <nav class="flex flex-col flex-wrap items-start antialiased gap-y-4 text-typo-600 text-menu font-jet">
            <a :href="localePath('/')" :class="{ active: activeRoute === 'index' }">
              <p>{{ $t('nav.home') }}</p>
            </a>
            <a :href="localePath('/about')" :class="{ active: activeRoute === 'about' }">
              <p>{{ $t('nav.about') }}</p>
            </a>
            <a href="mailto:ixd.pascalruppert@gmail.com">
              <p>{{ $t('nav.contact') }}</p>
            </a>
          </nav>

          <div class="flex flex-col items-start mt-14 gap-y-6 text-footer text-typo-600 font-jet">
            <a href="https://www.linkedin.com/in/pascalruppertixd/" target="_blank" class="inline-flex gap-x-2">
              <IconsSocialsLinkedIn class="w-4 h-4" />
              <p>LinkedIn</p>
            </a>
            <a href="https://github.com/PascalRuppert" target="_blank" class="inline-flex gap-x-2">
              <IconsSocialsGithub class="w-4 h-4" />
              <p>Github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeRoute: this.$route.name.slice(0, -5),
      menuOpen: false,
      scrollPosition: 0,
    };
  },
  watch: {
    $route() {
      this.activeRoute = this.$route.name.slice(0, -5);
    },
  },
  methods: {
    getRoute() {
      this.activeRoute = this.$route.name.slice(0, -5);
    },
    mobileMenu() {
      if (!this.menuOpen) {
        this.scrollPosition = window.scrollY;
        this.menuOpen = true;
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#02111d');
        document.body.classList.add('overflow-hidden', 'fixed');
        document.getElementsByTagName('main')[0].style.top = -this.scrollPosition + 'px';
      } else {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#021626');
        document.body.classList.remove('overflow-hidden', 'fixed');
        if (this.activeRoute === 'case-slug') {
          document.documentElement.classList.remove('scroll-smooth');
        }
        window.scrollTo(0, this.scrollPosition);
        document.getElementsByTagName('main')[0].removeAttribute('style');
        if (this.activeRoute === 'case-slug') {
          document.documentElement.classList.add('scroll-smooth');
        }
        this.menuOpen = false;
      }
    },
  },
};
</script>

<script setup>
const localePath = useLocalePath();
</script>

<style scoped>
#Header_desktop nav a.active {
  @apply text-link;
}
#Header_mobile nav a.active {
  @apply text-link font-bold;
}
</style>
