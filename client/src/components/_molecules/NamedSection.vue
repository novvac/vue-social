<script setup>
const props = defineProps({
    title: String,
})
</script>

<template>
    <div class="named-section">
        <v-text variant="h5" class="named-section__title text-medium">
            {{title}}
        </v-text>

        <slot/>
    </div>
</template>

<style lang="scss">
.named-section {
    &__title {
        margin-bottom: 1rem;
    }
}
</style>