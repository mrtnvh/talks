<template>
    <div class="cover flex-col justify-center align-center text-center">
        <slot />
    </div>
</template>

<style>
.cover {
    @apply flex h-full;
}

.cover h1 {
    @apply text-7xl;
}

.cover h1 + p {
    @apply text-lg mt-2;
}
</style>
