<script>
export default {
    inheritAttrs: false,
}
</script>

<script setup>
import { computed, coputed } from 'vue';

const props = defineProps({
    size: {
        type: Object,
        default: () => ({})
    }
})

const COL_SIZE = 8.333;
const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];

const cssProps = computed(() => {
    const sizes = {
        '--xs': '100%'
    }
    BREAKPOINTS.forEach((point, index) => {
        if(props.size[point] !== undefined) {
            sizes['--' + point] = Math.round(COL_SIZE * props.size[point]) + '%';
        } else {
            if(index > 0)
                sizes['--' + point] = sizes['--' + BREAKPOINTS[index-1]]
        }
    })

    return sizes;
})
</script>

<template>
    <div class="v-col" :style="cssProps">
        <div class="v-col__wrapper" v-bind="$attrs">
            <slot/>
        </div>
    </div>
</template>

<style lang="scss">
@import '../../scss/responsive';

.v-col {
    flex: 0 1 100%;
    overflow: hidden;

    @include xs { flex: 0 1 var(--xs) }
    @include sm { flex: 0 1 var(--sm) }
    @include md { flex: 0 1 var(--md) }
    @include lg { flex: 0 1 var(--lg) }
    @include xl { flex: 0 1 var(--xl) }

    &__wrapper {
        padding: 0 1rem;
    }
}
</style>