# Webpack

webpack 不是解释器，而是一个模块打包工具（module bundler），只能认识import等简单的语法。
不仅有es这样的模块规范，还有commonJS、CMD、AMD这样的规范，webpack对这些模块规范一样可以识别。

webpack是一个模块打包工具，可以使用它来管理项目中的模块依赖，并编译输出模块所需要的静态文件。它可以很好的管理、打包模块开发中所用到的HTML、CSS、js和静态文件（图片、文字）等，让开发更高效。对于不同类型的依赖，webpack有对应的模块加载器，而且会分析模块间的依赖关系，最后合并生产优化的静态资源。

相关知识点

- [Modules](https://webpack.docschina.org/concepts/modules/)

  [API Modules](https://webpack.docschina.org/api/module-methods/)

- [Loader](https://webpack.docschina.org/concepts/loaders/)
  
  告诉webpack对于非JS文件如何打包

- [Plugin](https://webpack.docschina.org/plugins/)

  webpack有一个丰富的插件接口。webpack本身的大部分特性都使用这个插件接口。这使得webpack很灵活。

- [SourceMap](https://webpack.docschina.org/configuration/devtool/)

  代码映射关系

- [WebpackDevServer](https://webpack.docschina.org/configuration/dev-server/)

  webpack-dev-server 可用于快速开发应用程序。

- [HMR](https://webpack.docschina.org/guides/hot-module-replacement/)

  模块热替换(hot module replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新所有类型的模块，而无需完全刷新。本页面重点介绍其实现，而 概念 页面提供了更多关于它的工作原理以及为什么它有用的细节。

- Create React App

- Caching

- Vue Cli 3.0

- Shimming

- TreeShaking

- CodeSplitting

- Babel

- React

- Library

- Eslint

- PWA

- Vue

- Mode

- 性能优化

- 多页应用

- 原理

- PreLoading

- PreFetching

- 环境变量

- TypeScript
