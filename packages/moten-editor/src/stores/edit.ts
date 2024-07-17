import type { PageSchemaFormData } from '@/config/schema'
import type { BaseBlock, Viewport } from '@/types/edit'
import { defineStore } from 'pinia'

export const useEditStore = defineStore('edit', {
  state: () => ({
    currentSelect: {} as BaseBlock,
    blockConfig: [] as BaseBlock[],
    pageConfig: {} as PageSchemaFormData,
    viewport: 'desktop' as Viewport,
    configPanelShow: false,
  }),
  getters: {
    isMobileViewport: (state) => state.viewport === 'mobile',
  },
  actions: {
    setCurrentSelect(value: BaseBlock) {
      this.currentSelect = value
    },
    setBlockConfig(value: BaseBlock[]) {
      this.blockConfig = value
    },
    setPageConfig(value: PageSchemaFormData) {
      this.pageConfig = value
    },
    setViewport(value: Viewport) {
      this.viewport = value
    },
    setConfigPanelShow(value: boolean) {
      this.configPanelShow = value
    },
  },
})
