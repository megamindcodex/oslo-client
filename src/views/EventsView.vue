<script setup>
import { events } from '@/data/events'
import EventCard from '@/components/events/EventCard.vue'
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-semibold text-slate-900 sm:text-4xl">Events</h1>
    <p class="mt-3 max-w-2xl text-slate-600">
      Conferences, public talks and patient courses from Ullevål and across Oslo University Hospital. Recurring
      courses are marked — check the linked page for the next scheduled dates.
    </p>

    <div class="mt-10 grid gap-6 sm:grid-cols-2">
      <EventCard
        v-for="event in events"
        :key="event.slug"
        :title="event.title"
        :dates="event.dates"
        :time="event.time"
        :location="event.location"
        :site="event.site"
        :audience="event.audience"
        :recurring="event.recurring"
        :description="event.description"
        :source-url="event.sourceUrl"
        :source-label="event.sourceLabel"
      />
    </div>
  </main>
</template>
