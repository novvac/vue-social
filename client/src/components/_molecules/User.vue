<script setup>
const props = defineProps({
    user: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <div class="user">
        <v-avatar src="https://www.w3schools.com/howto/img_avatar.png"/>

        <div class="user__details">
            <v-text variant="h5">
                John Doe
            </v-text>

            <v-text class="caption">
                Rzeszów, 23.11.2021 - 14:34
            </v-text>
        </div>
    </div>
</template>

<style lang="scss">
.user {
    display: flex;
    align-items: center;

    &__details {
        margin-left: 1rem;
    }
}
</style>