<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layoutHelper";

const props = defineProps({
    background: {
        default: "",
    },
});

const style = computed(() => handleBackground(props.background));
</script>

<template>
    <div class="slidev-layout background" :style="style">
        <slot />
    </div>
</template>

<style>
.slidev-layout.background {
    @apply flex h-full;
}
</style>
