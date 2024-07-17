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

    <el-form-item label="描述" prop="desc">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"> Create </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const ruleFormRef = ref()

const form = ref({
  name: {
    desktop: '',
    mobile: '',
  },
  desc: '',
})

const rules = ref({
  name: {
    desktop: [
      { required: true, min: 1, message: '最少1个字符', trigger: 'change' },
      { max: 5, message: '最多5个字符', trigger: 'change' },
    ],
    mobile: [
      { required: true, min: 1, message: '最少1个字符', trigger: 'blur' },
      { max: 5, message: '最多5个字符', trigger: 'change' },
    ],
  },
  desc: [{ required: true, message: '请输入内容', trigger: 'blur' }],
})

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
