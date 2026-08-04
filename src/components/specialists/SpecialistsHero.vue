<script setup>
import { heroImages } from '@/data/heroImages'
</script>

<template>
  <section class="bg-hospital-brown-50">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:items-center lg:px-8">
      <div class="order-2 md:order-1">
        <p class="text-sm font-medium text-hospital-brown-600">Our people</p>
        <h1 class="mt-3 max-w-3xl text-4xl font-semibold text-slate-900 sm:text-5xl">Specialists</h1>
        <p class="mt-4 max-w-2xl text-lg text-slate-600">
          Ullevål's departments draw on a wide range of medical specialties. Jump to a department below to see the
          types of specialists who work there.
        </p>
      </div>

      <div class="order-1 md:order-2">
        <div
          class="relative mx-auto aspect-square w-56 overflow-hidden rounded-full bg-hospital-brown-100 sm:w-64 md:w-75 lg:w-full lg:max-w-sm"
        >
          <img
            v-if="heroImages.specialists"
            :src="heroImages.specialists"
            alt="Ullevål Hospital specialists"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
