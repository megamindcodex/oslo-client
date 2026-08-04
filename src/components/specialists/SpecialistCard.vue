<script setup>
import { computed } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

const props = defineProps({
  title: { type: String, required: true },
  focus: { type: String, required: true },
  description: { type: String, required: true }
})

const initials = computed(() => {
  const words = props.title.trim().split(/\s+/).filter(Boolean)
  const first = words[0]?.[0] ?? ''
  const second = words.length > 1 ? words[1][0] : ''
  return (first + second).toUpperCase()
})
</script>

<template>
  <div class="relative pt-10">
    <div
      class="absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-hospital-brown-500 text-xl font-semibold text-white ring-4 ring-white"
    >
      {{ initials }}
    </div>

    <div class="rounded-lg border border-hospital-brown-100 bg-white px-4 pb-4 pt-12 text-center shadow-sm">
      <h4 class="font-semibold text-slate-900">{{ title }}</h4>
      <p class="mt-2 text-sm text-slate-600">{{ focus }}</p>

      <Accordion class="mt-4 text-left">
        <AccordionPanel value="0">
          <AccordionHeader>More about this specialty</AccordionHeader>
          <AccordionContent>
            <p class="text-sm text-slate-600">{{ description }}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </div>
</template>
