<script setup>
const name = ref("");
async function onSubmit() {
  const result =   await $fetch('/api/users/users', {
        method: "POST",
        body: {
            name: name.value
        }
    })

    console.log(result);
}
</script>
<template>
    <div>
        <form @submit.prevent="onSubmit">
            <label for="user"> Name
                <input type="text" name="name" v-model="name">
            </label>
            <div class="button-container">
                <button>create</button>
            </div>
        </form>
    </div>
</template>