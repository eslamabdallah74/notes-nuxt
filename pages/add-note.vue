<script setup lang="ts">
definePageMeta({
    middleware: "auth"
})
const { user } = useAuth(); 

</script>

<template>
    <div class="min-h-screen py-10 text-center bg-slate-500">
        <NotesCard />
    </div>
</template>