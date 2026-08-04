<script setup>
import { facilities } from '@/data/facilities'
import FacilityOverviewChip from '@/components/facilities/FacilityOverviewChip.vue'
import FacilitySection from '@/components/facilities/FacilitySection.vue'
</script>

<template>
  <main class="py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-semibold text-slate-900 sm:text-4xl">Facilities</h1>
      <p class="mt-3 max-w-2xl text-slate-600">
        Beyond clinical care, Ullevål offers a range of facilities for patients, families and visitors, and for the
        staff who work here around the clock. Jump to a facility below for more detail.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <FacilityOverviewChip
          v-for="facility in facilities"
          :key="facility.slug"
          :slug="facility.slug"
          :title="facility.title"
        />
      </div>
    </div>

    <div class="mt-12">
      <FacilitySection
        v-for="(facility, index) in facilities"
        :key="facility.slug"
        :slug="facility.slug"
        :title="facility.title"
        :audience="facility.audience"
        :description="facility.description"
        :offerings="facility.offerings"
        :image="facility.image"
        :color="facility.color"
        :alternate="index % 2 === 1"
      />
    </div>
  </main>
</template>
