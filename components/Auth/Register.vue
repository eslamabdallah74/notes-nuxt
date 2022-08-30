<script setup lang="ts">
const { signUp, user }   = useAuth();
const RegAuthError       = ref("");
const waitingForConfirm  = ref("");
const RegInput = reactive({
    email: "",
    password: ""
})
// Functions
const register = async () => {
    try {
        await signUp({ email: RegInput.email, password: RegInput.password });
        RegInput.email = "";
        RegInput.password = "";
        waitingForConfirm.value = "Please Confirm your E-mail."
    } catch (error) {
        RegAuthError.value = error.message;
    }
}
</script>

<template>
    <div>
        <h1 class="mb-8 text-3xl text-center">Sign Up</h1>
        <input v-model="RegInput.email" type="text" class="block w-full p-3 mb-4 border rounded border-grey-light"
            name="email" placeholder="Email" />
        <input v-model="RegInput.password" type="password"
            class="block w-full p-3 mb-4 border rounded border-grey-light" name="password" placeholder="Password" />
        <button type="submit" @click="register"
            class="w-full py-3 my-1 text-center text-white bg-green-900 rounded hover:bg-green-800 focus:outline-none">Create
            Account
        </button>
        <p class="p-2 font-bold text-center text-red-800" v-if="RegAuthError"> {{  RegAuthError  }} </p>
        <p class="p-2 font-bold text-center text-green-500" v-if="waitingForConfirm"> {{  waitingForConfirm  }} </p>

    </div>
</template>