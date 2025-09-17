// server/api/users.post.ts
export default defineEventHandler(async (event) => {
    try {
        // Ensure it's a POST request
        assertMethod(event, 'POST');
        
        // Read and validate the request body
        const body = await readBody(event);
        
        // Optional: Validate required fields
        if (!body.name) {
            throw createError({
                statusCode: 400,
                statusMessage: "Name are required"
            });
        }
        
        // Make a POST request to external API
        const newUser = await $fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        return {
            success: true,
            data: newUser
        };

    } catch (error) {
        // Handle different error types
        if (error.statusCode) {
            throw error; // Re-throw our custom errors
        }
        
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to create user"
        });
    }
});