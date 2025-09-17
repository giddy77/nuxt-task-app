<template>
    <nav class="container">
        <ul>
            <NuxtLink to="/">Task App</NuxtLink>

        </ul>
        <ul>
            <!-- <NuxtLink><a href="#">About</a></li> -->
            <NuxtLink :to="{ name: 'create' }">Create Task</NuxtLink>
           

        </ul>
    </nav>
</template>