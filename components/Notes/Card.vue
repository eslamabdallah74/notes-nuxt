<script setup lang="ts">
// VARS
const supabase = useSupabase();
const { user } = useAuth();
const success = ref("")
const NoteInput = reactive({
    title: "",
    note: ""
})

// Functions
const HandelSubmit = async () => {
    if (!NoteInput.title || !NoteInput.note) return;

    await supabase.from("notes").insert({
        title: NoteInput.title,
        note: NoteInput.note,
        user_id: user.value.id
    })
    success.value = "Note has been saved";
    NoteInput.title = "";
    NoteInput.note = "";
}

</script>

<template>
    <div>
        <!-- component -->
        <form class="w-full max-w-lg m-auto">
            <div class="flex flex-wrap mb-6 -mx-3">
                <div class="w-full px-3">
                    <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                        for="grid-password">
                        Note Title
                    </label>
                    <input
                        v-model="NoteInput.title"
                        class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email" type="email">
                </div>
            </div>
            <div class="flex flex-wrap mb-6 -mx-3">
                <div class="w-full px-3">
                    <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                        for="grid-password">
                        Note Message
                    </label>
                    <textarea
                        v-model="NoteInput.note"
                        class="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
                        id="message"></textarea>
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-3/3">
                    <button
                        @click="HandelSubmit"
                        class="px-4 py-2 font-bold text-white bg-teal-400 rounded shadow hover:bg-teal-400 focus:shadow-outline focus:outline-none"
                        type="button">
                        Send
                    </button>
                </div>
                <div class="md:w-2/3"></div>
            </div>
        </form>
        <div>
            <p v-if="success" class="font-bold text-green-500"> {{ success }} </p>
        </div>
    </div>
</template>