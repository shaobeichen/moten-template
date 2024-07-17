<template>
 
</template>

<script setup lang="ts">
import { move, clone } from './nested'
defineProps({
  list: {
    type: Array,
    required: true,
    default: () => [],
  },
  group: {
    type: [String, Object],
    default: 'group',
  },
  sort: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lang="scss" scoped>
.edit-block-drag {
  display: flex;
  flex-wrap: wrap;
  .block-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: grab;
    width: 33.333%;
    aspect-ratio: 1 / 1;
    text-align: center;
    padding: 10px;
    border-radius: var(--border-radius);

    &:active {
      cursor: grabbing;
    }
    &:hover {
      background: var(--color-block-hover);
      border: 1px solid var(--color-border);
    }
    .block-icon {
      width: 20px;
      height: 20px;
      margin: 0 auto;
    }
    .block-name {
      font-size: 14px;
      line-height: 14px;
      padding-top: 4px;
      white-space: nowrap;
    }
  }
}
.ghost-class {
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  background: var(--color-active-bg);
  border: 1px solid var(--color-active-text);
  img,
  svg {
    width: 20px;
    height: 20px;
    margin: 0 auto;
  }
}
</style>
