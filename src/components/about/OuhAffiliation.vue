<script setup>
import Image from 'primevue/image'
import { hexToRgba } from '@/composables/useHexColor'
import { ouhAffiliationImage } from '@/data/about'

// OUH's own brand blue — used once here since this whole section is about
// the OUH affiliation, rather than per-item like the mission/value cards.
const accentColor = '#5B84A6'
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div
      class="rounded-xl border p-8 sm:p-10"
      :style="{ backgroundColor: hexToRgba(accentColor, 0.06), borderColor: hexToRgba(accentColor, 0.3) }"
    >
      <div class="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div class="lg:w-1/2">
          <h2 class="text-2xl font-semibold sm:text-3xl" :style="{ color: accentColor }">
            Part of Oslo University Hospital
          </h2>
          <p class="mt-4 max-w-3xl text-slate-600">
            Ullevål Hospital operates as a site within Oslo University Hospital (OUH), one of the
            largest hospital trusts in Scandinavia. This means patients at Ullevål benefit from
            access to OUH's broader network of specialists, research programs, and shared clinical
            expertise, while still receiving care from a dedicated local team.
          </p>
          <a
            href="https://www.oslo-universitetssykehus.no/en/"
            target="_blank"
            rel="noopener"
            class="mt-6 inline-block text-sm font-semibold hover:underline"
            :style="{ color: accentColor }"
          >
            Learn more about OUH →
          </a>
        </div>

        <Image
          v-if="ouhAffiliationImage"
          :src="ouhAffiliationImage"
          alt="Oslo University Hospital"
          class="block w-full lg:w-1/2"
          image-class="h-56 w-full rounded-lg object-cover lg:h-64"
        />
        <div
          v-else
          class="h-56 w-full shrink-0 rounded-lg lg:h-64 lg:w-1/2"
          :style="{ backgroundColor: hexToRgba(accentColor, 0.15) }"
        />
      </div>
    </div>
  </section>
</template>
