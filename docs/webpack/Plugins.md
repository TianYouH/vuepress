# [Plugins](https://webpack.docschina.org/plugins/)

webpack有一个丰富的插件接口。webpack本身的大部分特性都使用这个插件接口。这使得webpack很灵活。

## 常用Plugins

### [HtmlWebpackPlugin](https://webpack.docschina.org/plugins/html-webpack-plugin/)

执行条件：打包后执行；

HtmlWebpackPlugin 简化了 HTML 文件的创建，以便为你的 webpack 包提供服务。这对于那些文件名中包含哈希值，并且哈希值会随着每次编译而改变的 webpack 包特别有用。你可以让该插件为你生成一个 HTML 文件，使用 lodash 模板提供模板，或者使用你自己的 loader。

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
};
```

### [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)

执行条件：打包前执行；

一个webpack插件可以删除/清理你的构建文件夹

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const webpack = require('webpack'); // to access built-in plugins
const path = require('path');

module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
        /**
         * With zero configuration,
         *   clean-webpack-plugin will remove files inside the directory below
         */
        path: path.resolve(process.cwd(), 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
};
```