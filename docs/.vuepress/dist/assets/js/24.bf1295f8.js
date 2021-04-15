(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{370:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[t._v("#")]),t._v(" Loader")]),t._v(" "),a("p",[t._v('loader 用于对模块的源代码进行转换。loader 可以使你在 import 或 "load(加载)" 模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的得力方式。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS 文件！')]),t._v(" "),a("p",[t._v("loader 执行顺序 从下到上，从右到左；")]),t._v(" "),a("h2",{attrs:{id:"常用-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用-loader"}},[t._v("#")]),t._v(" 常用 Loader")]),t._v(" "),a("h3",{attrs:{id:"file-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-loader"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://webpack.docschina.org/loaders/file-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("file-loader"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("将文件保存至输出文件夹中并返回（相对）URL")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(png|jpe?g|gif)$/i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options: {")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   name: '[path][name].[ext]',")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// },")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"url-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url-loader"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://webpack.docschina.org/loaders/url-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("url-loader"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("与 file-loader 类似，但是如果文件大写小于一个设置的值，则会返回 data URL")])]),t._v(" "),a("p",[t._v("这样做的好处：图片直接放到 JS 文件中，省去了获取图片的请求;")]),t._v(" "),a("p",[t._v("坏处：图片大，JS 文件也会大，执行 JS 的时间就会长，所以在很长一段时间里页面上显示不出东西;")]),t._v(" "),a("p",[t._v("处理方法：设置图片大小限制，limit，单位为字节，如果图片大小超过了 limit，会像 file-loader 一样打包图片到 images 目录下；如果小于 2048 字节，也就是小于 2KB 的时候，会变成一个 base64 字符串，放到 bundle.js 里面")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(png|jpg|gif)$/i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options: {")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   limit: 8192,")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// },")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"css-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-loader"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://webpack.docschina.org/loaders/css-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("css-loader"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("分析出 css 文件之间的关系，将他们合并为一个文件。")])]),t._v(" "),a("h3",{attrs:{id:"style-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#style-loader"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://webpack.docschina.org/loaders/style-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("style-loader"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("把 CSS 插入到 DOM 中。推荐将 style-loader 与 css-loader 一起使用")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.css$/i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"sass-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sass-loader"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://webpack.docschina.org/loaders/sass-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-loader"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("加载 Sass/SCSS 文件并将他们编译为 CSS")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.s[ac]ss$/i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 JS 字符串生成为 style 节点")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 CSS 转化成 CommonJS 模块")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 Sass 编译成 CSS")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sass-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"postcss-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss-loader"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://webpack.docschina.org/loaders/postcss-loader/",target:"_blank",rel:"noopener noreferrer"}},[t._v("postcss-loader"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("使用 PostCSS 处理 CSS 的 loader")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.css$/i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"postcss-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"babel-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-loader"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.babeljs.cn/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-loader"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("打通 webpack 和 babel，并不会进行 ES6 语法的翻译；")])]),t._v(" "),a("p",[t._v("相关依赖：")]),t._v(" "),a("ul",[a("li",[t._v("@babel/core：核心库，让 babel 识别 JS 代码的内容，然后转化成 AST，然后将 AST 编译转化出一些新的东西来；")]),t._v(" "),a("li",[t._v("@babel/preset-env：负责转换新的 JavaScript 句法（syntax）而不转换新的 API, 包含所有 ES6 转 ES5 的规则；")]),t._v(" "),a("li",[t._v("@babel/polyfill：为当前环境提供一个垫片，转换新的 API，设置 useBuiltIns 为'usage'如下可以按需加载，这样可以避免转换后文件过大；")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.babeljs.cn/docs/babel-plugin-transform-runtime",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/plugin-transform-runtime"),a("OutboundLink")],1),t._v("： 除了在业务代码中引用 babel-polyfill 以外（常用业务项目使用这种方式），还可以使用@babel/plugin-transform-runtime 插件（推荐UI库，类库，公共库使用这种），这样可以不用污染全局环境；两种方式任选其一；")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.m?js$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 排除对第三方代码处理")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options: {")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// presets: [['@babel/preset-env', {")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   useBuiltIns: 'usage',")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   targets: { // 项目最低运行环境")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//     chrome: "67"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   }")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }]]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// plugins: [")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   [")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//     "@babel/plugin-transform-runtime",')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     {")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       // 可以将option中的内容放在babelrc")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       corejs: 2, // 指定一个数字将重写需要polyfillable apl的助手，以引用来自该(主要)的助手。请注意，coreis: 2只支持全局变量(如Promise)和静态属性(如Array.from)，而corejs: 3也支持实例属性(如[].includes)。根据值需要安装相关依赖@babel/runtime-corejs2。")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       helpers: true,")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       regenerator: true,")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       useESModules: false,")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     },")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   ],")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ],")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// },")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v(".babelrc")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/plugin-transform-runtime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以将option中的内容放在babelrc")]),t._v("\n        corejs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定一个数字将重写需要polyfillable apl的助手，以引用来自该(主要)的助手。请注意，coreis: 2只支持全局变量(如Promise)和静态属性(如Array.from)，而corejs: 3也支持实例属性(如[].includes)。根据值需要安装相关依赖@babel/runtime-corejs2。")]),t._v("\n        helpers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        regenerator"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        useESModules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);