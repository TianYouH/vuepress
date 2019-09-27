module.exports = {
  title: '天幽的博客',
  description: '我不是针对谁',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端', link: '/web/' },
      { text: '下拉测试',
        ariaLabel: 'Language Menu',
        items: [
          { text: '11', link: '/language/chinese/' },
          { text: '222', link: '/language/japanese/'}
      ]}
    ]
  }
}