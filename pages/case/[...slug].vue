<template>
  <article>
    <ContentDoc v-slot="{ doc }">
      <CaseHeader :title="doc.page_title" :client="doc.client" :cover="doc.cover" :year="doc.year" :tags="doc.tags" />
    </ContentDoc>
  </article>
</template>
