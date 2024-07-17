const icon = {
  // 基础组件图标
  row: 'fluent:layout-row-two-16-regular',
  column: 'fluent:layout-column-two-split-right-16-regular',
  image: 'fluent:image-16-regular',
  video: 'fluent:video-clip-multiple-16-regular',
  text: 'fluent:text-bullet-list-square-edit-24-regular',
  swiper: 'fluent:app-recent-24-regular',
  blank: 'fluent:border-none-20-filled',
  canvas: 'fluent:draw-image-24-regular',

  // 平台图标
  allViewport: 'fluent:phone-desktop-24-regular',
  desktop: 'fluent:desktop-mac-32-regular',
  mobile: 'fluent:phone-16-regular',
  preview: 'fluent:open-20-filled',
  question: 'fluent:question-circle-12-regular',
  tips: 'fluent:info-24-regular',
  publish: 'fluent:cloud-arrow-up-24-regular',
  search: 'fluent:search-12-regular',
  block: 'fluent:app-folder-16-regular',
  blockActive: 'fluent:app-folder-16-filled',
  kit: 'fluent:layer-24-regular',
  kitActive: 'fluent:layer-24-filled',
  home: 'fluent:home-20-regular',
  homeActive: 'fluent:home-20-filled',
  upload: 'fluent:arrow-upload-16-filled',
  expand: 'fluent:panel-right-expand-16-regular',
  copy: 'fluent:save-copy-24-regular',
  delete: 'fluent:delete-24-regular',
  drag: 'fluent:grid-dots-20-regular',
  dragBlank: 'fluent:breakout-room-20-regular',
  add: 'fluent:add-16-regular',
  subtract: 'fluent:subtract-16-regular',
  back: 'fluent:chevron-left-20-filled',
}

export default icon

export type ConfigIcon = keyof typeof icon
