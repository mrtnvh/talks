<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layoutHelper";

const props = defineProps({
    background: {
        // random image from a curated Unsplash collection by Anthony
        default: "https://source.unsplash.com/collection/94734566/1920x1080",
    },
});

const style = computed(() => handleBackground(props.background));
</script>

<template>
    <div class="slidev-layout cover text-center p-0" :style="style">
        <div class="my-auto w-full">
            <slot />
        </div>
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


