<template>
    <div class="slidev-layout blocks">
        <slot />
    </div>
</template>

<style>
.slidev-layout.blocks {
    @apply flex flex-col h-full p-0;
}

.blocks ul {
    @apply flex flex-col flex-grow m-0;
}

.blocks li {
    @apply flex flex-col m-0 p-6 flex-grow items-center justify-center font-extrabold text-3xl;
}

.blocks li:before {
    display: none;
}

.blocks li:nth-child(odd) {
    @apply bg-gray-200;
}
</style>


