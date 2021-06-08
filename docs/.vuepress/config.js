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
      lastUpdated: '最后更新时间', // string | boolean
      nav: [
        {
            text: '前端',
            items: [
                { text: 'HTML', link: '/html/' },
                { text: 'Javascript', link: '/javascript/' },
                { text: 'CSS', link: '/css/' },
                { text: 'WebApi', link: '/webapi/' },
                { text: 'Webpack', link: '/webpack/' },
                { text: '设计模式', link: '/designMode/' },
                { text: '知识点', link: '/knowledge/' },
            ]
        },
        {
            text: '开发',
            items: [
                { text: '测试', link: '/test/' },
                { text: 'GIT', link: '/git/' },
                { text: 'HTTP', link: '/http/' },
                { text: 'Linux', link: '/linux/' },
            ]
        },
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
        "/webpack/": [
            "",
            "搭建Webpack环境",
            "使用Webpack的配置文件",
            "Loader",
            "Plugins",
            "CodeSplitting",
        ],
        "/designMode/": [
            "",
            "面向对象",
            "UML类图",
            "设计原则",
            "面试题分析",
            "工厂模式",
            "单例模式",
            "适配器模式",
            "装饰器模式",
            "代理模式",
            "外观模式"
        ],
        "/knowledge/": [
            "",
            "安全",
            "常用手写函数",
            "初级高频面试题",
            "性能优化",
            "运行环境",
        ],

        "/test/": [
            "",
            "Chaijs"
        ],
        "/git/": [
            "",
            "Git-Commit-message和Change-log验证配置",
        ],
        "/http/": [
            ""
        ],
        "/linux/": [
            ""
        ]
      }
    }
  }
