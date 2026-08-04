<script setup>
import {
  contactNumbers,
  contactEmail,
  visitingAddress,
  postalAddress,
  visitingHoursNote
} from '@/data/contact'
import ContactHero from '@/components/contact/ContactHero.vue'
import ContactEnquiryForm from '@/components/contact/ContactEnquiryForm.vue'
</script>

<template>
  <main>
    <ContactHero />

    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="space-y-8">
          <section>
            <h2 class="text-lg font-semibold text-slate-900">Phone</h2>
            <ul class="mt-3 space-y-2">
              <li v-for="number in contactNumbers" :key="number.label" class="flex items-baseline gap-2 text-sm">
                <span class="text-slate-600">{{ number.label }}:</span>
                <a
                  :href="number.href"
                  class="font-medium"
                  :class="number.emergency ? 'text-emergency-600 hover:text-emergency-700' : 'text-hospital-brown-700 hover:text-hospital-brown-900'"
                >
                  {{ number.value }}
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-lg font-semibold text-slate-900">Email</h2>
            <p class="mt-3 text-sm">
              <a :href="contactEmail.href" class="font-medium text-hospital-brown-700 hover:text-hospital-brown-900">
                {{ contactEmail.value }}
              </a>
            </p>
            <p class="mt-2 text-sm text-slate-500">{{ contactEmail.note }}</p>
          </section>

          <section>
            <h2 class="text-lg font-semibold text-slate-900">Address</h2>
            <div class="mt-3 grid gap-6 sm:grid-cols-2">
              <div>
                <p class="text-sm font-medium text-slate-900">Visiting address</p>
                <p class="mt-1 text-sm text-slate-600">
                  <span v-for="line in visitingAddress" :key="line" class="block">{{ line }}</span>
                </p>
              </div>
              <div>
                <p class="text-sm font-medium text-slate-900">Postal address</p>
                <p class="mt-1 text-sm text-slate-600">
                  <span v-for="line in postalAddress" :key="line" class="block">{{ line }}</span>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-lg font-semibold text-slate-900">Visiting hours</h2>
            <p class="mt-3 text-sm text-slate-600">{{ visitingHoursNote }}</p>
          </section>
        </div>

        <div class="rounded-lg border border-hospital-brown-100 bg-white p-6 shadow-sm">
          <h2 class="text-lg font-semibold text-slate-900">Send a general enquiry</h2>
          <div class="mt-6">
            <ContactEnquiryForm />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
