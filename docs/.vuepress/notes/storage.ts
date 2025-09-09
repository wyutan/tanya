import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '/存储/',
  link: '/storage/',
  sidebar: [
    { text: '存储笔记', prefix: 'storage', collapsed: false, items: 'auto', },

  ],
})
