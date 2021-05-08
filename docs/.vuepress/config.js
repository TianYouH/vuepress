module.exports = {
    base: '/blogs/',
    title: '你好世界',
    head: [
        [
            "link",
            { rel: 'icon', href: '/favicon.ico' }
        ]
    ],
    description: '这是我的博客',
    themeConfig: {
      nav: [
        { text: 'HTML', link: '/html/' },
        { text: 'CSS', link: '/css/' },
        { text: 'Webpack', link: '/webpack/' },
        { text: 'GIT', link: '/git/' },
        { text: '知识点', link: '/knowledge/' },
      ],
      sidebarDepth: 3,
      sidebar: {
          "/html/": [
              ""
          ],
          "/css/": [
              "",
              "布局",
              "定位",
              "图文样式",
              "移动端响应式",
              "动画渐变",
          ],
          "/webpack/": [
              "",
              "搭建Webpack环境",
              "使用Webpack的配置文件",
              "Loader",
              "Plugins",
              "CodeSplitting",
          ],
          "/git/": [
              "",
              "Git-Commit-message和Change-log验证配置",
          ],
          "/knowledge/": [
              "",
              "HTML",
              "HTTP",
              "Javascript",
              "linux命令",
              "WebApi",
              "安全",
              "常用手写函数",
              "初级高频面试题",
              "性能优化",
              "运行环境",
          ],
      }
    }
  }
