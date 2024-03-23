<template>
  <section class="relative px-6 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0 about-hero">
    <div class="grid w-full grid-cols-4 gap-x-4 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8">
      <div class="col-span-3 sm:col-span-2 md:col-span-3 md:order-2 md:mt-8">
        <picture>
          <source type="image/avif" srcset="assets/profilepic/Profile@2x.avif 2x, assets/profilepic/Profile.avif 1x" />
          <source type="image/webp" srcset="assets/profilepic/Profile@2x.webp 2x, assets/profilepic/Profile.webp 1x" />
          <source type="image/png" srcset="assets/profilepic/Profile@2x.png 2x, assets/profilepic/Profile.png 1x" />
          <img src="assets/profilepic/Profile@2x.png" alt="Profile Picture" class="w-full max-w-[20.5rem] sm:max-w-xs md:w-3/4 md:mx-auto md:max-w-[22.813rem] lg:w-3/5 lg:max-w-none xl:w-[65%]" />
        </picture>
      </div>
      <div class="col-span-4 mt-8 sm:col-span-3 md:mt-0">
        <h3 class="antialiased uppercase text-section font-jet text-var-1 xl:text-xl-section">About me</h3>
        <ContentDoc path="/about_hero" class="mt-2 xl:mt-4" />
      </div>
    </div>
  </section>
</template>
