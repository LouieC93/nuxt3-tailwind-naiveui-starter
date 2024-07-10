<template>
  <n-config-provider :theme-overrides="theme">
    <NuxtPage />
  </n-config-provider>
</template>
<script lang="ts" setup>
import type { GlobalThemeOverrides } from 'naive-ui'

const theme: GlobalThemeOverrides = {
  common: {
    primaryColor: '#538cc6'
  }
}
</script>
