export default defineEventHandler( async (event) => {
   await new Promise(resolve => setTimeout(resolve,2000));
   return sendError(event, createError({
    status: 500,
    statusMessage: "Oh no my guy",
   }))
    return [
        {
            id: 1,
            title: "Learn Vue",
            done: false,
        },
         {
            id: 2,
            title: "Learn Nuxt",
            done: true,
        },
        {
            id: 3,
            title: "Learn Backend",
            done: true,
        }
    ];
});