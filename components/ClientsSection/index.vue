<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="relative mt-24 xl:mt-36">
    <div class="px-6 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0">
      <div class="grid w-full grid-cols-4 gap-x-4 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8">
        <div class="col-span-3 mb-10 xl:mb-12">
          <h2 class="mt-2 antialiased text-sectiontitle font-jet text-typo-600 xl:text-xl-sectiontitle">Clients I <br class="sm:hidden" />worked with</h2>
        </div>
      </div>
    </div>

    <div class="w-full sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0" aria-hidden="true">
      <div class="flex w-full overflow-hidden sm:hidden">
        <ol class="relative flex justify-around will-change-transform animate-logoscroll-l">
          <ClientsCard v-for="client in clients.slice(0, 6)" :key="client.name" :name="client.name" :logo="client.logo" class="w-40" />
        </ol>
        <ol class="relative flex justify-around will-change-transform animate-logoscroll-l">
          <ClientsCard v-for="client in clients.slice(0, 6)" :key="client.name" :name="client.name" :logo="client.logo" class="w-40" />
        </ol>
      </div>
      <div class="flex w-full mt-4 overflow-hidden sm:hidden">
        <ol class="relative flex justify-around will-change-transform animate-logoscroll-r">
          <ClientsCard v-for="client in clients.slice(6)" :key="client.name" :name="client.name" :logo="client.logo" class="w-40" />
        </ol>
        <ol class="relative flex justify-around will-change-transform animate-logoscroll-r">
          <ClientsCard v-for="client in clients.slice(6)" :key="client.name" :name="client.name" :logo="client.logo" class="w-40" />
        </ol>
      </div>

      <ol class="hidden sm:grid sm:w-full sm:grid-cols-4 sm:gap-6 md:grid-cols-6 xl:gap-x-8">
        <ClientsCard v-for="client in clients.slice(0, 12)" :key="client.name" :name="client.name" :logo="client.logo" />
      </ol>
    </div>

    <ol class="sr-only">
      <li v-for="client in clients" :key="client.name">{{ client.name }}</li>
    </ol>
  </section>
</template>

<script setup lang="ts">
const data = await queryContent('clients').findOne();
const clients = data.clients.sort((a: any, b: any) => (a.name > b.name ? 1 : -1));
</script>
