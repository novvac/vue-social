<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="v-avatar">
        <img :src="src" alt="A">
    </div>
</template>

<style lang="scss">
.v-avatar {
    width: 42px;
    height: 42px;
    max-height: 100%;
    max-width: 100%;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        display: block;
    }
}
</style>