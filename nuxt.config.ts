// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        typeCheck: true
    },
    devtools: {enabled: false},
    // @ts-ignore
    css: ['~/assets/scss/main.scss'],
    routeRules: {
        // Homepage pre-rendered at build time
        '/': { prerender: true },
    },
    runtimeConfig: {
        // примеры конфигов!!!
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api',
        },
    },
    modules: ["@pinia/nuxt", '@nuxt/test-utils/module'],
    pinia: {
        storesDirs: ['./stores/**', './custom-folder/stores/**'],
    },
    imports: {
        dirs: ['stores']
    }
})