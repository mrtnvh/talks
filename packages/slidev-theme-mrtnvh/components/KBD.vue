<script lang="ts">
export default {
    props: {
        command: {
            type: Boolean,
            default: false,
        },
        shift: {
            type: Boolean,
            default: false,
        },
        option: {
            type: Boolean,
            default: false,
        },
        control: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<template>
    <kbd>
        <span v-if="command">⌘</span>
        <span v-if="shift">⇧</span>
        <span v-if="option">⌥</span>
        <span v-if="control">⌃</span>
        <span class="kbd-text">
            <slot />
        </span>
    </kbd>
</template>

<style scoped>
kbd {
    font-family: "Inter", sans-serif;
    background-color: var(--accents-1);
    border: 1px solid var(--accents-3);
    border-radius: var(--mrtnvh-radius);
    padding: .25rem .5rem;
    @apply text-sm tracking-tight;
}
kbd > span:nth-child(n + 2) {
    padding-left: 0.25rem;
}
</style>
