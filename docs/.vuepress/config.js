module.exports = {
    base: '/blogs/',
    title: '你好世界',
    description: '这是我的博客',
    themeConfig: {
      nav: [
        { text: 'CSS', link: '/css/' },
        { text: '数学', link: '/math/' },
        { text: 'Webpack', link: '/webpack/' },
        { text: 'Git', link: '/git/' },
        { text: '知识点', link: '/knowledge/' },
      ],
      sidebarDepth: 3,
      sidebar: {
          "/css/": [
              "",
              "布局",
              "定位",
              "图文样式",
              "移动端响应式",
              "动画渐变",
          ],
          "/math/": [
              "",
              "高数基础",
              "高数高级"
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
              "CSS",
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
