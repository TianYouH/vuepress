module.exports = {
  title: '天幽的博客',
  description: '我不是针对谁',
  themeConfig: {
    nav: [
      { text: 'Home  ', link: '/' },
      { text: 'HTML5', link: '/html5/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'CSS', link: '/css/' }
    ],
    sidebar: [
      '/',
      '/html5',
      ['/javascript', 'Explicit link text']
    ]
  }
}