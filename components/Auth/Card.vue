<template>
    <div class="">
        <!-- component -->
        <div class="flex flex-col bg-grey-lighter">
            <div class="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
                <div class="w-full px-6 py-8 text-black bg-white rounded shadow-md">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
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
<!-- 
                    <div class="mt-4 text-sm text-center text-grey-dark">
                        By signing up, you agree to the
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div> -->
                </div>

                <div class="mt-6 text-grey-dark">
                    Already have an account?
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        <span class="text-blue-700"> <nuxt-link to="/login">Log in</nuxt-link> </span>
                    </a>.
                </div>
            </div>
        </div>
    </div>
</template>
  