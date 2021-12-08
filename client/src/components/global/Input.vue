<script setup>
import { computed } from 'vue';
const props = defineProps({
    fullWidth: Boolean
});

const classes = computed(() => ({
    'v-input--fullWidth': props.fullWidth
}))
</script>

<template>
    <label class="v-input" :class="classes">
        <div class="v-input__wrapper">
            <slot name="prepend-icon"/>

            <input
                class="v-input__input"
                v-bind="$attrs"
            />
        </div>
    </label>
</template>

<style lang="scss">
.v-input {
    display: inline-block;
    background: #f2f5f7;
    border-radius: 3rem;
    padding: 0 1rem;

    &--fullWidth { width: 100%; }

    &__wrapper {
        display: flex;
        align-items: center;
    }

    &__input {
        flex-grow: 1;
        border: 0;
        outline: 0;
        background: transparent;
        font-size: 1rem;
        padding: .75rem .5rem;
        max-width: calc(100% - .5rem);

        &::placeholder {
            color: rgba(0,0,0,.4);
        }
    }
}
</style>