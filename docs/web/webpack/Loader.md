# Loader

loader 用于对模块的源代码进行转换。loader 可以使你在 import 或 "load(加载)" 模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS 文件！

loader 执行顺序 从下到上，从右到左；

## 常用 Loader

### [file-loader](https://webpack.docschina.org/loaders/file-loader/)

> 将文件保存至输出文件夹中并返回（相对）URL

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        // options: {
        //   name: '[path][name].[ext]',
        // },
      },
    ],
  },
};
```

### [url-loader](https://webpack.docschina.org/loaders/url-loader/)

> 与 file-loader 类似，但是如果文件大写小于一个设置的值，则会返回 data URL

这样做的好处：图片直接放到 JS 文件中，省去了获取图片的请求;

坏处：图片大，JS 文件也会大，执行 JS 的时间就会长，所以在很长一段时间里页面上显示不出东西;

处理方法：设置图片大小限制，limit，单位为字节，如果图片大小超过了 limit，会像 file-loader 一样打包图片到 images 目录下；如果小于 2048 字节，也就是小于 2KB 的时候，会变成一个 base64 字符串，放到 bundle.js 里面

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
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

### [css-loader](https://webpack.docschina.org/loaders/css-loader/)

> 分析出 css 文件之间的关系，将他们合并为一个文件。

### [style-loader](https://webpack.docschina.org/loaders/style-loader/)

> 把 CSS 插入到 DOM 中。推荐将 style-loader 与 css-loader 一起使用

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

### [sass-loader](https://webpack.docschina.org/loaders/sass-loader/)

> 加载 Sass/SCSS 文件并将他们编译为 CSS

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

### [postcss-loader](https://webpack.docschina.org/loaders/postcss-loader/)

> 使用 PostCSS 处理 CSS 的 loader

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

### [babel-loader](https://www.babeljs.cn/docs/)

> 打通 webpack 和 babel，并不会进行 ES6 语法的翻译；

相关依赖：

- @babel/core：核心库，让 babel 识别 JS 代码的内容，然后转化成 AST，然后将 AST 编译转化出一些新的东西来；
- @babel/preset-env：负责转换新的 JavaScript 句法（syntax）而不转换新的 API, 包含所有 ES6 转 ES5 的规则；
- @babel/polyfill：为当前环境提供一个垫片，转换新的 API，设置 useBuiltIns 为'usage'如下可以按需加载，这样可以避免转换后文件过大；
- [@babel/plugin-transform-runtime](https://www.babeljs.cn/docs/babel-plugin-transform-runtime)： 除了在业务代码中引用 babel-polyfill 以外（常用业务项目使用这种方式），还可以使用@babel/plugin-transform-runtime 插件（推荐UI库，类库，公共库使用这种），这样可以不用污染全局环境；两种方式任选其一；

```js
{
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/, // 排除对第三方代码处理
        use: {
          loader: "babel-loader",
          // options: {
            // presets: [['@babel/preset-env', {
            //   useBuiltIns: 'usage',
            //   targets: { // 项目最低运行环境
            //     chrome: "67"
            //   }
            // }]]
            // plugins: [
            //   [
            //     "@babel/plugin-transform-runtime",
            //     {
            //       // 可以将option中的内容放在babelrc
            //       corejs: 2, // 指定一个数字将重写需要polyfillable apl的助手，以引用来自该(主要)的助手。请注意，coreis: 2只支持全局变量(如Promise)和静态属性(如Array.from)，而corejs: 3也支持实例属性(如[].includes)。根据值需要安装相关依赖@babel/runtime-corejs2。
            //       helpers: true,
            //       regenerator: true,
            //       useESModules: false,
            //     },
            //   ],
            // ],
          // },
        },
      },
    ];
  }
}
```

.babelrc
```json
{
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        // 可以将option中的内容放在babelrc
        corejs: 2, // 指定一个数字将重写需要polyfillable apl的助手，以引用来自该(主要)的助手。请注意，coreis: 2只支持全局变量(如Promise)和静态属性(如Array.from)，而corejs: 3也支持实例属性(如[].includes)。根据值需要安装相关依赖@babel/runtime-corejs2。
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
  ]
}
```
