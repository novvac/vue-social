<script setup>
import { computed } from 'vue';
const props = defineProps({
    avatars: {
        type: Array,
        required: true
    }
})

function computePosition(index) {
    return `left: ${index * 16}px`
}
const groupWidth = computed(() => {
    return `width: ${32 + (props.avatars.length - 1) * 16}px`;
})
</script>

<template>
    <div class="avatar-group" :style="groupWidth">
        <div
            v-for="(avatar, index) in avatars"
            :key="index"
            class="avatar-group__avatar-wrapper"
            :style="computePosition(index)"
        >
            <v-avatar :src="avatar"/>
        </div>
    </div>
</template>

<style lang="scss">
.avatar-group {
    position: relative;
    height: 32px;
    
    &__avatar-wrapper {
        width: 32px;
        height: 32px;
        position: absolute;
        top: 0;
        background: white;
        border: 3px solid white;
        border-radius: 50%;
    }
    &::after {
        clear: both;
    }
}
</style>