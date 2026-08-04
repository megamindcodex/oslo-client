<script setup>
import { services } from '@/data/services'
import ServiceOverviewCard from '@/components/services/ServiceOverviewCard.vue'
import ServiceSection from '@/components/services/ServiceSection.vue'
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-semibold text-slate-900 sm:text-4xl">Services</h1>
    <p class="mt-3 max-w-2xl text-slate-600">
      Ullevål is one of Oslo University Hospital's largest sites, offering a broad range of emergency, surgical,
      diagnostic and specialist services. Jump to a service below for more detail.
    </p>

    <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ServiceOverviewCard
        v-for="service in services"
        :key="service.slug"
        :slug="service.slug"
        :title="service.title"
        :summary="service.summary"
        :color="service.color"
      />
    </div>

    <div class="mt-4">
      <ServiceSection
        v-for="service in services"
        :key="service.slug"
        :slug="service.slug"
        :title="service.title"
        :description="service.description"
        :highlights="service.highlights"
      />
    </div>
  </main>
</template>
