const useAuth           = () => {
    const user          = useState('user', () => null);
    const supabase      = useSupabase();

    supabase.auth.onAuthStateChange((event, session) => {
        user.value  = session?.user || null;
    });


    const signUp  = async ({email,password, ...metadata}) => {
        const {user: signedUpUser, error} = await supabase.auth.signUp({email,password},
            {data: metadata, redirectTo: `${window.location.origin}/profile?verifed=true`});
        if (error) throw error;
        // Return signed Up User data
        return signedUpUser;
    };

    const signIn  = async ({email,password}) => {
        const {user: loginInUser, error} = await supabase.auth.signIn({email,password});
        if (error) throw error;
        return loginInUser;
    };

    const signOut = async () => {
        const {error} = await supabase.auth.signOut()
        if (error) throw error;
        return navigateTo("/");
    };

   

    return {user,signUp,signIn,signOut};

}

export default useAuth