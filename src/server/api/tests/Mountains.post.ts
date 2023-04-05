export default defineEventHandler(async (event) =>{
    console.log("# event: ", event);
    const mountains = await $fetch('https://api.nuxtjs.dev/mountains')
    console.log("🗻 mountains: ", mountains);
    return mountains;
})