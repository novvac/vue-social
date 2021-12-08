<script setup>
import AvatarWithDetails from '@/components/_molecules/AvatarWithDetails';

const postButtons = [
    {
        name: 'heart'
    },
    {
        name: 'comment'
    },
    {
        name: 'share-nodes'
    }
]

const likeAvatars = [
    'https://avatars0.githubusercontent.com/u/246180?v=4',
    'https://www.w3schools.com/w3images/avatar2.png',
    'https://avatars0.githubusercontent.com/u/246180?v=4',
    'https://www.w3schools.com/w3images/avatar2.png',
]
</script>

<template>
    <v-card class="post">
        <template v-slot:title>
            <AvatarWithDetails
                title="John Doe"
                subtitle="Rzeszów, 08.12.2021 - 16:43"
            />
        </template>

        <template v-slot:action>
            <v-btn
                :icon="['far', 'ellipsis-h']"
                :iconOptions="{size: 'xl'}"
                text
            />
        </template>

        <v-text class="post__content body-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem qui repellat sed error ad eum veritatis sapiente nostrum ipsam. Veniam necessitatibus fugiat ullam nulla est sapiente harum totam molestiae dolorem.
        </v-text>

        <div class="post__images">
            <v-img src="https://cdn.pixabay.com/photo/2017/08/07/14/31/hand-2604429_960_720.jpg"/>
        </div>

        <div class="post__content">
            <div class="d-flex align-center justify-space-between">
                <div class="d-flex align-center">
                    <v-btn
                        v-for="item in postButtons"
                        :key="item.name"
                        :icon="['fal', item.name]"
                        :iconOptions="{size: 'xl'}"
                        style="margin-right: .5rem"
                        text
                    />
                </div>

                <v-btn
                    :icon="['fal', 'bookmark']"
                    :iconOptions="{size: 'xl'}"
                    text
                />
            </div>

            <div class="d-flex align-center" style="margin-top: .75rem;">
                <v-avatar-group
                    :avatars="likeAvatars"
                    style="margin-right: 16px"
                />

                <v-text class="body-1">
                    Liked by <b>John Doe</b> and <b>624 others</b>
                </v-text>
            </div>

            <div class="post__comments">
                <v-text class="body-1">
                    <b>John Doe</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum beatae velit, impedit ipsam eveniet repellat officia.
                </v-text>

                <v-text class="body-1">
                    <b>Baitcoin mASter</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, impedit?
                </v-text>
            </div>
        </div>
    </v-card>
</template>

<style lang="scss">
.post {
    &__images {
        padding: .75rem;
    }
    &__content {
        padding: 0 1.75rem 0 1.75rem;
    }
    &__comments {
        margin-top: 1rem;
    }
}
</style>