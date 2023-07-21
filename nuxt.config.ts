// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "node:path"
export default defineNuxtConfig({
  ssr: false,
  modules: ["@hebilicious/authjs-nuxt", '@vite-pwa/nuxt'],
  runtimeConfig: {
    authJs: {
      secret: "ThisSecretOpenSSLKey"
    },
    discord: {
      clientId: "1128715170890395719",
      clientSecret: "DzEUB9Cxsyn65jl2Dvq5N3vSDm4UcCyf"
    },
    public: {
      authJs: {
        guestRedirectTo: "/auth/login",
        baseUrl: "https://authjs-nuxt.unpai.red",
        verifyClientOnEveryRequest: true
      }
    }
  },
  alias: {
    "cookie": resolve(__dirname, "node_modules/cookie"),
    "jose": resolve(__dirname, "node_modules/jose/dist/browser/index.js"),
    "@panva/hkdf": resolve(__dirname, "node_modules/@panva/hkdf/dist/web/index.js")
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt Vite PWA Auth Discord',
      short_name: 'NuxtVitePWAAuth',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      //periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
})
