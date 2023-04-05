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
            BASE_URL_UTIL: process.env.API_UTIL_URL,
            BASE_URL_STOCK: process.env.API_STOCK_URL,
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
                }
            ],
            script: [
                {
                    type: "text/javascript",
                    src: "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js",
                },
            ],
        },
    },
    css: [
        "assets/scss/index.scss",
        "material-icons/iconfont/material-icons.css",
        "assets/css/glyphicon-bs3.min.css",
        "assets/css/sba-styles.css",
        "assets/css/sba-kendo-styles.css"
    ],
    build: {
        transpile: ["mdb-vue-ui-kit"],
        // transpile: ["mdb-ui-kit"]
    },
    // script: [
    //     "@/assets/MDB-Free_4.20.0/js/mdb.min.js",
    // ],
    plugins: [],
    alias: {
        'stores': fileURLToPath(new URL('./src/stores', import.meta.url))
    }
});
