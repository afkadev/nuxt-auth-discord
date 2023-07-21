<script setup>
const { signIn, session, status, cookies } = useAuth()
//definePageMeta({ auth: true })
</script>

<template>
    <div>
        <div>
            <button @click="signIn(`discord`)">
                Signin
            </button> | 
            <NuxtLink to="/">Index Without middleware</NuxtLink> | 
            <NuxtLink to="/private">Private With Middleware</NuxtLink>
        </div>
        <div>
            <pre>{{ status }}</pre>
            <pre>{{ session?.user }}</pre>
            <pre>{{ cookies }}</pre>
          </div>
    
    </div>
</template>