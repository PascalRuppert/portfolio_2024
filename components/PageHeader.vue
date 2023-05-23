<template>
  <header class="fixed top-0 z-30 w-full bg-base-200/95 backdrop-blur-md">
    <div id="Header_desktop" class="hidden sm:block">
      <GridLines class="-z-10" />
      <div class="flex flex-row flex-wrap content-center justify-between w-full px-6 h-18 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0">
        <NuxtLink to="/"><img id="Memoji_desktop" src="assets/Memoji.png" alt="Memoji of Pascal" class="hidden w-[2.375rem] h-[2.375rem]" /></NuxtLink>
        <nav class="flex flex-row flex-wrap content-center antialiased gap-x-10 text-typo-600 text-body xl:text-xl-body font-jet">
          <NuxtLink to="/" class="group">
            <p>// home</p>
            <div class="w-full h-px mt-px bg-gradient-to-r from-link to-link bg-no-repeat [background-position:0] [background-size:0] motion-safe:transition-all motion-safe:duration-150 group-hover:[background-size:100%]"></div>
          </NuxtLink>
          <NuxtLink to="/about" class="group">
            <p>// about</p>
            <div class="w-full h-px mt-px bg-gradient-to-r from-link to-link bg-no-repeat [background-position:0] [background-size:0] motion-safe:transition-all motion-safe:duration-150 group-hover:[background-size:100%]"></div>
          </NuxtLink>
          <a href="mailto:ixd.pascalruppert@gmail.com" class="group">
            <p>// contact</p>
            <div class="w-full h-px mt-px bg-gradient-to-r from-link to-link bg-no-repeat [background-position:0] [background-size:0] motion-safe:transition-all motion-safe:duration-150 group-hover:[background-size:100%]"></div>
          </a>
        </nav>
      </div>
    </div>

    <div id="Header_mobile" class="sm:hidden">
      <GridLines class="-z-10" />
      <div class="flex flex-row flex-wrap content-center justify-between w-full px-6 h-14 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0">
        <NuxtLink to="/"><img id="Memoji_mobile" src="assets/Memoji.png" alt="Memoji of Pascal" class="hidden w-8 h-8" /></NuxtLink>
        <button id="MenuBtn" aria-label="Menu" class="z-10 w-8 h-8 text-typo-600">
          <IconsMenuButton />
        </button>
      </div>

      <div id="Menu_mobile" class="fixed top-0 bottom-0 left-0 right-0 hidden w-screen h-screen pb-20 pl-8 bg-base-100 pt-28">
        <div>
          <nav class="flex flex-col flex-wrap items-start antialiased gap-y-4 text-typo-600 text-menu font-jet">
            <NuxtLink to="/">
              <p>home</p>
            </NuxtLink>
            <NuxtLink to="/about">
              <p>about</p>
            </NuxtLink>
            <a href="mailto:ixd.pascalruppert@gmail.com">
              <p>contact</p>
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

<style scoped>
#Header_desktop nav a.router-link-active {
  @apply text-link;
}
#Header_mobile nav a.router-link-active {
  @apply text-link font-bold;
}
</style>
