<script setup>
defineProps({
  slug: { type: String, required: true },
  title: { type: String, required: true }
})
</script>

<template>
  <a
    :href="`#${slug}`"
    class="text-hospital-brown-700 underline decoration-hospital-brown-300 underline-offset-4 transition-colors hover:text-hospital-brown-900 hover:decoration-hospital-brown-600"
  >
    {{ title }}
  </a>
</template>
