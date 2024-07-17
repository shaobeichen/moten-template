<template>
  <div class="config-column">
    <el-form-item>
     
    </el-form-item>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, toRefs, watch } from 'vue'

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
.config-column {
  .list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .action-box {
    width: 100%;
    display: flex;
  }
  .item {
    flex: 1;
    flex-shrink: 0;
    background: var(--color-config-block-bg);
    border: 1px dashed var(--color-border);
    border-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    font-size: 13px;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border: 1px dashed var(--color-border);
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    .input {
      width: 100%;
      height: 38px;
      padding: 8px;
      text-align: center;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    .icon {
      width: 20px;
      height: 20px;
      margin: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: #5a9cf8;
        border-radius: 4px;
        color: white;
      }
    }
  }
}
</style>
