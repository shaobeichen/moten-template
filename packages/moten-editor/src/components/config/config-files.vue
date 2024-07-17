<template>
  <div class="config-files">
    <el-form-item :label="title" :prop="key + '.' + viewport">
 
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'
import { useFormItem } from 'element-plus'
const { formItem } = useFormItem()

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
.config-files {
  .file,
  .image {
    width: 80px;
    height: 80px;
    box-shadow: 0 0 0 1px var(--color-border) inset;
    border-radius: var(--border-radius);
    background: var(--color-config-block-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .is-error {
    .file,
    .image {
      box-shadow: 0 0 0 1px var(--el-color-danger) inset;
    }
  }
  .image {
    border: 0;
    width: 82px;
    height: 82px;
    object-fit: cover;
  }
  .icon {
    width: 26px;
    height: 26px;
  }
}
</style>
