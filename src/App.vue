<script setup lang="ts">
import { locale as dayjsLocale } from 'dayjs'

import 'dayjs/locale/zh-cn'

dayjsLocale('zh-cn')

document.addEventListener('contextmenu', (e) => {
  if (import.meta.env.PROD) {
    e.preventDefault()
  }
})
</script>

<template>
  <RouterView />
</template>
