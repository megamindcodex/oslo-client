<script setup>
import { useRoute } from 'vue-router'

defineProps({
  vertical: { type: Boolean, default: false },
})

defineEmits(['navigate'])

const route = useRoute()

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Specialists', to: '/specialists' },
  { label: 'News', to: '/news' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <nav :class="vertical ? 'flex flex-col gap-1' : 'flex items-center gap-1'">
    <RouterLink
      v-for="link in navLinks"
      :key="link.to"
      :to="link.to"
      class="rounded-md px-3 py-2 text-xl font-medium underline decoration-2 underline-offset-4 transition-colors hover:bg-hospital-brown-50 hover:text-hospital-brown-700"
      :class="
        route.path === link.to
          ? 'text-hospital-brown-800 decoration-hospital-brown-500'
          : 'text-slate-700 decoration-transparent'
      "
      @click="$emit('navigate')"
    >
      {{ link.label }}
    </RouterLink>
  </nav>
</template>
