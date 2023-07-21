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
    
    //pages: {
    //    signIn: '/auth/login',
    //},
}

export default NuxtAuthHandler(authOptions, runtimeConfig)