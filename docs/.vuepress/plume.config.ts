import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import notes from './notes/index.ts'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/icon/logo.png',
  appearance: true,  // 配置 深色模式

  navbarSocialInclude: ['gmail'], // 允许显示在导航栏的 social 社交链接
    social: [
     {
        icon: { svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1771220229806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28170" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M69.12 929.28l153.6 30.72v-547.84c-51.2-37.376-102.4-75.264-153.6-112.64v629.76z" fill="#3399FF" p-id="28171"></path><path d="M514.56 632.32c-148.48-111.104-296.96-221.696-445.44-332.8-3.584-6.144-11.264-20.992-10.24-40.96 1.536-24.576 15.36-40.448 20.48-46.08 13.312-13.824 28.16-18.432 35.84-20.48 15.872-4.096 29.184-1.536 35.84 0 121.344 88.576 242.176 177.664 363.52 266.24 95.744-71.68 190.976-143.36 286.72-215.04v179.2c-95.744 70.144-190.976 139.776-286.72 209.92z" fill="#FF3333" p-id="28172"></path><path d="M954.88 929.28v-624.64c-51.2 39.424-102.4 78.336-153.6 117.76v542.72c51.2-11.776 102.4-24.064 153.6-35.84z" fill="#339966" p-id="28173"></path><path d="M801.28 243.2v174.08c51.2-37.376 102.4-75.264 153.6-112.64 1.536-11.776 3.584-24.064 5.12-35.84-0.512-8.704-2.56-26.112-15.36-40.96-9.216-10.752-19.968-15.872-30.72-20.48-16.384-7.168-31.232-9.728-40.96-10.24-24.064 15.36-47.616 30.72-71.68 46.08z" fill="#FFCC00" p-id="28174"></path></svg>', name: 'gmail' },
        link: 'mailto:wyu.tan99@gmail.com'
      },
    ],
    
  
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: '',
    copyright: '',
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    //avatar: 'https://theme-plume.vuejs.press/plume.png',
    avatar: '/icon/logo.png',
    name: 'My Vuepress Site',
    description: '',
    // circle: true,
    location: '山东烟台',
    // organization: '',
  },

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },

})
