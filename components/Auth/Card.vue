<script setup lang="ts">
const authState = ref<"login" | "signup">("login");
const toggleAuthState = () => {
    if (authState.value === "login") authState.value = "signup";
    else authState.value = "login";
}
const supabase = useSupabase()
</script>

<template>
    <div class="mt-10">
        <div class="flex flex-col bg-grey-lighter">
            <div class="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
                <div class="w-full px-6 py-8 text-black bg-white rounded shadow-md">
                    <!-- Login -->
                    <AuthLogin v-if="authState === 'login'" />
                    <!-- signup -->
                    <AuthRegister v-else />
                    <!-- toggle button -->
                    <div class="container flex flex-col items-center justify-center flex-1 my-10">
                        <span>
                            {{  (authState) === 'login' ? "Need an account" : "You have an account"  }}    
                            <span @click="toggleAuthState" class="text-blue-700 cursor-pointer"> 
                                {{  (authState) === 'login' ? "Create new account" : "Login now"  }}    
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  