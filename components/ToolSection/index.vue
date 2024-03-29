<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="relative px-6 mt-24 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0 xl:mt-36">
    <div class="grid w-full grid-cols-4 gap-x-4 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8">
      <div class="col-span-3 mb-10 sm:mb-12 xl:mb-16">
        <i18n-t tag="h2" keypath="ToolsSection.title" class="antialiased text-sectiontitle font-jet text-typo-600 xl:text-xl-sectiontitle">
          <template #br><br class="sm:hidden" /></template>
        </i18n-t>
      </div>
    </div>

    <div class="grid w-full grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 min-[600px]:gap-y-10 sm:gap-y-12 md:grid-cols-6 md:gap-y-14 xl:gap-x-8 xl:gap-y-18">
      <ToolCard v-for="tool in tools.body" :key="tool.name" :tool="tool" />
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n();
const tools = await queryContent(locale.value, 'tools').findOne();
</script>
