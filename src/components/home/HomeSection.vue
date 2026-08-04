<script setup>
defineProps({
  background: { type: String, default: 'bg-white' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  linkTo: { type: String, required: true },
  linkLabel: { type: String, required: true }
})
</script>

<template>
  <section class="w-full" :class="background">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-semibold text-slate-900 sm:text-3xl">{{ title }}</h2>
      <p class="mt-4 max-w-2xl text-slate-600">{{ description }}</p>

      <div class="mt-6">
        <slot />
      </div>

      <RouterLink
        :to="linkTo"
        class="mt-6 inline-block font-medium text-hospital-brown-700 underline decoration-hospital-brown-300 underline-offset-4 transition-colors hover:text-hospital-brown-900 hover:decoration-hospital-brown-600"
      >
        {{ linkLabel }} →
      </RouterLink>
    </div>
  </section>
</template>
