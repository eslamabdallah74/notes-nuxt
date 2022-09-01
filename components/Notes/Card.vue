<script setup lang="ts">
// VARS
const supabase  = useSupabase();
const { user }    = useAuth();   
const success     = ref("")
const NoteInput   = reactive({
    title: "",
    note: ""
})

// Functions
const HandelSubmit = async () => {
    if(!NoteInput.title || !NoteInput.note) return;
    
    await supabase.from("notes").insert({
        title: NoteInput.title,
        note: NoteInput.note,
        user_id: user.value.id
    })
    success.value   = "Note has been saved";
    NoteInput.title = "";
    NoteInput.note  = "";
}
    
</script>

<template>
    <div class="py-10 m-auto mt-10 border-2 border-gray-400 rounded-md shadow-emerald-500 w-96">
        <div class="flex justify-between m-4">
            <label class="w-28" for="">Add Title</label>
            <input v-model="NoteInput.title" type="text" placeholder="Note title" class="px-2 border bg-slate-700 w-52">
        </div>
        <div class="flex justify-between m-4">
            <label class="w-28" for="">Add Note</label>
            <textarea v-model="NoteInput.note" class="px-2 border w-52 h-36 bg-slate-700" name="" placeholder="Note"></textarea>
        </div>
        <div class="">
            <button @click="HandelSubmit" class="p-2 text-black bg-blue-300 rounded-md">Add Note</button>
        </div>
        <div>
            <p v-if="success" class="font-bold text-green-500"> {{ success }} </p>
        </div>
    </div>
</template>