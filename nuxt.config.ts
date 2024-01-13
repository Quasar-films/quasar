// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        typeCheck: true
    },
    devtools: {enabled: true},
    // @ts-ignore
    css: ['~/assets/scss/main.scss'],
    routeRules: {
        // Homepage pre-rendered at build time
        '/': { prerender: true },
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    runtimeConfig: {
        // примеры конфигов!!!

        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api',
        },
    },
})
