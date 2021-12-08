<script setup>
import { computed } from 'vue';

const props = defineProps({
    icon: Array,
    iconOptions: Object,
    text: Boolean,
    avatar: Boolean
})

const classes = computed(() => ({
    'v-btn--icon': props.icon,
    'v-btn--text': props.text,
    'v-btn--avatar': props.avatar
}))
</script>

<template>
    <button class="v-btn" :class="classes">
        <v-icon v-if="icon" :icon="icon" v-bind="iconOptions"/>
        <v-text>
            <slot/>
        </v-text>
    </button>
</template>

<style lang="scss">
.v-btn {
    border: 0;
    outline: none;
    cursor: pointer;
    background: #f2f5f7;
    padding: .5rem 1rem;
    border-radius: 12px;
    flex: none;

    &--icon {
        border-radius: 50%;
        width: 42px;
        height: 42px;
        padding: 0;
    }
    &--text {
        background: transparent;
        padding: .25rem .75rem;
        color: #00000088;

        &:hover {
            color: #222;
        }
    }
    &--avatar {
        padding: 0;
        width: 42px;
        height: 42px;
    }
}
</style>