<script setup>
import NamedSection from '@/components/_molecules/NamedSection';
import AvatarWithDetails from '@/components/_molecules/AvatarWithDetails';

const items = [
    {
        avatar: "https://i.pinimg.com/originals/6f/6a/d8/6f6ad850a31e051d40d309f675df27e2.jpg",
        username: "uiamjad",
        action: "FOLLOW",
        time: "1m",
    },
    {
        avatar: "https://i.pinimg.com/originals/6f/6a/d8/6f6ad850a31e051d40d309f675df27e2.jpg",
        username: "mr.albicla",
        action: "FOLLOW",
        time: "3m",
    },
]
</script>

<template>
    <v-card class="activity-card">
        <template v-slot:title>
            <v-text variant="h4">
                Activity
            </v-text>
        </template>

        <template v-slot:action>
            <v-btn text>
                See all
            </v-btn>
        </template>

        <div class="activity-card__content">
            <NamedSection
                title="New"
            >
                <AvatarWithDetails
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.src"
                >
                    <b>{{item.username}}</b>

                    <span v-if="item.action === 'FOLLOW'">
                        started following you
                    </span>

                    <v-text class="caption d-inline" style="color: #00000077; margin-left: .5rem">{{item.time}} ago</v-text>

                    <template v-slot:action>
                        <v-btn
                            :icon="['fal', 'user-plus']"
                            :iconOptions="{size: 'lg'}"
                            v-if="item.action === 'FOLLOW'"
                        />
                    </template>
                </AvatarWithDetails>
            </NamedSection>
        </div>
    </v-card>
</template>

<style lang="scss">
.activity-card {
    &__content {
        padding: 0 1.5rem;
    }
    .avatar-with-details {
        margin-bottom: 1.25rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>