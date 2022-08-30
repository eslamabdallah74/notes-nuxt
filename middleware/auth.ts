export default defineNuxtRouteMiddleware(() => {
    const {user} = useAuth();
    if (user.value === null) {
        return navigateTo("/");
    }
})