import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/app/providers/router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'
import './reset.css'
import { definePreset } from '@primeuix/themes'
import { createZod } from './shared/config'

createZod()

const AuraCustomPreset = definePreset(Aura, {
  semantic: {
    // primary: {
    //   50: '{indigo.50}',
    //   100: '{indigo.100}',
    //   200: '{indigo.200}',
    //   300: '{indigo.300}',
    //   400: '{indigo.400}',
    //   500: '{indigo.500}',
    //   600: '{indigo.600}',
    //   700: '{indigo.700}',
    //   800: '{indigo.800}',
    //   900: '{indigo.900}',
    //   950: '{indigo.950}',
    // },
    colorScheme: {
      light: {
        sidebar: {
          background: '{neutral.100}',
        },
        document: {
          background: '{neutral.300}',
          hover: {
            background: '{neutral.200}',
          },
        },
        message: {
          sent: {
            background: '{primary.100}',
          },
          recieved: {
            background: '{primary.500}',
          },
        },
      },
      dark: {
        sidebar: {
          background: '{neutral.900}',
        },
        document: {
          background: '{neutral.700}',
          hover: {
            background: '{neutral.800}',
          },
        },
        message: {
          sent: {
            background: '{primary.500}',
          },
          recieved: {
            background: '{primary.500}',
          },
        },
      },
    },
  },
})

createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: AuraCustomPreset,
      options: {
        darkModeSelector: '.dark',
      },
    },
  })
  .mount('#app')
