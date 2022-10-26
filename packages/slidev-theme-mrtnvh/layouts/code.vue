<template>
    <div class="slidev-layout code">
        <slot />
    </div>
</template>

<style>
.slidev-layout.code {
    @apply flex w-full h-full py-6 px-12;

    background-color: hsl(220, 13%, 18%);
}

.slidev-layout.code > * {
    @apply flex-1;
}

</style>
