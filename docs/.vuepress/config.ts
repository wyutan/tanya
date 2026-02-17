import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'


export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '谈呀',
  description: '',

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/jpeg', href: '/icon/logo.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    hostname: 'http://git.x-echo.net',
    search: { provider: 'local' },

    collections: [
      {
        type: 'post', // 替代原博客功能
        dir: '/about', // 指向 docs/blog 目录
        title: '' // 集合显示名称
      },
    ],
    
    //docsRepo: 'https://github.com/wyutan/tanya/',
    //docsDir: 'docs',
    changelog: { maxCount: 10 },
    
    /* 页内信息 */
    editLink: false,
    lastUpdated: true,
    lastUpdatedText: '上次修改于',
    //contributors: {
      //mode: 'block',
      //info: [
        //{
          //username: 'wyutan', // github username
          //alias: ['tanya'], // 别名，本地 git 配置中的用户名
        //}
      //]
    //},
    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */  
    cache: 'filesystem',
    
    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    autoFrontmatter: {
      permalink: true,  // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true,      // 是否生成标题
    },

    /**
    * markdown
    * @see https://theme-plume.vuejs.press/config/markdown/
    */
     
    markdown: {
      qrcode: true,       // 启用二维码
      abbr: true,         // 启用 abbr 语法  *[label]: content
      markmap: true,
      annotation: true,   // 启用 annotation 语法  [+label]: content
      pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
      caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
      plot: true,         // 启用隐秘文本语法 !!xxxx!!
      bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
      youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
      artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
      audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
      icon: false,
      // icon: { provider: 'iconify' },        // 启用内置图标语法  ::icon-name::
      table: true,        // 启用表格增强容器语法 ::: table
      codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
      replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
      codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
      jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
      npmTo: true,        // 启用 npm-to 容器  ::: npm-to
      demo: true,         // 启用 demo 容器  ::: demo
      collapse: true,     // 启用折叠容器  ::: collapse
      repl: {             // 启用 代码演示容器
        go: true,         // ::: go-repl
        rust: true,       // ::: rust-repl
        kotlin: true,     // ::: kotlin-repl
        python: true,     // ::: python-repl
      },
      // math: {             // 启用数学公式
        // type: 'katex',
      // },
    //   chartjs: true,      // 启用 chart.js
    //   echarts: true,      // 启用 ECharts
    //   mermaid: true,      // 启用 mermaid
    //   flowchart: true,    // 启用 flowchart
    //   image: {
    //     figure: true,     // 启用 figure
    //     lazyload: true,   // 启用图片懒加载
    //     mark: true,       // 启用图片标记
    //     size: true,       // 启用图片大小
    //   },
    //   include: true,      // 在 Markdown 文件中导入其他 markdown 文件内容
    //   imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
    },

      /* 文章字数统计、阅读时间，设置为 false 则禁用 */
      // readingTime: true,
      /**
       * 水印
       * @see https://theme-plume.vuejs.press/guide/features/watermark/
       */
      // watermark: true,
      watermark: {
      // enabled: false,  // boolean 类型控制是否全局启用
      // enabled: page => true, // function 类型 过滤哪些页面启用水印

      /**
       * 是否全屏水印，默认为 `true`，
       * 设置为 `false` 时，水印仅在 内容区域中显示。
       */
      fullPage: false,

      /** @see https://zhensherlock.github.io/watermark-js-plus/zh/config/ */
      watermarkOptions: {
        content: '谈呀',
      }
    },
  }),
})
