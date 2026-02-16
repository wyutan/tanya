import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', icon: '', link: '/', },
  //{ text: '博客', link: '/blog/' },
  //{ text: '标签', link: '/blog/tags/' },
  //{ text: '归档', link: '/blog/archives/' },
  { text: '网络', icon: '/icon/network.svg', link: '/network/', },
  {
    text: 'os',
    icon: '/icon/os.svg',
    items: [
      { text: 'linux', icon: '/icon/linux.svg', link: '/os/linux/', },
      { text: '云计算', icon: '/icon/cloud.svg', link: '/os/cloud/', },
    ]
  }, 
  { text: '存储', icon: '/icon/storage.svg', link: '/storage/', },
  { text: '容器', icon: '/icon/Docker.svg', link: '/容器/', },
  { text: '疑难杂症', icon: '/icon/question.svg',  link: '/疑难杂症/疑难杂症.md', },
  { text: '关于', icon: '/icon/about.svg',  link: '/about/', },
])
