<script lang="ts" setup>
const {data: users, error, status} = await useFetch("api/users/users", {
    lazy: true
});
</script>
<template>
    <div>
        <article v-if="status == 'pending'" aria-busy="true" />
        <article v-else-if="error" class="error">{{ error.statusMessage }}</article>
        <div v-else>
        <article v-for="user in users" :key="user.id">
            {{ user.name }}, {{ user.company.name }}
        </article>
    </div>
    </div>
</template>