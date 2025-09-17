<template>
   <AppNavBar />
    <main class="container">
        <slot />
    </main>
</template>
<style>
.error {
    color: red;
}
.button-container {
    display: flex;
    justify-content: end;
}
</style>