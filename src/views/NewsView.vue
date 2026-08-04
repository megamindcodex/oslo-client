<script setup>
import { newsItems } from '@/data/news'
import NewsCard from '@/components/news/NewsCard.vue'
</script>

<template>
  <main class="py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-semibold text-slate-900 sm:text-4xl">News</h1>
      <p class="mt-3 max-w-2xl text-slate-600">
        Updates from Ullevål and sister sites across Oslo University Hospital, including Radiumhospitalet and Nye
        Aker. Each story links to the full announcement.
      </p>
    </div>

    <div class="mt-10 space-y-12 border-t border-hospital-brown-100 pt-12">
      <NewsCard
        v-for="item in newsItems"
        :key="item.slug"
        :image="item.image"
        :title="item.title"
        :date="item.date"
        :site="item.site"
        :summary="item.summary"
        :body="item.body"
        :source-url="item.sourceUrl"
        :source-label="item.sourceLabel"
        :switch-image-position="item.switchImagePosition"
      />
    </div>
  </main>
</template>
