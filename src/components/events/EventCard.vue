<script setup>
import Tag from 'primevue/tag'

defineProps({
  title: { type: String, required: true },
  dates: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  site: { type: String, required: true },
  audience: { type: String, required: true },
  recurring: { type: Boolean, default: false },
  description: { type: String, required: true },
  sourceUrl: { type: String, required: true },
  sourceLabel: { type: String, required: true }
})
</script>

<template>
  <article class="rounded-lg border border-hospital-brown-100 bg-white p-6 shadow-sm">
    <div class="flex flex-wrap items-center gap-2">
      <Tag :value="site" severity="secondary" />
      <Tag v-if="recurring" value="Recurring course" severity="info" />
    </div>

    <h3 class="mt-3 text-lg font-semibold text-slate-900">{{ title }}</h3>

    <dl class="mt-3 space-y-1 text-sm text-slate-600">
      <div class="flex gap-2">
        <dt class="font-medium text-slate-900">When:</dt>
        <dd>{{ dates }} · {{ time }}</dd>
      </div>
      <div class="flex gap-2">
        <dt class="font-medium text-slate-900">Where:</dt>
        <dd>{{ location }}</dd>
      </div>
      <div class="flex gap-2">
        <dt class="font-medium text-slate-900">Who it's for:</dt>
        <dd>{{ audience }}</dd>
      </div>
    </dl>

    <p class="mt-4 text-sm text-slate-600">{{ description }}</p>

    <a
      :href="sourceUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-4 inline-block text-sm font-medium text-hospital-brown-700 underline decoration-hospital-brown-300 underline-offset-4 transition-colors hover:text-hospital-brown-900 hover:decoration-hospital-brown-600"
    >
      Details & registration on {{ sourceLabel }} ↗
    </a>
  </article>
</template>
