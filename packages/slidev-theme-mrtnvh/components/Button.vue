<template>
    <button>
        <slot />
    </button>
</template>

<style scoped>
button {
    color: var(--mrtnvh-background);
    background-color: var(--mrtnvh-foreground);
    border: 1px solid var(--mrtnvh-foreground);
    border-radius: var(--mrtnvh-radius);
    padding: 6px 12px;
    @apply text-sm;
}
button:hover {
    color: var(--mrtnvh-foreground);
    background-color: var(--mrtnvh-background);
}
</style>
