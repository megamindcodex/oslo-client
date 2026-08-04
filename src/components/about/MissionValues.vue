<script setup>
import { missionValues } from '@/data/about'
import { hexToRgba } from '@/composables/useHexColor'
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-semibold text-slate-900 sm:text-3xl">Our mission & values</h2>
    <p class="mt-3 max-w-2xl text-slate-600">
      What guides every department, every shift, and every patient interaction at Ullevål.
    </p>

    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="value in missionValues"
        :key="value.title"
        class="rounded-lg border p-6"
        :style="{ backgroundColor: hexToRgba(value.color, 0.06), borderColor: hexToRgba(value.color, 0.3) }"
      >
        <h3 class="text-base font-semibold" :style="{ color: value.color }">{{ value.title }}</h3>
        <p class="mt-2 text-sm text-slate-600">{{ value.description }}</p>
      </article>
    </div>
  </section>
</template>
