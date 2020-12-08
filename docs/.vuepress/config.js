module.exports = {
  base: '/blogs/docs/.vuepress/dist',
  title: '天幽的博客',
  description: '你好',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'HTML5', link: '/html5/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'CSS', link: '/css/' }
    ],
    sidebar: {
      '/html5/': [
        ['', '基础'],
        ['preload', '通过rel="preload"进行内容预加载']
      ]
    }
  }
}