<script setup>
import AppBar from '@/components/_organisms/AppBar';
</script>

<template>
  <AppBar/>

  <router-view/>
</template>

<style lang="scss">
@use 'scss/reset';
@use 'scss/shorthand';
</style>