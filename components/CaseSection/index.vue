<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="relative px-6 mt-24 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0 xl:mt-36">
    <div class="grid w-full grid-cols-4 gap-x-4 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8">
      <hgroup class="col-span-2 mb-10 xl:mb-12">
        <h3 class="antialiased uppercase text-section font-jet text-var-1 xl:text-xl-section">
          {{ $t('CaseSection.name') }}
        </h3>
        <i18n-t tag="h2" keypath="CaseSection.title" class="mt-2 antialiased text-sectiontitle font-jet text-typo-600 xl:text-xl-sectiontitle text-shadow"
          ><template #br><br /></template
        ></i18n-t>
      </hgroup>
    </div>

    <div class="grid w-full grid-cols-4 gap-x-4 gap-y-14 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8">
      <ContentQuery v-slot="{ data }" :path="locale + '/case'">
        <CaseCard v-for="item of data" :key="item" :title="item.card_title" :description="item.description" :image="item.card_img" :client="item.client" :slug="item._path" />
      </ContentQuery>
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n();
</script>
