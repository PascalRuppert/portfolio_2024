export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/i18n'],
  css: ['@/assets/css/jetbrains.css', '@/assets/css/notosans.css'],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'EN',
        file: 'en-US.json',
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        name: 'JP',
        file: 'ja-JP.json',
      },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    langDir: 'locales/',
  },
  devtools: true,
  content: {
    highlight: {
      theme: 'github-dark',
    },
  },
});
