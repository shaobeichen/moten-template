<template>
  <div class="edit-block">
  
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { dragGroup } from './nested'
import { baseBlocks, seniorBlocks } from '@/config/block'

const menuList = ref([
  {
    icon: 'block',
    iconActive: 'blockActive',
    name: '组件',
  },
  {
    icon: 'kit',
    iconActive: 'kitActive',
    name: '套件',
  },
])
const activeMenu = ref(0)
const activeNames = ref(['1', '2'])

const baseBlockList = ref(baseBlocks)
const seniorBlockList = ref(seniorBlocks)
</script>

<style scoped lang="scss">
.edit-block {
  position: fixed;
  top: var(--edit-header-height);
  left: 0;
  flex-shrink: 0;
  background: white;
  border-right: 1px solid var(--color-border);
  display: flex;
  justify-content: flex-start;
  width: var(--edit-block-width);
  .left {
    width: 70px;
    height: calc(100vh - var(--edit-header-height));
    border-right: 1px solid var(--color-border);
    .menu-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding: 5.5px 0;
      border-radius: var(--border-radius);
      cursor: pointer;
      margin: 17px 5px;
      &.is-active,
      &:hover {
        background: var(--color-block-hover);
        border-radius: var(--border-radius);
      }
      .menu-icon {
        width: 30px;
        height: 30px;
        margin: 0 auto;
      }
      .menu-name {
        font-size: 14px;
        line-height: 14px;
        padding-top: 4px;
      }
    }
  }
  .right {
    flex: 1;
    height: calc(100vh - var(--edit-header-height));
    overflow: auto;
  }
  :deep(.el-collapse) {
    border: 0;
  }
  :deep(.el-collapse-item__header) {
    padding-left: 14px;
    font-size: 14px;
  }
  :deep(.el-collapse-item__content) {
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 14px;
  }
}
</style>
