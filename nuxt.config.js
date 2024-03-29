export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/i18n'],
  css: ['@/assets/css/jetbrains.css'],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'EN',
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        name: 'JP',
      },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
  },
  devtools: true,
  content: {
    highlight: {
      theme: 'github-dark',
    },
  },
});
