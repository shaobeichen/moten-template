<template>
  <input type="text" v-model="model" class="input" />
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useFormItem } from 'element-plus'

const { formItem } = useFormItem()

const model = defineModel({ type: String })

watch(
  () => model.value,
  () => {
    formItem?.validate('change').catch((err) => console.warn(err))
    formItem?.validate('blur').catch((err) => console.warn(err))
  },
)
</script>

<style lang="scss" scoped>
.input {
  box-shadow: 0 0 0 1px blue inset;
  width: 100%;
}
.is-error {
  .input {
    box-shadow: 0 0 0 1px #f56c6c inset;
  }
}
</style>
