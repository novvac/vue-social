<script setup>
const props = defineProps({
    variant: {
        type: String,
        default: "p"
    },
})
</script>

<template>
    <component
        :is="variant"
    >
        <slot/>
    </component>
</template>

<style scoped lang="scss">
@use '../../scss/variables';

*, *::before, *::after {
    font-family: variables.$font-family;
}
.caption {
    font-size: .8rem;
    font-weight: 300;
}
.body-1 {
    font-size: .9rem;
    font-weight: 300;
    line-height: 1.63;
    text-align: justify;
}
.body-2 {
    font-size: .9rem;
    font-weight: 300;
    line-height: 1.3;
}
</style>