<script setup>
import { defineAsyncComponent } from 'vue'
const layoutComponent = defineAsyncComponent(() => import('@s/components/DashboardOut.vue'))
</script>

<template>
  <layoutComponent>
    <router-view />
  </layoutComponent>
</template>
