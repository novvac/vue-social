<template>
    <div
        class="container"
    >
        <slot/>
    </div>
</template>

<style scoped lang="scss">
@import '../../scss/responsive';

.container {
    margin-left: auto;
    margin-right: auto;

    @include xs {
        max-width: 1280px;
    }

    @include xl {
        max-width: 1500px;
    }
}
</style>