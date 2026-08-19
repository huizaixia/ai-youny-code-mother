<script setup lang="ts">
import { RouterView } from 'vue-router'
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
</script>

<template>
  <a-layout class="basic-layout">
    <GlobalHeader />
    <a-layout class="basic-layout__body">
      <a-layout-content class="basic-layout__content">
        <RouterView />
      </a-layout-content>
      <GlobalFooter />
    </a-layout>
  </a-layout>
</template>

<style scoped>
.basic-layout {
  min-height: 100vh;
}

.basic-layout__body {
  background: #f5f5f5;
}

.basic-layout__content {
  flex: 1 0 auto;
  padding: 24px;
}
</style>
