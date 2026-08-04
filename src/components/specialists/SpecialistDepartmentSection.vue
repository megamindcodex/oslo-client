<script setup>
import SpecialistCard from './SpecialistCard.vue'

defineProps({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  roles: { type: Array, required: true },
  alternate: { type: Boolean, default: false }
})
</script>

<template>
  <section
    :id="slug"
    class="w-full scroll-mt-32"
    :class="alternate ? 'bg-hospital-brown-50' : 'bg-white'"
  >
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-semibold text-slate-900 sm:text-3xl">{{ title }}</h2>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SpecialistCard
          v-for="role in roles"
          :key="role.title"
          :title="role.title"
          :focus="role.focus"
          :description="role.description"
        />
      </div>
    </div>
  </section>
</template>
