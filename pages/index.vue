<script setup>
const { signIn, signOut, session, status, cookies } = useAuth()
//definePageMeta({ auth: true })
const username = session.value?.user?.name ?? 'Guest'
console.log(status.value)
console.log(username)
</script>

<template>
    <div>
        <div>
            <button @click="signOut()" v-if="status === 'authenticated'">
                Logout
            </button>
            <button @click="signIn(`discord`)" v-else>
                Sign In
            </button>
        </div>
        <div>
            <p v-if="status === 'authenticated'">Hello, {{ username }}</p>
            <p v-else>Hello, Guest</p>
        </div>
        <div>
            <pre>{{ status }}</pre>
            <pre>{{ session }}</pre>
            <pre>{{ cookies }}</pre>
          </div>
    </div>
</template>