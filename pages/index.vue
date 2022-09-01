 <script setup lang="ts">
 const supabase   = useSupabase();
 const { user }   = useAuth();
 const notes      = ref();
 const supabaseUser = supabase.auth.user()

console.log(supabaseUser?.id)

 
 if (process.client) {
     notes.value = await supabase
        .from("notes")
        .select()
        .eq("user_id", supabaseUser?.id);
 }
 
 </script>

<template>
    <div class="">
        <AuthCard v-if="!user" />
        <div v-else>
            <div>
                <h1>My Notes</h1>
                
            </div>
        </div>
    </div>
</template> 
  