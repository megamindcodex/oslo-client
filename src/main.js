import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import App from './App.vue'
import router from './router'

const hospitalPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#FBF5EE',
      100: '#F3E6D8',
      200: '#E8D2B8',
      300: '#DBB897',
      400: '#C6A17B',
      500: '#B08968',
      600: '#93714F',
      700: '#785A3E',
      800: '#5F4630',
      900: '#4A3626',
      950: '#3A2C1F'
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: hospitalPreset,
    options: {
      darkModeSelector: false
    }
  }
})

app.mount('#app')
