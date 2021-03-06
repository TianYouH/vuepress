# Loader

loader 用于对模块的源代码进行转换。loader 可以使你在 import 或 "load(加载)" 模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！

loader 执行顺序 从下到上，从右到左；

## 常用Loader

### [file-loader](https://webpack.docschina.org/loaders/file-loader/)：将文件保存至输出文件夹中并返回（相对）URL

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        // options: {
        //   name: '[path][name].[ext]',
        // },
      },
    ],
  },
};
```

### [url-loader](https://webpack.docschina.org/loaders/url-loader/) 与 file-loader 类似，但是如果文件大写小于一个设置的值，则会返回 data URL

这样做的好处：图片直接放到JS文件中，省去了获取图片的请求;

坏处：图片大，JS文件也会大，执行JS的时间就会长，所以在很长一段时间里页面上显示不出东西;

处理方法：设置图片大小限制，limit，单位为字节，如果图片大小超过了limit，会像file-loader一样打包图片到images目录下；如果小于2048字节，也就是小于2KB的时候，会变成一个base64 字符串，放到bundle.js里面

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            // options: {
            //   limit: 8192,
            // },
          },
        ],
      },
    ],
  },
};
```

### [css-loader](https://webpack.docschina.org/loaders/css-loader/)：css-loader：分析出css文件之间的关系，将他们合并为一个文件。

### [style-loader](https://webpack.docschina.org/loaders/style-loader/)：把 CSS 插入到 DOM 中。推荐将 style-loader 与 css-loader 一起使用

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

### [sass-loader](https://webpack.docschina.org/loaders/sass-loader/)：加载 Sass/SCSS 文件并将他们编译为 CSS

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
    ],
  },
};
```

### [postcss-loader](https://webpack.docschina.org/loaders/postcss-loader/)：使用 PostCSS 处理 CSS 的 loader
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
```



