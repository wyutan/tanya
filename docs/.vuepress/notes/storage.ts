import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '/storage/',
  link: '/storage/',
  sidebar: [
    { text: '存储笔记', prefix: 'storage', collapsed: false, items: 'auto', },

  ],
})
