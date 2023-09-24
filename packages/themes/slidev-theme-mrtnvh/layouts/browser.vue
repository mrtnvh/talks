<template>
    <div class="slidev-layout browser">
        <slot />
    </div>
</template>

<style>
.slidev-layout.browser {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
}

.browser-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border: 3px solid #222;
    resize: horizontal;
    overflow: auto;
    flex-grow: 1;
}

.browser-body {
    flex-grow: 1;
    position: relative;
    zoom: normal;
}

.browser-body iframe {
    width: 200%;
    height: 200%;
    transform: translate(-25%, -25%) scale(0.5);
    position: absolute;
    top: 0;
    bottom: 0;
}
</style>
