<template>
  <div class="edit-config-page">
  </div>
</template>

<script setup lang="ts">
import { useEditStore } from '@/stores/edit'
import { ref } from 'vue'
import { pageSchema, type PageSchemaFormData } from '@/config/schema'
import deepmerge from 'deepmerge'

const edit = useEditStore()
  
</script>

<style lang="scss" scoped>
.edit-config-page {
  width: 100%;
}
</style>
