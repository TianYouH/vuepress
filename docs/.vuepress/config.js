module.exports = {
    title: '你好世界',
    description: '这是我的博客',
    themeConfig: {
      nav: [
        { text: '数学', link: '/math/' },
        { text: 'Webpack', link: '/webpack/' },
        { text: 'Git', link: '/git/' },
      ],
      sidebar: {
          "/math/": [
              "",
              "高数基础",
              "高数高级"
          ],
          "/webpack/": [
              ""
          ],
          "/git/": [
              "",
              "Git-Commit-message和Change-log验证配置",
          ],
      }
    }
  }
