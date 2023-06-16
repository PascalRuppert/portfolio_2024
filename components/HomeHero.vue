<template>
  <section class="relative px-6 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0 group home-hero">
    <div class="grid w-full grid-cols-4 gap-x-4 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8">
      <div class="col-span-4 sm:col-span-3 md:col-span-4">
        <div class="overflow-hidden h-14 w-14 xl:h-18 xl:w-18 memoji">
          <video src="../assets/memoji.mov" loop muted playsinline data-src="'../assets/memoji.mov" poster="../assets/memoji_poster.png" class="h-[118%] scale-[1.9]" />
        </div>
        <ContentDoc path="/home_hero" class="mt-3 xl:mt-4" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    document.querySelector('.memoji video').play();
  },
};
</script>
