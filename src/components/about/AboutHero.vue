<script setup>
import { heroImages } from '@/data/heroImages'
</script>

<template>
  <section class="bg-hospital-brown-50">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:items-center lg:px-8">
      <div class="order-2 md:order-1">
        <p class="text-sm font-medium text-hospital-brown-600">About us</p>
        <h1 class="mt-3 max-w-3xl text-4xl font-semibold text-slate-900 sm:text-5xl">
          Caring for Oslo since 1887
        </h1>
        <p class="mt-4 max-w-2xl text-lg text-slate-600">
          Ullevål Hospital is one of Oslo's principal hospitals, providing acute, emergency and
          specialist care as part of Oslo University Hospital (OUH).
        </p>
      </div>

      <div class="order-1 md:order-2">
        <div class="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-lg bg-hospital-brown-100">
          <img
            v-if="heroImages.about"
            :src="heroImages.about"
            alt="Ullevål Hospital building"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
