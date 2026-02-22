import { defineNotesConfig } from 'vuepress-theme-plume'
export default defineNotesConfig({
  // 声明所有笔记的目录，(默认配置，通常您不需要声明它)
  dir: '',
  link: '/',
  // 在这里添加 note 配置
  notes: [
    { dir: 'network', link: '/network', },
    { dir: 'os/linux', link: '/os/linux', },
    { dir: 'os/cloud', link: '/os/cloud', },
    { dir: 'storage', link: '/storage', },
    { dir: '容器', link: '/容器', },
    { dir: 'about', link: '/about', },
  ]
})
