<script setup lang="ts">
const authState = ref<"login" | "signup">("signup");
const toggleAuthState = () => {
    if (authState.value === "login") authState.value = "signup";
    else authState.value = "login";
}
const supabase = useSupabase()
</script>

<template>
    <div class="">
        <div class="flex flex-col bg-grey-lighter">   
            <!-- Login -->
            <div v-if="authState === 'login'"
                class="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
                <div class="w-full px-6 py-8 text-black bg-white rounded shadow-md">
                    <h1 class="mb-8 text-3xl text-center">Sign In         
                    </h1>
                    <input type="text" class="block w-full p-3 mb-4 border rounded border-grey-light" name="email"
                        placeholder="Email" />

                    <input type="password" class="block w-full p-3 mb-4 border rounded border-grey-light"
                        name="password" placeholder="Password" />

                    <button type="submit"
                        class="w-full py-3 my-1 text-center text-white bg-green-900 rounded hover:bg-green-800 focus:outline-none">
                        Login
                    </button>

                </div>
                <div class="mt-6 text-grey-dark">
                    Don't have an account
                    <span @click="toggleAuthState" class="text-blue-700 cursor-pointer">
                        Sign Up.
                    </span>
                </div>
            </div>
            <!-- signup -->
            <div v-else class="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
                <div class="w-full px-6 py-8 text-black bg-white rounded shadow-md">
                    <h1 class="mb-8 text-3xl text-center">Sign Up</h1>
                    <input type="text" class="block w-full p-3 mb-4 border rounded border-grey-light" name="fullname"
                        placeholder="Full Name" />

                    <input type="text" class="block w-full p-3 mb-4 border rounded border-grey-light" name="email"
                        placeholder="Email" />

                    <input type="password" class="block w-full p-3 mb-4 border rounded border-grey-light"
                        name="password" placeholder="Password" />
                    <input type="password" class="block w-full p-3 mb-4 border rounded border-grey-light"
                        name="confirm_password" placeholder="Confirm Password" />

                    <button type="submit"
                        class="w-full py-3 my-1 text-center text-white bg-green-900 rounded hover:bg-green-800 focus:outline-none">Create
                        Account</button>
                </div>
                <div class="mt-6 text-grey-dark">
                    Already have an account?
                    <span @click="toggleAuthState" class="text-blue-700 cursor-pointer">
                        Login.
                    </span>
                </div>
            </div>

        </div>
    </div>
</template>
  