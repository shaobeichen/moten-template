import { TSchema, Type } from '@sinclair/typebox'
import { App } from 'vue-demi'

/**
 * schema加上视口
 * @param params
 * @returns
 */
export const schemaAllViewport = <T extends TSchema>(params: T) => {
  return Type.Object({
    desktop: params,
    mobile: params,
  })
}

/**
 * 组件安装，组件加上install函数
 * @param component
 * @returns
 */
export function withInstall(component: any) {
  component.install = function (app: App) {
    const { name } = component
    if (name) app.component(name, component)
  }
  return component
}

/**
 * 创建命名空间，包含组件名和公共class
 * @param prefix 公共前缀
 * @returns
 */
export function createNameSpaceFn(prefix: string) {
  return (name: string) => {
    const componentName = `${prefix}-${name}`

    const createBEM = (suffix?: string) => {
      if (!suffix) return componentName
      return suffix.startsWith('--') ? `${componentName}${suffix}` : `${componentName}__${suffix}`
    }

    return {
      name: componentName,
      n: createBEM,
    }
  }
}

export const createNameSpace = createNameSpaceFn('mo')
