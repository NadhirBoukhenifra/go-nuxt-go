// import
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  // build config
  build: {
    transpile: ['vuetify']
  },
  // hooks config
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    }
  },
  // vite config
  vite: {
    ssr: {
      noExternal: ['vuetify']
    },
    define: {
      'process.env.DEBUG': false
    }
  },
  // custom css config
  css: ['~/assets/styles/main.scss'],
  // imports config
  imports: {
    dirs: ['./stores']
  },
})
