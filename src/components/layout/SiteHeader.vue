<script setup>
import { ref } from 'vue'
import Drawer from 'primevue/drawer'
import TopBar from './TopBar.vue'
import Navbar from './Navbar.vue'
import { IconClose, IconMenu } from '@/components/icons'

const isMobileMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <TopBar />

    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <RouterLink to="/" class="text-lg font-semibold text-hospital-brown-800">
        Ullevål Hospital
      </RouterLink>

      <div class="hidden lg:block">
        <Navbar />
      </div>

      <button
        type="button"
        class="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-hospital-brown-700 lg:hidden"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <IconClose v-if="isMobileMenuOpen" class="h-4 w-4" />
        <IconMenu v-else class="" />
        <!-- {{ isMobileMenuOpen ? 'Close' : 'Menu' }} -->
      </button>
    </div>

    <Drawer
      v-model:visible="isMobileMenuOpen"
      position="top"
      :show-close-icon="false"
      class="!h-auto max-h-[85vh] overflow-y-auto"
    >
      <Navbar vertical @navigate="isMobileMenuOpen = false" />
    </Drawer>
  </header>
</template>
