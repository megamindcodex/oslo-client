<script setup>
import { aboutStats } from '@/data/about'
import { services } from '@/data/services'
import { facilities } from '@/data/facilities'
import { specialistDepartments } from '@/data/specialists'
import { newsItems } from '@/data/news'
import { events } from '@/data/events'
import { heroImages } from '@/data/heroImages'
import { hexToRgba } from '@/composables/useHexColor'
import HomeSection from '@/components/home/HomeSection.vue'

const featuredServices = services.slice(0, 4)
const featuredFacilities = facilities.slice(0, 4)
const featuredDepartments = specialistDepartments.slice(0, 4)
const latestNews = newsItems.slice(0, 2)
const nextEvents = events.slice(0, 2)
</script>

<template>
  <main>
    <section class="w-full bg-hospital-brown-50">
      <div
        class="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center lg:px-8"
      >
        <div class="order-1 md:order-2">
          <p class="text-sm font-medium text-hospital-brown-600">
            Part of Oslo University Hospital
          </p>
          <h1 class="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Welcom to Ullevål Hospital
          </h1>
          <p class="mt-4 max-w-2xl text-lg text-slate-600">
            Trusted, comprehensive care for the people of Oslo — from emergency services to
            specialist treatment, delivered with compassion.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <RouterLink
              to="/services"
              class="rounded-lg bg-hospital-brown-500 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-hospital-brown-600"
            >
              Explore our services
            </RouterLink>
            <RouterLink
              to="/contact"
              class="rounded-lg border border-hospital-brown-200 px-6 py-3 text-center text-sm font-semibold text-hospital-brown-700 hover:bg-white"
            >
              Contact us
            </RouterLink>
          </div>
        </div>

        <div class="">
          <div
            class="relative mx-auto aspect-square w-56 overflow-hidden rounded-full bg-hospital-brown-100 sm:w-64 md:w-75 lg:w-full lg:max-w-sm"
          >
            <img
              v-if="heroImages.home"
              :src="heroImages.home"
              alt="Ullevål Hospital staff"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <HomeSection
      background="bg-white"
      title="About Ullevål"
      description="Founded in 1887, Ullevål is one of Oslo University Hospital's largest sites, providing round-the-clock emergency, surgical and specialist care as part of Norway's leading university hospital network."
      link-to="/about"
      link-label="Learn more about us"
    >
      <dl class="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div v-for="stat in aboutStats" :key="stat.label">
          <dt class="text-xs text-slate-500">{{ stat.label }}</dt>
          <dd class="text-sm font-semibold text-slate-900">{{ stat.value }}</dd>
        </div>
      </dl>
    </HomeSection>

    <HomeSection
      background="bg-hospital-brown-50"
      title="Services"
      description="From Level I trauma care to neurosurgery and pediatrics, Ullevål offers a broad range of emergency, surgical, diagnostic and specialist services."
      link-to="/services"
      link-label="Explore all services"
    >
      <ul class="flex flex-wrap gap-2 text-sm">
        <li
          v-for="service in featuredServices"
          :key="service.slug"
          class="rounded-full border px-3 py-1 font-medium shadow-sm"
          :style="{
            backgroundColor: hexToRgba(service.color, 0.08),
            borderColor: hexToRgba(service.color, 0.3),
            color: service.color
          }"
        >
          {{ service.title }}
        </li>
      </ul>
    </HomeSection>

    <HomeSection
      background="bg-white"
      title="Facilities"
      description="Beyond clinical care, Ullevål offers a range of facilities for patients, families and visitors, and for the staff who work here around the clock."
      link-to="/facilities"
      link-label="See all facilities"
    >
      <ul class="flex flex-wrap gap-2 text-sm">
        <li
          v-for="facility in featuredFacilities"
          :key="facility.slug"
          class="rounded-full border px-3 py-1 font-medium"
          :style="{
            backgroundColor: hexToRgba(facility.color, 0.08),
            borderColor: hexToRgba(facility.color, 0.3),
            color: facility.color
          }"
        >
          {{ facility.title }}
        </li>
      </ul>
    </HomeSection>

    <HomeSection
      background="bg-hospital-brown-50"
      title="Specialists"
      description="Ullevål's departments draw on a wide range of medical specialties, from trauma surgery to psychiatry, gastroenterology and pediatrics."
      link-to="/specialists"
      link-label="Meet our specialty teams"
    >
      <ul class="flex flex-wrap gap-2 text-sm">
        <li
          v-for="department in featuredDepartments"
          :key="department.slug"
          class="rounded-full border px-3 py-1 font-medium shadow-sm"
          :style="{
            backgroundColor: hexToRgba(department.color, 0.08),
            borderColor: hexToRgba(department.color, 0.3),
            color: department.color
          }"
        >
          {{ department.title }}
        </li>
      </ul>
    </HomeSection>

    <HomeSection
      background="bg-white"
      title="News"
      description="Updates from Ullevål and sister sites across Oslo University Hospital, including Radiumhospitalet and Nye Aker."
      link-to="/news"
      link-label="Read all news"
    >
      <ul class="space-y-2 text-sm text-slate-700">
        <li v-for="item in latestNews" :key="item.slug">
          <span class="font-medium text-slate-900">{{ item.title }}</span>
          <span class="text-slate-500"> — {{ item.date }}</span>
        </li>
      </ul>
    </HomeSection>

    <HomeSection
      background="bg-hospital-brown-50"
      title="Events"
      description="Conferences, public talks and patient courses from Ullevål and across Oslo University Hospital."
      link-to="/events"
      link-label="See all events"
    >
      <ul class="space-y-2 text-sm text-slate-700">
        <li v-for="event in nextEvents" :key="event.slug">
          <span class="font-medium text-slate-900">{{ event.title }}</span>
          <span class="text-slate-500"> — {{ event.dates }}</span>
        </li>
      </ul>
    </HomeSection>
  </main>
</template>
