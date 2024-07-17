<template>
  <div class="config-base-tab">
    <div class="container">
      <div class="list">
        <div
          @click="tabClick(item)"
          v-for="(item, index) in data"
          :key="index"
          class="item"
          :class="{ 'is-active': select === item.value }"
        >
          <slot :item="item" :index="index"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Array as () => Array<any>,
    default: () => [],
  },
})

const select = ref(props.data.find((item) => item.default)?.value || '')
const emit = defineEmits(['change'])

const tabClick = (item: any) => {
  select.value = item.value
  emit('change', item.value)
}
</script>

<style lang="scss" scoped>
.config-base-tab {
  .container {
    width: 100%;
    background: var(--color-config-block-bg);
    border-radius: var(--border-radius);
    .list {
      display: flex;
      padding: 4px 2px;
      justify-content: space-between;
      .item {
        margin: 0 2px;
        &.is-active {
          :deep(.image-box) {
            background: white;
          }
        }
      }
      :deep(.image-box) {
        &:hover {
          background: white;
        }
      }
    }
  }
}
</style>
