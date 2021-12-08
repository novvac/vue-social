<template>
    <div class="v-card">
        <div class="v-card__title">
            <v-text variant="h5">
                <slot name="title"/>
            </v-text>

            <slot name="action"/>
        </div>

        <div class="v-card__content">
            <slot/>
        </div>
    </div>
</template>

<style lang="scss">
.v-card {
    background: white;
    padding: 1rem;
    border-radius: 16px;

    &__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__content {
        margin-top: 1rem;
    }
}
</style>