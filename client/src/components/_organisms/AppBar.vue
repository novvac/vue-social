<script setup>
import Logo from '@/components/_atoms/Logo';

const icons = [
    {
        name: 'square-plus',
        title: "Add new post"
    },
    {
        name: 'phone',
        title: "Call to somebody"
    },
]
</script>

<template>
    <header class="app-bar">
        <v-container>
            <v-row class="align-center">
                <v-col :size="{xs: 0, lg: 3}">
                    <Logo/>
                </v-col>

                <v-col :size="{xs: 6, sm: 8, lg: 6}">
                    <v-input
                        fullWidth
                        placeholder="Search"
                    >
                        <template v-slot:prepend-icon>
                            <v-icon :icon="['fal', 'magnifying-glass']"/>
                        </template>
                    </v-input>
                </v-col>

                <v-col :size="{xs: 6, sm: 4, lg: 3}" class="d-flex align-center justify-end">
                    <v-btn
                        v-for="icon in icons"
                        :key="icon.name"
                        :icon="['fal', icon.name]"
                        :iconOptions="{size: 'lg'}"
                        :title="icon.title"
                        style="margin-right: .75rem"
                    />

                    <v-btn avatar>
                        <v-avatar src="https://www.w3schools.com/howto/img_avatar.png"/>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </header>
</template>

<style lang="scss">
.app-bar {
    background: white;
    padding: 1rem 0;
}
</style>