export default defineNuxtRouteMiddleware((to, from) => {
    console.log("🔨|middleware: defineNuxtRouteMiddleware")
    console.log("# To: ", to);
    console.log("# From: ", from);
    // if (to.params.id === '1') {
    //     return abortNavigation()
    // }
    // return navigateTo('/');
})