<script setup>
defineProps({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  highlights: { type: Array, required: true }
})
</script>

<template>
  <section :id="slug" class="scroll-mt-32 border-t border-hospital-brown-100 py-12 first:border-t-0 first:pt-0">
    <h2 class="text-2xl font-semibold text-slate-900 sm:text-3xl">{{ title }}</h2>
    <p class="mt-4 max-w-3xl text-slate-600">{{ description }}</p>

    <ul class="mt-6 grid gap-3 sm:grid-cols-2">
      <li
        v-for="item in highlights"
        :key="item"
        class="flex items-start gap-2 rounded-md bg-hospital-brown-50 px-4 py-3 text-sm text-slate-700"
      >
        <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-hospital-brown-500" />
        {{ item }}
      </li>
    </ul>
  </section>
</template>
