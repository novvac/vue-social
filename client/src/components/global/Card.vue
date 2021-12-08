<template>
    <div class="v-card">
        <div class="v-card__title">
            <slot name="title"/>

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
    border-radius: 16px;

    &__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .5rem;
        padding: 1.5rem;
    }
    &__content {
        padding-bottom: 1.5rem;
    }
}
</style>