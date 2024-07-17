<template>
  <div class="header">
    <div class="header-left">
      <div class="back">
        <v-icon-tooltip content="返回" icon="back" />
        <div class="header-title">页面</div>
      </div>

      <div class="line"></div>

      <v-select v-model="viewport" />
    </div>
    <div class="header-right">
      <el-button>
        <v-icon icon="preview" />
        预览
      </el-button>
      <el-button type="primary" @click="submit">
        <v-icon icon="publish" />
        发布
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditStore } from '@/stores/edit'
import { type Viewport } from '@/types/edit'
import { nextTick, ref, watch } from 'vue'
import Ajv from 'ajv'
import AjvErrors from 'ajv-errors'
import { blockSchema, type BlockSchemaKeys } from '@/config/schema'
import { findNodeById } from './nested'
 
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;
  height: var(--edit-header-height);
  background: white;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .back {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 16px;
      flex-shrink: 0;
      .header-title {
        font-size: 14px;
        padding-left: 4px;
      }
    }
    .line {
      width: 1px;
      height: 20px;
      border-left: 1px solid var(--color-border);
      padding-right: 16px;
    }
  }
  .header-right {
    position: relative;
    padding-right: 16px;
  }
}
</style>
