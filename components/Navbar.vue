<script setup lang="ts">
const { signOut, user } = useAuth();

</script>

<template>
    <div>
        <nav id="header" class="top-0 z-30 w-full py-4 bg-white border-b border-blue-400 shadow-lg">
            <div class="flex items-center justify-between w-full px-6 py-2 mt-0">
                <label for="menu-toggle" class="block cursor-pointer md:hidden">
                    <svg class="text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 20 20">
                        <title>menu</title>

                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input class="hidden" type="checkbox" id="menu-toggle">

                <div class="order-3 hidden w-full md:flex md:items-center md:w-auto md:order-1" id="menu">
                    <nav>
                        <ul class="items-center justify-between pt-4 text-base md:flex md:pt-0">
                            <li
                                class="inline-block px-4 py-2 text-lg font-medium no-underline hover:text-black lg:-ml-2 active">
                                <nuxt-link to="/">Home</nuxt-link>
                            </li>
                            <li 
                                class="inline-block px-4 py-2 text-lg font-medium no-underline hover:text-black lg:-ml-2">
                                <nuxt-link to="/add-note">Add Note</nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="flex flex-wrap items-center justify-end order-2 mr-0 md:order-3 md:mr-4" id="nav-content">
                    <div class="flex items-center w-full auth md:w-full">
                        <button v-if="user" @click="signOut" 
                            class="p-2 mr-4 text-gray-800 bg-transparent border border-gray-300 rounded">
                            Logout</button>
                        <button v-else class="p-2 mr-4 text-gray-800 bg-transparent border border-gray-300 rounded ">
                            Sign in</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style  scoped>
.active {
    color: blue;
}
</style>>
    
