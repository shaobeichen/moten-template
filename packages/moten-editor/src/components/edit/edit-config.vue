<template>
  <div class="edit-config" ref="target" :class="{ 'is-show': edit.configPanelShow }">
    
  </div>
</template>

<script setup lang="ts">
import { useEditStore } from '@/stores/edit'
import { watch } from 'vue'

const edit = useEditStore()
 
</script>

<style lang="scss" scoped>
.edit-config {
  position: fixed;
  z-index: 200;
  top: var(--edit-header-height);
  right: -280px;
  width: 280px;
  background: white;
  border-left: 1px solid var(--color-border);
  transition: right 0.5s cubic-bezier(1, 0, 0.61, 1.01);
  height: calc(100vh - var(--edit-header-height));

  &.is-show {
    right: 0;
    transition: right 0.5s cubic-bezier(1, 0, 0.61, 1.01);
  }

  .icon-group {
    position: absolute;
    left: -48px;
    top: 16px;
    .icon {
      cursor: pointer;
      width: 32px;
      height: 32px;
      padding: 3px;
      border-radius: var(--border-radius);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      transition: all 0.2s linear;
      border: 1px solid var(--color-border);
      background: white;
      & + .icon {
        margin-top: 10px;
      }
      &:hover {
        background: var(--color-icon-hover);
        transition: all 0.2s linear;
      }
    }
  }

  .content {
    overflow-y: auto;
    width: 100%;
    height: 100%;

    .title {
      padding: 14px;
      font-size: 20px;
      font-weight: 600;
    }

    :deep(.el-tabs--border-card) {
      border: 0;
    }
    :deep(.el-tabs__content) {
      padding: 0;
    }
  }
}
</style>
