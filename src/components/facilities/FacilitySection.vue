<script setup>
import Tag from 'primevue/tag'
import Image from 'primevue/image'
import { hexToRgba } from '@/composables/useHexColor'

defineProps({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  audience: { type: Array, required: true },
  description: { type: String, required: true },
  offerings: { type: Array, required: true },
  image: { type: String, default: null },
  color: { type: String, required: true },
  alternate: { type: Boolean, default: false },
})
</script>

<template>
  <section
    :id="slug"
    class="w-full scroll-mt-32"
    :class="alternate ? 'bg-hospital-brown-50' : 'bg-white'"
  >
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="flex flex-wrap gap-2">
        <Tag v-for="group in audience" :key="group" :value="group" severity="secondary" />
      </div>

      <h2 class="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">{{ title }}</h2>
      <div class="mt-4 flex flex-col gap-6 lg:flex-row lg:items-center">
        <p class="text-slate-600 lg:w-1/2">{{ description }}</p>

        <Image
          v-if="image"
          :src="image"
          :alt="title"
          class="block w-full lg:w-1/2"
          image-class="h-56 w-full rounded-lg object-cover lg:h-64"
        />
        <div v-else class="h-56 w-full shrink-0 rounded-lg bg-hospital-brown-100 lg:h-64 lg:w-1/2" />
      </div>

      <ul class="mt-6 grid gap-3 sm:grid-cols-2">
        <li
          v-for="item in offerings"
          :key="item"
          class="flex items-start gap-2 rounded-md border px-4 py-3 text-sm text-slate-700"
          :style="{ backgroundColor: hexToRgba(color, 0.06), borderColor: hexToRgba(color, 0.3) }"
        >
          <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" :style="{ backgroundColor: color }" />
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>
