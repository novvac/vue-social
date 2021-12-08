<script setup>
import { computed } from 'vue';

const props = defineProps({
    icon: Array,
    iconOptions: Object,
})

const classes = computed(() => ({
    'v-btn--icon': props.icon
}))
</script>

<template>
    <button class="v-btn" :class="classes">
        <v-icon v-if="icon" :icon="icon" v-bind="iconOptions"></v-icon>
    </button>
</template>

<style lang="scss">
.v-btn {
    border: 0;
    outline: none;
    cursor: pointer;
    background: #f2f5f7;

    &--icon {
        border-radius: 50%;
        width: 42px;
        height: 42px;
        padding: 0;
    }
}
</style>