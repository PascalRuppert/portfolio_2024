<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="relative px-6 mt-24 sm:px-12 xl:px-16 2xl:max-w-7xl 2xl:mx-auto 2xl:px-0 xl:mt-36">
    <div class="grid w-full grid-cols-4 gap-x-4 gap-y-24 sm:gap-x-6 md:grid-cols-6 xl:gap-x-8">
      <div class="flex flex-col w-full col-span-4 min-[800px]:max-[959px]:flex-row gap-y-24 gap-x-6 md:flex-col md:col-span-3 xl:gap-y-36">
        <div class="flex-1">
          <h2 class="antialiased text-sectiontitle font-jet text-typo-600 xl:text-xl-sectiontitle">Working <br class="sm:hidden" />Experience</h2>
          <div class="flex flex-col mt-10 gap-y-10 xl:gap-y-16 xl:mt-12">
            <ExpertiseWorkplace v-for="workplace in workplaces.body" :key="workplace.name" :workplace="workplace" />
          </div>
        </div>

        <div class="flex-1">
          <h2 class="antialiased text-sectiontitle font-jet text-typo-600 xl:text-xl-sectiontitle">Education</h2>
          <div class="flex flex-col mt-10 gap-y-10 xl:mt-12 xl:gap-y-12">
            <ExpertiseEducation v-for="education in educations.body" :key="education.major" :education="education" />
          </div>
        </div>
      </div>

      <div class="col-span-4 md:col-span-3">
        <h2 class="antialiased text-sectiontitle font-jet text-typo-600 xl:text-xl-sectiontitle">Skills</h2>
        <div class="flex flex-col mt-10 gap-y-10 xl:mt-12 xl:gap-y-12">
          <ExpertiseSkill v-for="skill in skills.body" :key="skill.group" :skill="skill" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n();
const workplaces = await queryContent(locale.value, 'expertise/workplaces').findOne();
const educations = await queryContent(locale.value, 'expertise/education').findOne();
const skills = await queryContent(locale.value, 'expertise/skills').findOne();
</script>
