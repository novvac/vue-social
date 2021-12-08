<script setup>
import ActivityCard from '@/components/_organisms/ActivityCard';
import PostList from '@/components/_organisms/Post/PostList';
</script>

<template>
  <v-container style="padding: 1.5rem 0">
    <v-row>
      <v-col :size="{xs: 0, lg: 3}">
        <ActivityCard/>
      </v-col>

      <v-col :size="{md: 8, lg: 6}">
        <PostList/>
      </v-col>

      <v-col :size="{xs: 12, md: 4, lg: 3}">
        friends, messages
      </v-col>
    </v-row>
  </v-container>
</template>