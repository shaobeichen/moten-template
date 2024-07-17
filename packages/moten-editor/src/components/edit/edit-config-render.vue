<template>
  <div class="edit-config-render">
    <el-form label-width="auto" ref="ruleFormRef" :model="form" :rules="rules">
     
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { batchDynamicComponents } from '@/utils/index'
import { useEditStore } from '@/stores/edit'
const edit = useEditStore()

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  schema: {
    type: Object,
    default: () => {},
  },
})
 
</script>

<style lang="scss" scoped>
.edit-config-render {
  overflow-y: auto;
  width: 100%;

  :deep(.el-form) {
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 14px;
  }
  :deep(.el-form-item__label) {
    justify-content: flex-start;
  }
}
</style>
