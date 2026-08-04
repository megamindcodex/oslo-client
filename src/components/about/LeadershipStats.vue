<script setup>
import { aboutStats } from '@/data/about'
</script>

<template>
  <section class="bg-hospital-brown-800">
    <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="stat in aboutStats" :key="stat.label" class="text-center">
          <p class="text-3xl font-semibold text-white">{{ stat.value }}</p>
          <p class="mt-1 text-sm text-hospital-brown-100">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
