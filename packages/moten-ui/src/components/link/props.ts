import { PropType } from 'vue-demi'

export type MoLinkPropsTarget = '_blank' | '_self' | '_parent' | '_top'

export const props = {
  /**
   * 链接
   */
  to: {
    type: String,
    default: '',
  },
  /**
   * 跳转方式
   */
  target: {
    type: String as PropType<MoLinkPropsTarget>,
    default: '_blank',
  },
}
