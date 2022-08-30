<script setup lang="ts">
const { signIn, user } = useAuth();
const router           = useRouter();
const AuthError        = ref("");
const LogInput         = reactive({
    email: "",
    password: ""
})
// Functions
const login = async () => {
    try {
        await signIn({ email: LogInput.email, password: LogInput.password });
        router.push('/profile');
    } catch (error) {
        AuthError.value = error.message;
    }
}
</script>
<template>
    <div>
        <h1 class="mb-8 text-3xl text-center">Sign In
        </h1>
        <input v-model="LogInput.email" type="text" class="block w-full p-3 mb-4 border rounded border-grey-light"
            name="email" placeholder="Email" />

        <input v-model="LogInput.password" type="password"
            class="block w-full p-3 mb-4 border rounded border-grey-light" name="password" placeholder="Password" />

        <button type="submit" @click="login"
            class="w-full py-3 my-1 text-center text-white bg-green-900 rounded hover:bg-green-800 focus:outline-none">
            Login
        </button>
        <p class="p-2 font-bold text-center text-red-800" v-if="AuthError"> {{  AuthError  }} </p>
    </div>
</template>