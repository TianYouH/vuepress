# 搭建Webpack环境

1. npm init主要在项目中生成一个package.json文件;

2. private:true 表示这个项目是一个私有的项目，不会被发布到npm线上仓库上;

```json
{
  "name": "webpack4",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "main": "index.js",
  "type": "module"
}
```


3. webpack安装有两种方式：
    - 全局安装（不建议全局安装webpack，以防不同项目webpack版本不同导致不能灵活使用webpack）;
    - 项目内安装;

4. 局内安装webpack: npm install webpack webpack-cli -D (等同npm intall webpack webpack-cli --save dev);

5. 查看webpack版本时，node会从全局模块目录寻找，可使用npx webpack -v;
