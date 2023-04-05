export default defineNuxtPlugin(() => {
    addRouteMiddleware('sbse003', () => {
        console.log("This named middleware was added in a plugin and would override any existing middleware of the same name.");
    })
})