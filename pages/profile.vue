<script setup lang="ts">
definePageMeta({
    middleware: "auth"
})
const { user } = useAuth(); 

</script>

<template>
    <div class="py-10 text-center text-white bg-slate-500">
        <h1 class="text-6xl ">Notes</h1>
        <NotesCard />
    </div>
</template>