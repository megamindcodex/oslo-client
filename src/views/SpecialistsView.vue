<script setup>
import { specialistDepartments } from '@/data/specialists'
import SpecialistsHero from '@/components/specialists/SpecialistsHero.vue'
import SpecialistOverviewLink from '@/components/specialists/SpecialistOverviewLink.vue'
import SpecialistDepartmentSection from '@/components/specialists/SpecialistDepartmentSection.vue'
</script>

<template>
  <main>
    <SpecialistsHero />

    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="flex flex-wrap gap-x-6 gap-y-2">
        <SpecialistOverviewLink
          v-for="department in specialistDepartments"
          :key="department.slug"
          :slug="department.slug"
          :title="department.title"
        />
      </div>
    </div>

    <div class="mt-12">
      <SpecialistDepartmentSection
        v-for="(department, index) in specialistDepartments"
        :key="department.slug"
        :slug="department.slug"
        :title="department.title"
        :roles="department.roles"
        :alternate="index % 2 === 1"
      />
    </div>
  </main>
</template>
