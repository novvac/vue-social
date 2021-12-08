<script setup>
const props = defineProps({
    src: {
        type: String,
        default: "https://m.innpoland.pl/52ef678cadd9b24c92272bbf36c848cc,0,0,0,0.jpg"
    },
    title: String,
    subtitle: String,
})
</script>

<template>
    <div class="avatar-with-details">
        <v-avatar :src="src" style="flex: none;"/>

        <div class="avatar-with-details__details">
            <v-text variant="h5" v-if="title">
                {{title}}
            </v-text>

            <v-text class="caption" v-if="subtitle">
                {{subtitle}}
            </v-text>

            <v-text class="body-2">
                <slot/>
            </v-text>
        </div>


        <slot name="action"/>
    </div>
</template>

<style lang="scss">
.avatar-with-details {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__details {
        margin-left: 1rem;
    }
}
</style>