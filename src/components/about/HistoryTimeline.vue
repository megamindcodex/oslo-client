<script setup>
import Timeline from 'primevue/timeline'
import { historyMilestones } from '@/data/about'
</script>

<template>
  <section class="bg-hospital-brown-50">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-semibold text-slate-900 sm:text-3xl">Our history</h2>
      <p class="mt-3 max-w-2xl text-slate-600">More than a century of care in the heart of Oslo.</p>

      <Timeline :value="historyMilestones" align="alternate" class="mt-10">
        <template #marker>
          <span
            class="flex h-3 w-3 rounded-full bg-hospital-brown-500 ring-4 ring-hospital-brown-100"
          />
        </template>
        <template #content="{ item }">
          <p class="text-sm font-semibold text-hospital-brown-600">{{ item.year }}</p>
          <p class="mt-1 max-w-xl pb-2 text-slate-700">{{ item.description }}</p>
        </template>
      </Timeline>
    </div>
  </section>
</template>
