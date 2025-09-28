import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxt/eslint', '@nuxt/ui', 'reka-ui/nuxt'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    resendKey: process.env.RESEND_API_KEY,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  nitro: {
    experimental: {
      asyncContext: true,
    },
    // routeRules: {
    //   '/app/**': {
    //     ssr: false
    //   }
    // }
  },
})
