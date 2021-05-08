# 使用Webpack的配置文件

1. webpack的配置文件：webpack.config.js。
    - entry：指定入口文件;
    - output：指定打包后文件的位置及如何命名。这个时候需要写绝对路径，绝对路径需要使用到node里的path。打包命令npx webpack;

2. 假如修改了webpack.config.js的名字怎么打包：npx webpack --config webpackconfig.js;

3. 做了优化处理，将js文件都放到一个src目录下面去了;

4. 使用package.json里的script项来配置打包的命令;

5. webpack-cli与webpack的关系：安装了webpack-cli是为了使用webpack的命令;

6. 需要学习的内容：getting start下面的内容可以阅读[指南 起步](https://webpack.docschina.org/guides/getting-started/);
