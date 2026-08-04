<script setup>
import { computed } from 'vue'
import { hexToRgba } from '@/composables/useHexColor'

const props = defineProps({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  color: { type: String, required: true }
})

const cardStyle = computed(() => ({
  backgroundColor: hexToRgba(props.color, 0.06),
  borderColor: hexToRgba(props.color, 0.3),
  '--accent-color': props.color
}))
</script>

<template>
  <a
    :href="`#${slug}`"
    class="service-overview-card group block rounded-lg border p-6 shadow-sm"
    :style="cardStyle"
  >
    <h3 class="text-lg font-semibold text-slate-900 transition-colors">
      {{ title }}
    </h3>
    <p class="mt-2 text-sm text-slate-600">{{ summary }}</p>
  </a>
</template>

<style scoped>
.service-overview-card {
  transition: border-color 0.2s ease, background-color 0.2s ease;
}
.service-overview-card:hover {
  border-color: var(--accent-color);
}
.service-overview-card:hover h3 {
  color: var(--accent-color);
}
</style>
