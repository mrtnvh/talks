<template>
    <div class="grid grid-cols-2 p-0 w-full h-full">
        <div
            class="p-16"
            :class="{
                'flex flex-col justify-center': centered,
            }"
        >
            <slot />
        </div>
        <div
            class="p-16 bg-gray-200"
            :class="{
                'flex flex-col justify-center': centered,
            }"
        >
            <slot name="second" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    centered: {
        default: false,
    },
});
</script>
