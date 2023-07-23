<script setup>
const { signIn, session, status, cookies } = useAuth()
//definePageMeta({ auth: true })
const signinDiscord = () => {
    location.href = 'https://discord.com/api/oauth2/authorize?client_id=1128715170890395719&redirect_uri=https%3A%2F%2Fauthjs-nuxt.unpai.red%2Fapi%2Fauth%2Fcallback%2Fdiscord&response_type=code&scope=identify%20email'
}
</script>

<template>
    <div>
        <div>
            <button @click="signinDiscord()">
                Signin
            </button> | 
        </div>
        <div>
            <pre>{{ status }}</pre>
            <pre>{{ session?.user }}</pre>
            <pre>{{ cookies }}</pre>
          </div>
    
    </div>
</template>