export default defineEventHandler( async (event) => {
    try {
        const users = await $fetch('https://jsonplaceholder.typicode.com/users');
        return users;

    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch users"
        })
    }
    
})