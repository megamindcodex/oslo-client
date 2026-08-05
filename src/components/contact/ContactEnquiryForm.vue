<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Select from 'primevue/select'
import Button from 'primevue/button'
import Message from 'primevue/message'
import { enquiryTopics } from '@/data/contact'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/customercareullevalll@gmail.com'

const name = ref('')
const email = ref('')
const topic = ref(null)
const message = ref('')

const status = ref('idle')

async function handleSubmit() {
  status.value = 'submitting'

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        topic: topic.value,
        message: message.value,
        _subject: 'New enquiry from Ullevål Hospital contact form'
      })
    })

    if (!response.ok) throw new Error('Submission failed')

    status.value = 'success'
    name.value = ''
    email.value = ''
    topic.value = null
    message.value = ''
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="handleSubmit">
    <div>
      <label for="contact-name" class="block text-sm font-medium text-slate-900">Name</label>
      <InputText
        id="contact-name"
        v-model="name"
        required
        class="mt-1.5 w-full"
        placeholder="Your full name"
      />
    </div>

    <div>
      <label for="contact-email" class="block text-sm font-medium text-slate-900">Email</label>
      <InputText
        id="contact-email"
        v-model="email"
        type="email"
        required
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
        required
        class="mt-1.5 w-full"
        placeholder="How can we help?"
      />
    </div>

    <p class="text-xs text-slate-500">
      This form is for general, non-urgent enquiries only. Do not use it for medical questions about your own care,
      or for anything urgent — call 00 00 12 34, or 113 in an emergency.
    </p>

    <Message v-if="status === 'success'" severity="success" :closable="false">
      Thanks — your message has been sent. We'll get back to you as soon as we can.
    </Message>
    <Message v-if="status === 'error'" severity="error" :closable="false">
      Something went wrong sending your message. Please try again, or call us directly.
    </Message>

    <Button
      type="submit"
      :label="status === 'submitting' ? 'Sending…' : 'Send message'"
      :loading="status === 'submitting'"
      class="!bg-hospital-brown-600 !border-hospital-brown-600"
    />
  </form>
</template>
