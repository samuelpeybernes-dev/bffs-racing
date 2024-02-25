// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/index.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome', 'vuetify']
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    ['nuxt-mail', {
      message: [
        { name: 'samuel', to: 'samuelpeybernes33@gmail.com' },
        { name: 'lucas', to: 'lucas.therasse@gmail.com' },
      ],
      smtp: {
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
    }]
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
