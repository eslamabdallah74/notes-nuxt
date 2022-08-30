<script setup lang="ts">
    definePageMeta({
        middleware: "auth"
    })
    const {user} = useAuth(); 
</script>

<template>
    <div class="text-center">
        <h2>Profile Page </h2>
    </div>
</template>