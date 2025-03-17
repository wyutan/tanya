import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '/os/cloud',
  link: '/os/cloud',
  sidebar: [
    { text: '云计算学习笔记', link: '/os/cloud/', },
    { text: '云计算笔记', prefix: 'note', collapsed: false, items: 'auto', },
  ]
})
