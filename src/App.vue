<script setup>
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import WatermarkOverlay from './components/ui/WatermarkOverlay.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader />
    <RouterView />
    <SiteFooter />
    <WatermarkOverlay />
  </div>
</template>
