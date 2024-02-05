// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: ''
    },
    devtools: { enabled: false },
    css: ['~/assets/scss/main.scss'],
    // runtimeConfig: {
    //     // примеры конфигов!!!
    //     apiSecret: '123',
    //     // Keys within public are also exposed client-side
    //     public: {
    //         apiBase: '/api',
    //     },
    // },
    modules: ['@pinia/nuxt', '@nuxt/test-utils/module'],
    pinia: {
        storesDirs: ['./stores/**', './custom-folder/stores/**']
    },
    imports: {
        dirs: ['stores']
    },
    $production: {
        typescript: {
            typeCheck: false
        }
    },
    $development: {
        typescript: {
            typeCheck: true
        }
    }
})
