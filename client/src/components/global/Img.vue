<script setup>
import { computed } from 'vue';

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: 'alt'
    },
    rounded: {
        type: Boolean,
        default: true
    }
})

const classes = computed(() => ({
    'v-img--rounded': props.rounded
}))
</script>

<template>
    <div class='v-img' :class="classes">
        <img :src="src" :alt="alt"/>
    </div>
</template>

<style lang="scss">
.v-img {
    width: 100%;
    height: auto;
    overflow: hidden;

    &--rounded {
        border-radius: 8px;
    }

    img {
        display: block;
        width: 100%;
    }
}
</style>