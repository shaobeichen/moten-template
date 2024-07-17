<template>
  <div class="edit-render-hover">
    <v-icon-tooltip icon="drag" :content="'按住拖动' + name" class="item drag" />
    <v-icon-tooltip icon="copy" content="复制" class="item" @click.stop="copy" />
    <v-icon-tooltip icon="delete" content="删除" class="item" @click.stop="clear" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['copy', 'clear'])

const copy = () => {
  emit('copy', props.id)
}

const clear = () => {
  emit('clear', props.id)
}
</script>

<style lang="scss" scoped>
.edit-render-hover {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: #fff;
  display: flex;
  box-shadow: 0px 0 7px 5px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  padding: 5px;
  .item {
    :deep(.image-box) {
      width: 32px;
      height: 32px;
      padding: 6px;
    }
    &.drag {
      :deep(.image-box) {
        cursor: grab;
        &:active {
          cursor: grabbing;
        }
      }
    }
  }
}
</style>
