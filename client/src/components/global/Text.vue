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
</style>