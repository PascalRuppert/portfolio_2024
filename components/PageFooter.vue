<template>
  <footer class="fixed bottom-0 z-10 w-full bg-base-100">
    <div class="px-6 pt-10 pb-8 sm:py-16 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0 sm:flex sm:flex-row-reverse sm:justify-between">
      <div class="flex items-start justify-center gap-8 sm:gap-x-6 text-typo-500">
        <a href="mailto:ixd.pascalruppert@gmail.com" title="Email" class="sm:hover:text-link"><IconsSocialsEmail class="h-5" /></a>
        <!-- <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" class="sm:hover:text-link"><IconsSocialsInstagram class="h-5" /></a> -->
        <a href="https://www.linkedin.com/in/pascalruppertixd/" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="sm:hover:text-link"><IconsSocialsLinkedIn class="h-5" /></a>
        <a href="https://github.com/PascalRuppert" target="_blank" rel="noopener noreferrer" title="Github" class="sm:hover:text-link"><IconsSocialsGithub class="h-5" /></a>
      </div>
      <div class="mt-6 text-center sm:mt-0 sm:text-left text-typo-500">
        <p class="text-footer xl:text-xl-footer font-jet">Designed & build by Pascal Ruppert</p>
        <p class="mt-[0.375rem] xl:mt-2 text-footer xl:text-xl-footer font-jet sm:inline-block">Made with<IconsHeartFilled class="inline w-3 h-3 mx-1 xl:h-4 xl:w-4 text-var-4" />in Tokyo<span class="hidden sm:inline">,&nbsp;</span></p>
        <p class="mt-[0.375rem] xl:mt-2 text-footer xl:text-xl-footer font-jet sm:inline-block">
          {{ new Date().toLocaleString([], { month: 'long' }) }}
          {{ new Date().getFullYear() }}
        </p>
      </div>
    </div>
  </footer>
</template>
