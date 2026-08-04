<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Select from 'primevue/select'
import Button from 'primevue/button'
import { enquiryTopics } from '@/data/contact'

const name = ref('')
const email = ref('')
const topic = ref(null)
const message = ref('')
</script>

<template>
  <form class="space-y-5" @submit.prevent>
    <div>
      <label for="contact-name" class="block text-sm font-medium text-slate-900">Name</label>
      <InputText id="contact-name" v-model="name" class="mt-1.5 w-full" placeholder="Your full name" />
    </div>

    <div>
      <label for="contact-email" class="block text-sm font-medium text-slate-900">Email</label>
      <InputText
        id="contact-email"
        v-model="email"
        type="email"
        class="mt-1.5 w-full"
        placeholder="you@example.com"
      />
    </div>

    <div>
      <label for="contact-topic" class="block text-sm font-medium text-slate-900">Topic</label>
      <Select
        id="contact-topic"
        v-model="topic"
        :options="enquiryTopics"
        placeholder="Select a topic"
        class="mt-1.5 w-full"
      />
    </div>

    <div>
      <label for="contact-message" class="block text-sm font-medium text-slate-900">Message</label>
      <Textarea
        id="contact-message"
        v-model="message"
        rows="5"
        class="mt-1.5 w-full"
        placeholder="How can we help?"
      />
    </div>

    <p class="text-xs text-slate-500">
      This form is for general, non-urgent enquiries only. Do not use it for medical questions about your own care,
      or for anything urgent — call 22 11 80 80, or 113 in an emergency.
    </p>

    <Button type="submit" label="Send message" class="!bg-hospital-brown-600 !border-hospital-brown-600" />
  </form>
</template>
