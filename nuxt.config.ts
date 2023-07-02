export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@vite-pwa/nuxt"],
  css: ["@/assets/styles/main.css"],
  devtools: { enabled: true },
  imports: {
    dirs: ["./stores"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Todolist",
      short_name: "Todolist",
      theme_color: "#f5f5f5",
      icons: [
        {
          src: "/pwa-48x48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/pwa-48x48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/pwa-72x72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/pwa-72x72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/pwa-96x96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/pwa-96x96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/pwa-128x128.png",
          sizes: "128x128",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/pwa-128x128.png",
          sizes: "128x128",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/pwa-144x144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/pwa-144x144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/pwa-152x152.png",
          sizes: "152x152",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/pwa-152x152.png",
          sizes: "152x152",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/pwa-256x256.png",
          sizes: "256x256",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/pwa-256x256.png",
          sizes: "256x256",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/pwa-284x284.png",
          sizes: "284x284",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/pwa-284x284.png",
          sizes: "284x284",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
  },
})
