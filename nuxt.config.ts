import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // dev: true,
    // debug: true,
    devServer: {
        port: 5689,
        // https: true,
    },
    typescript: {
        strict: true,
        typeCheck: true,
    },
    experimental: {
        crossOriginPrefetch: true,
    },
    srcDir: "src/",
    component: {
        ignorePrefix: true
    },
    // imports: {
    //     dirs: [
    //         // Auto-import pinia stores defined in `~/stores`
    //         "stores",
    //         // Scan top-level modules
    //         "composables",
    //         // ... or scan modules nested one level deep with a specific name and file extension
    //         "composables/*/index.{ts,js,mjs,mts}",
    //         // ... or scan all modules within given directory
    //         "composables/**",
    //     ],
    // },
    runtimeConfig: {
        // isCorsOriginAllowed: true,
        // Private keys are only available on the server
        apiSecret: "123",
        menuURL: process.env.MENU_URL || "",
        public: {
            baseURLUtil: process.env.API_UTIL_URL,
            menuURL: process.env.MENU_URL || "",
            apiUtil: process.env.API_UTIL_URL,
            apiStock: process.env.API_STOCK_URL,
            BASE_API_UTIL: process.env.BASE_API_UTIL,
            BASE_API_STOCK: process.env.BASE_API_STOCK,
            FS_LANG: "EN",
        },
    },
    app: {
        pageTransition: {
            name: "page",
            mode: "out-in", // Default
        },
        layoutTransition: {
            name: "slide",
            mode: "out-in", // Default
        },
        head: {
            title: "[Dev] Stock Management",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content:
                        "width=device-width, initial-scale=1, shrink-to-fit=no",
                },
            ],
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    href: "sba-icon.ico",
                },
                {
                    rel: "preload",
                    type: "font/ttf",
                    href: "fonts/Prompt-Regular.ttf",
                    as: "font",
                },
                {
                    rel: "stylesheet",
                    href: "fonts.css"
                },
                {
                    // <!-- Font Awesome -->
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
                }
            ],
            script: [
                // {
                //     type: "text/javascript",
                //     src: "public/js/jquery.min.js"
                // },
                // {
                //     type: "text/javascript",
                //     //         // src: "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
                //     //         // src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js'
                //     src: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js",
                //     // src: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.2.0/mdb.min.js",
                //     // src: "https://cdn.jsdelivr.net/npm/mdb-ui-kit@4.2.0/js/mdb.min.js",
                //     // src: "public/js/mdb.min.js"
                //     // src: "js/mdb-6.2.0.min.js"
                // },
            ],
        },
    },
    // css: ["@/assets/MDB-Free_4.16.0/css/compiled-4.16.0.min.css", "@/assets/css/sba-styles.css"],
    css: [
        "assets/scss/index.scss"
    ],
    build: {
        transpile: ["mdb-vue-ui-kit"],
        // transpile: ["mdb-ui-kit"]
    },
    // script: [
    //     "@/assets/MDB-Free_4.20.0/js/mdb.min.js",
    // ],
    plugins: [{ src: '~/plugins/axios.ts', mode: 'client' }],
    // modules: ['@pinia/nuxt'],
    // modules: [
    //     // Simple usage
    //     // '@nuxtjs/eslint-module'
    //     // With options => ['@nuxtjs/eslint-module', { /* module options */ }]
    // ]
    // i18n: {
    //     locales: [{
    //         code: 'en',
    //         file: '/en-US.json'
    //     }],
    //     lazy: true,
    //     langDir: 'lang',
    //     defaultLocale: 'en'
    // }
    alias: {
        'stores': fileURLToPath(new URL('./src/stores', import.meta.url))
    },
    components: [
        {
          path: '~/components', // will get any components nested in let's say /components/test too
          pathPrefix: false,
        }
    ]
});
