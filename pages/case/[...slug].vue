<template>
  <article class="pt-6 pb-24 sm:pt-10 xl:pb-30">
    <CaseHeader :title="document.page_title" :client="document.client" :cover="document.cover" :year="document.year" :tags="document.tags" />
    <section class="relative px-6 mt-10 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0 xl:mt-16">
      <div class="grid w-full grid-cols-4 gap-x-4 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8">
        <CaseToc :toc="document.body.toc.links" />
        <ContentRenderer ref="caseContent" :value="document" class="col-span-4 article_content md:col-span-4 md:col-start-2" />
      </div>
    </section>
  </article>
</template>

<script setup>
const { locale } = useI18n();
const { path } = useRoute();
const pathWithoutLocale = path.replace(`/${locale.value}`, '');
const document = await queryContent(locale.value, pathWithoutLocale).findOne();
useContentHead(document);
</script>

<script>
export default {
  beforeRouteLeave() {
    document.documentElement.classList.remove('scroll-smooth');
  },
};
</script>
