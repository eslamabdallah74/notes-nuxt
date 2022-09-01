 <script setup lang="ts">
 const supabase = useSupabase();
 const { user } = useAuth();
 const notes = ref();
 const supabaseUser     = supabase.auth.user();
 const deletedMessage = ref();

 //  Get data
 if (process.client) {
     notes.value = await supabase
         .from("notes")
         .select()
         .eq("user_id", supabaseUser?.id)
         .order('created_at', { ascending: false });
 }
 
 // Delete data
 const deleteNote = async (noteID) => {
     const { data, error } = await supabase
         .from('notes')
         .delete()
         .match({ id: noteID });
      deletedMessage.value = ref("Note has been deleted successfully");
    //   Refresh notes
      notes.value = await supabase
         .from("notes")
         .select()
         .eq("user_id", supabaseUser?.id)
         .order('created_at', { ascending: false });
 }
 
 </script>

<template>

    <div class="">
        <AuthCard v-if="!user" />
        <div v-else>
            <div class="px-10 py-4">
                <h1 class="p-4 text-3xl">My Notes</h1>
                <h6 class="p-2 text-center text-white bg-green-700" v-if="deletedMessage"> {{ deletedMessage }}</h6>

                <!-- This is an example component -->
                <div v-for="note in notes?.data" :key="note.id" class='items-center min-w-full mt-4 flex-col-1'>
                    <div class="bg-white border shadow-md rounded-xl">
                        <div class="flex items-center justify-between w-full pb-3 border-b">
                            <div class="flex items-center p-4 space-x-3">
                                <div class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]">
                                </div>
                                <div class="text-lg font-bold text-slate-700">{{ supabaseUser?.email }}</div>
                            </div>
                            <div class="flex items-center p-4 space-x-8">
                                <div class="text-xs text-neutral-500"> {{ note.created_at }} </div>
                                <div>
                                    <button @click="deleteNote(note.id)" class="p-2 text-white bg-red-400 rounded-md">Delete</button>
                                </div>
                            </div>
                        </div>

                        <div class="w-full p-4 mt-4 mb-6">
                            <div class="mb-3 text-xl font-bold"> {{ note.title }} </div>
                            <div class="p-4 text-sm text-neutral-600">{{ note.note }} lor</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 
  