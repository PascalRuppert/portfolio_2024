<template>
  <article class="pt-6 pb-24 sm:pt-10 xl:pb-30">
    <ContentDoc v-slot="{ doc }">
      <CaseHeader :title="doc.page_title" :client="doc.client" :cover="doc.cover" :year="doc.year" :tags="doc.tags" />
      <section class="relative px-6 mt-10 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0 xl:mt-16">
        <div class="grid w-full grid-cols-4 gap-x-4 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8">
          <CaseToc :toc="doc.body.toc.links" />
          <ContentRenderer ref="caseContent" :value="doc" class="col-span-4 article_content md:col-span-4 md:col-start-2" />
        </div>
      </section>
    </ContentDoc>
  </article>
</template>

<script>
export default {
  beforeRouteLeave() {
    document.documentElement.classList.remove('scroll-smooth');
  },
};
</script>
