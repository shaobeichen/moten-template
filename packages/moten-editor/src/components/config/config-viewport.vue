<template>
  <div class="config-viewport">
    <el-form-item :label="title" :prop="key + '.' + viewport">
      
    </el-form-item>
  </div>
</template>

<script lang="ts" setup>
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
.config-viewport {
  :deep(.el-form-item) {
    align-items: center;
  }
  .icon {
    :deep(.image-box) {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
