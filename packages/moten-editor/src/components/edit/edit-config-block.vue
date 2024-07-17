<template>
  <div class="edit-config-block">
 
  </div>
</template>

<script setup lang="ts">
import { useEditStore } from '@/stores/edit'
import { ref, watch } from 'vue'
import { blockSchema, type BlockSchema, type BlockSchemaKeys } from '@/config/schema'
import type { BaseBlock } from '@/types/edit'
import { findNodeById } from './nested'
import deepmerge from 'deepmerge'

const edit = useEditStore()

const list = ref<BaseBlock[]>([])
const schema = ref<BlockSchema[BlockSchemaKeys]>()

 
 
</script>

<style lang="scss" scoped>
.edit-config-block {
  width: 100%;
}
</style>
