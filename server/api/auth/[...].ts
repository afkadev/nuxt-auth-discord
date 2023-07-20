import DiscordProvider from "@auth/core/providers/discord"
import type { AuthConfig } from "@auth/core/types"
import { NuxtAuthHandler } from "#auth"

const runtimeConfig = useRuntimeConfig()

export const authOptions: AuthConfig = {
    secret: runtimeConfig.authJs.secret,

    providers: [
        DiscordProvider({
            clientId: runtimeConfig.discord.clientId,
            clientSecret: runtimeConfig.discord.clientSecret
        })
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token
            }

            if (profile) {
                token.id = profile.id
                token.discriminator = profile.discriminator
            }
            return token
        },

        async session({ session, token }) {
            session.user.accessToken = token.accessToken
            session.user.id = token.id
            session.user.discriminator = token.discriminator

            return session
        }
    },
    pages: {
        signIn: '/auth/login',
    },
}

export default NuxtAuthHandler(authOptions, runtimeConfig)