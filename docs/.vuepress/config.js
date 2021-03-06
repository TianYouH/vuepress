module.exports = {
    title: '你好世界',
    description: '这是我的博客',
    themeConfig: {
      nav: [
        { text: '数学', link: '/math/' },
        { text: 'Webpack', link: '/webpack/' },
        { text: 'Git', link: '/git/' },
      ],
      sidebarDepth: 3,
      sidebar: {
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
          ],
          "/git/": [
              "",
              "Git-Commit-message和Change-log验证配置",
          ],
      }
    }
  }
