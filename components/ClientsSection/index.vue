<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="relative px-6 mt-24 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0 xl:mt-36">
    <div class="grid w-full grid-cols-4 gap-x-4 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8">
      <div class="col-span-2 mb-10 xl:mb-12">
        <h2 class="mt-2 antialiased text-sectiontitle font-jet text-typo-600 xl:text-xl-sectiontitle">Clients I<br />worked with</h2>
      </div>
    </div>
    <ol class="grid w-full grid-cols-4 gap-4 sm:gap-6 md:grid-cols-6 xl:gap-x-8">
      <ClientsCard v-for="client in clients" :key="client.name" :name="client.name" :logo="client.logo" />
    </ol>
  </section>
</template>

<script setup lang="ts">
const data = await queryContent('clients').findOne();
const clients = data.clients.sort((a: any, b: any) => (a.name > b.name ? 1 : -1));
</script>
