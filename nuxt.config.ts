import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-10',
  ssr: false,
  devtools: { enabled: false },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['nuxtjs-naive-ui', '@nuxt/eslint'],
  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ]
  }
})
