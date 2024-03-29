<template>
  <section class="relative px-6 mt-24 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0 xl:mt-36">
    <hgroup>
      <h3 class="antialiased uppercase text-section font-jet text-var-1 xl:text-xl-section">
        {{ $t('ContactSection.name') }}
      </h3>
      <i18n-t tag="h2" keypath="ContactSection.title" class="mt-2 antialiased text-sectiontitle font-jet text-typo-600 xl:text-xl-sectiontitle text-shadow">
        <template #br><br /></template>
      </i18n-t>
    </hgroup>
    <a href="mailto:ixd.pascalruppert@gmail.com" class="inline-block mt-4 antialiased uppercase group text-btn text-typo-600 font-jet xl:text-xl-btn">
      <p class="after:content-['->'] after:ml-2">
        {{ $t('ContactSection.cta') }}
      </p>
      <div class="w-full h-px mt-px bg-typo-600 sm:bg-[unset] sm:bg-gradient-to-r sm:from-link sm:to-link sm:bg-no-repeat sm:[background-position:0] sm:[background-size:0] sm:motion-safe:transition-all sm:motion-safe:duration-200 sm:group-hover:[background-size:100%]"></div>
    </a>
  </section>
</template>
