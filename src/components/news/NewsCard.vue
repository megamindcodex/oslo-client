<script setup>
import Tag from 'primevue/tag'
import Image from 'primevue/image'

defineProps({
  image: { type: String, default: null },
  title: { type: String, required: true },
  date: { type: String, required: true },
  site: { type: String, required: true },
  summary: { type: String, required: true },
  body: { type: String, required: true },
  sourceUrl: { type: String, required: true },
  sourceLabel: { type: String, required: true },
  switchImagePosition: { type: Boolean, default: false }
})
</script>

<template>
  <article class="w-full bg-white lg:grid lg:grid-cols-2">
    <Image
      v-if="image"
      :src="image"
      :alt="title"
      class="block h-56 w-full lg:h-full"
      :class="switchImagePosition ? 'lg:order-2' : 'lg:order-1'"
      image-class="h-56 w-full object-cover lg:h-full"
    />
    <div
      v-else
      class="h-56 w-full bg-hospital-brown-100 lg:h-full"
      :class="switchImagePosition ? 'lg:order-2' : 'lg:order-1'"
    />

    <div class="p-6 sm:p-8 lg:p-10" :class="switchImagePosition ? 'lg:order-1' : 'lg:order-2'">
      <div class="flex flex-wrap items-center gap-2">
        <Tag :value="site" severity="secondary" />
        <span class="text-sm text-slate-500">{{ date }}</span>
      </div>

      <h3 class="mt-3 text-lg font-semibold text-slate-900">{{ title }}</h3>
      <p class="mt-2 text-sm text-slate-600">{{ summary }}</p>
      <p class="mt-3 text-sm text-slate-600">{{ body }}</p>

      <a
        :href="sourceUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 inline-block text-sm font-medium text-hospital-brown-700 underline decoration-hospital-brown-300 underline-offset-4 transition-colors hover:text-hospital-brown-900 hover:decoration-hospital-brown-600"
      >
        Read the original announcement from {{ sourceLabel }} ↗
      </a>
    </div>
  </article>
</template>
