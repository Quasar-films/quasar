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
})
