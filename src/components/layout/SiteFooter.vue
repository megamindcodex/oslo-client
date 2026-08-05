<script setup>
const quickLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Specialists', to: '/specialists' },
  { label: 'News', to: '/news' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-hospital-brown-100 bg-hospital-brown-50">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p class="text-lg font-semibold text-hospital-brown-800">Ullevål Hospital</p>
          <p class="mt-2 text-sm text-slate-600">Part of Oslo University Hospital (OUH).</p>
        </div>

        <div>
          <p class="text-sm font-semibold text-slate-900">Quick links</p>
          <ul class="mt-3 space-y-2">
            <li v-for="link in quickLinks" :key="link.to">
              <RouterLink :to="link.to" class="text-sm text-slate-600 hover:text-hospital-brown-700">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-sm font-semibold text-slate-900">Contact</p>
          <ul class="mt-3 space-y-2 text-sm text-slate-600">
            <li>Kirkeveien 166, 0450 Oslo</li>
            <li><a href="tel:+4700001234" class="hover:text-hospital-brown-700">00 00 12 34</a></li>
            <li>
              Emergency:
              <a href="tel:113" class="font-medium text-emergency-600 hover:text-emergency-700">113</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 border-t border-hospital-brown-100 pt-6 text-sm text-slate-500">
        © {{ currentYear }} Ullevål Hospital — Oslo University Hospital. All rights reserved.
      </div>
    </div>
  </footer>
</template>
