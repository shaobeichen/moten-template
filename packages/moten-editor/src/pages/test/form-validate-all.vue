<template>
  <el-form
    ref="ruleFormRef"
    :model="form"
    :rules="rules"
    label-width="auto"
    style="width: 600px; margin: 0 auto"
  >
    <el-form-item label="姓名" prop="name.desktop">
      <el-input v-model="form.name.desktop" />
    </el-form-item>

    <!-- <el-form-item label="Activity name" prop="name.desktop">
          <element-custom-input v-model="form.name.desktop" />
        </el-form-item> -->

    <el-form-item label="描述" prop="desc">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"> Create </el-button>
      <el-button type="primary" @click="ajvSubmitForm()"> ajv validate </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import Ajv from 'ajv'
import AjvErrors from 'ajv-errors'
import { ref } from 'vue'
import elementCustomInput from './element-custom-input.vue'
import { cloneDeep } from 'lodash'

const ajv = new Ajv({ allErrors: true })
ajv.addKeyword({
  keyword: ['placeholder', 'rules', 'code'],
})
AjvErrors(ajv)

const ruleFormRef = ref()

const schema = ref({
  type: 'object',
  required: ['name', 'desc'],
  properties: {
    name: {
      type: 'object',
      required: ['desktop', 'mobile'],
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
          rules: [
            { required: true, min: 1, message: '最少1个字符', trigger: 'change' },
            { max: 5, message: '最多5个字符', trigger: 'change' },
          ],
        },
        mobile: {
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
          rules: [
            { required: true, min: 1, message: '最少1个字符', trigger: 'blur' },
            { max: 5, message: '最多5个字符', trigger: 'change' },
          ],
        },
      },
    },
    desc: {
      widget: 'config-input',
      type: 'string',
      title: '名',
      default: '',
      rules: [{ required: true, message: '请输入内容', trigger: 'blur' }],
    },
  },
})

const transfer = (b, key = 'default') => {
  return Object.fromEntries(
    Object.entries(b.properties).map(([keyP, valueP]) => {
      if (valueP.properties) return [keyP, transfer(valueP, key)]
      return [keyP, valueP[key]]
    }),
  )
}

const form = ref(transfer(schema.value, 'default'))
console.warn(`✅ - file: form-validate.vue:113 - form:`, cloneDeep(form.value))

const rules = ref(transfer(schema.value, 'rules'))
console.warn(`✅ - file: form-validate.vue:116 - rules:`, cloneDeep(rules.value))

const ajvSubmitForm = () => {
  const validate = ajv.compile(schema.value)
  const valid = validate(form.value)
  if (!valid) {
    console.warn(
      'ajv error: ',
      validate.errors[0].instancePath + validate.errors[0].message,
      form.value,
    )
    return
  }
  console.warn('ajv submit!')
}

const submitForm = async (formEl) => {
  if (!formEl) return

  await formEl.validate((valid, fields) => {
    if (valid) {
      console.warn('form submit!')
      return
    }
    console.warn('form error !', fields)
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
