import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ugyooromopzqkjlxpntn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVneW9vcm9tb3B6cWtqbHhwbnRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTc3MzkxNCwiZXhwIjoxOTc3MzQ5OTE0fQ.V5onTJ_66IVKttLYUQubnG1_A1Se0aYxfx3Tlo1B_Yg"

const useSupabase = () => {
    const  supabase = createClient(supabaseUrl, supabaseKey);
    return supabase;
}

export default useSupabase;