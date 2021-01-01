import fa from 'vuetify/es5/locale/fa';

export default {
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'leaflet/dist/leaflet.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/leaflet.js', mode: 'client'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    'nuxt-i18n'
  ],
  i18n: {
    locales: [
      {
        code: 'fa',
        file: 'fa-IR.js'
      },
      {
        code: 'en',
        file: 'en-US.js'
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'fa'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://qanat.jky.ir/api'
  },
  /*
  ** Auth module configuration
  ** See https://auth.nuxtjs.org/
  */
  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'http://qanat.jky.ir/oauth/token', method: 'post' },
          logout: { url: '/user/logout', method: 'post' },
          user: { url: '/user/currentUser', method: 'get' }
        },
        redirect: {
          login: '/login',
          logout: '/login',
          home: '/'
        },
      }
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    lang: {
      locales: { fa },
      current: 'fa',
    },
    rtl: true,
    theme: {}
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
