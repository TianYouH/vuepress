# Code Splitting

代码分割与webpack无关

- 同步引入模块代码：webpack.common.js
```js
{
  optimization:{
  	splitChunks:{
  		chunks: 'all'
  	}
  }
}
```

- 异步引入模块代码(import('loadash').then）:无需配置optimization
   动态引入语法需安装 npm install babel-plugin-dynamic-import-webpack --save-dev
   .bebelrc 添加配置："plugins": ["@babel/plugin-syntax-dynamic-import"]

懒加载，魔法命名chunk包名
import(/* webpackChunkName:"lodash" */'lodash') 

```js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async', // 这表明将选择哪些 chunk 进行优化。当提供一个字符串，有效值为 all，async 和 initial。设置为 all 可能特别强大，因为这意味着 chunk 可以在异步和非异步 chunk 之间共享。
      minSize: 20000, // 生成 chunk 的最小体积（以 bytes 为单位）。
      minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1, // 当一个模块被引用至少1次才进行代码分割
      maxAsyncRequests: 30, //  同时加载的模块数最多 30
      maxInitialRequests: 30, // 3 入口文件引入的库最多分割出3个
      enforceSizeThreshold: 50000,
      cacheGroups: { // 打包同步代码时有效，根据cachegroups决定分割出的代码放到哪个文件中去
        defaultVendors: { // 如果是node_modules 中引入的模块就打包到vendors.js中
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 优先级，优先打包到满足条件的优先级高的组里面
          reuseExistingChunk: true, // 如果一个模块已经被打包过了，再打包就会忽略这个模块
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
```
[官方命名](https://webpack.docschina.org/plugins/split-chunks-plugin/)