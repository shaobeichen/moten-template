import Component from '..'
import CurrentComponent from '../index.vue'
import { expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { createApp } from 'vue-demi'
import { COMPONENT_PREFIX } from '@/config'

const componentCode = 'image'
const componentClass = `.${COMPONENT_PREFIX}-${componentCode}`

describe(`${componentCode} 基本测试`, () => {
  test('测试组件名', () => {})

  test('测试主要class', () => {})
})

describe(`${componentCode} 测试组件的props`, () => {})
