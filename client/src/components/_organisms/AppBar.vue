<script setup>
import Logo from '@/components/_atoms/Logo';

const icons = [
    {
        name: 'square-plus',
    },
    {
        name: 'phone'
    }
]
</script>

<template>
    <header class="app-bar">
        <v-container>
            <v-row>
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

                <v-col :size="{xs: 6, sm: 4, lg: 3}" class="text-right">
                    <v-btn
                        v-for="icon in icons"
                        :icon="['fal', icon.name]"
                        :iconOptions="{size: 'lg'}"
                        style="margin-left: .5rem"
                    />
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