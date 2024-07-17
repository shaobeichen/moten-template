<template>
  <div class="config-input">
    <el-form-item :label="title" :prop="key + '.' + viewport">
        
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
  viewport: {
    type: String,
    default: 'desktop',
  },
})
 
</script>

<style lang="scss" scoped>
.config-input {
  :deep(.el-input__wrapper) {
    background: var(--color-config-block-bg);
  }
}
</style>
