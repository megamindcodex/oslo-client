<script setup>
import Chip from 'primevue/chip'

defineProps({
  slug: { type: String, required: true },
  title: { type: String, required: true }
})
</script>

<template>
  <a
    :href="`#${slug}`"
    class="inline-flex rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-hospital-brown-400 focus-visible:ring-offset-2"
  >
    <Chip
      :label="title"
      class="cursor-pointer transition-colors hover:!bg-hospital-brown-100"
    />
  </a>
</template>
