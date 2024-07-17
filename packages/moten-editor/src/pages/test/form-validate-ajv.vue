<template>
  <el-form ref="ruleFormRef" :model="form" label-width="auto" style="width: 600px; margin: 0 auto">
    <el-form-item label="姓名" prop="name.desktop">
      <el-input v-model="form.name.desktop" />
    </el-form-item>

    <el-form-item label="描述" prop="desc">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="ajvSubmitForm()"> ajv validate </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import Ajv from 'ajv'
import AjvErrors from 'ajv-errors'
import { ref } from 'vue'

const ajv = new Ajv({ allErrors: true })
ajv.addKeyword({
  keyword: ['placeholder', 'code'],
})
AjvErrors(ajv)

const form = ref({
  name: {
    desktop: '',
  },
  desc: '',
})

const schema = {
  type: 'object',
  required: ['name', 'desc'],
  properties: {
    name: {
      type: 'object',
      required: ['desktop'],
      properties: {
        desktop: {
          code: 'config-input',
          type: 'string',
          title: '姓名',
          default: '',
          placeholder: '请输入',
          minLength: 1,
          maxLength: 5,
          //   pattern: '^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$',
          errorMessage: {
            required: '最少1个字符',
            minLength: '最少1个字符',
            maxLength: '最多5个字符',
            pattern: '自定义没通过哈哈',
          },
        },
      },
    },
    desc: {
      code: 'config-input',
      type: 'string',
      title: '名',
      default: '',
    },
  },
}

const ajvSubmitForm = () => {
  const validate = ajv.compile(schema)
  const valid = validate(form.value)
  if (!valid) {
    console.warn('ajv error: ', validate.errors)
    return
  }
  console.warn('ajv submit!')
}
</script>
