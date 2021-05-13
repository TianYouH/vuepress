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
        { text: 'Javascript', link: '/javascript/' },
        { text: 'CSS', link: '/css/' },
        { text: 'WebApi', link: '/webapi/' },
        { text: 'HTTP', link: '/http/' },
        { text: 'Webpack', link: '/webpack/' },
        { text: 'GIT', link: '/git/' },
        { text: 'Linux', link: '/linux/' },
        { text: '知识点', link: '/knowledge/' },
      ],
      sidebarDepth: 3,
      sidebar: {
          "/html/": [
              ""
          ],
          "/javascript/": [
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
          "/webapi/": [
              ""
          ],
          "/http/": [
              ""
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
          "/linux/": [
              ""
          ],
          "/knowledge/": [
              "",
              "安全",
              "常用手写函数",
              "初级高频面试题",
              "性能优化",
              "运行环境",
          ],
      }
    }
  }
