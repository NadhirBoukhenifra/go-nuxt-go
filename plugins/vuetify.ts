// import
import { createVuetify } from 'vuetify'
// import
import { LIGHT, light, DARK, dark } from '~/helpers/vuetify-themes'
// import
import { defaults } from '~/helpers/vuetify-defaults'
// import
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
// import
import customIcons from '~/helpers/vuetify-icons'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,
    display: {
      mobileBreakpoint: 'sm',
    },
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        ...customIcons,
      },
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: LIGHT,
      themes: {
        light,
        dark,
      },
      variations: {
        colors: ['primary', 'secondary', 'accent'],
        lighten: 3,
        darken: 3,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
