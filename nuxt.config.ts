// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "node:path"
export default defineNuxtConfig({
  ssr: false,
  modules: ["@hebilicious/authjs-nuxt"],
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
        baseUrl: "/",
        verifyClientOnEveryRequest: true
      }
    }
  },
  alias: {
    "cookie": resolve(__dirname, "node_modules/cookie"),
    "jose": resolve(__dirname, "node_modules/jose/dist/browser/index.js"),
    "@panva/hkdf": resolve(__dirname, "node_modules/@panva/hkdf/dist/web/index.js")
  },
})
