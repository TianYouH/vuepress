# HTTP

## http 常见的状态码有哪些?

1. 状态码分类

```text
1xx服务器收到请求
2xx请求成功，如200
3xx重定向，如302
4xx客户端错误，如404
5xx服务端错误，如500
```

2. 常见状态码

```text
200 成功
301 永久重定向（配合location，浏览器自动处理)
302 临时重定向（配合location，浏览器自动处理)
304 资源未被修改
404 资源未找到
403 没有权限
500 服务器错误
504 网关超时
```

3. 关于协议和规范

```text
就是一个约定
要求大家都跟着执行
不要违反规范，例如IE浏览器
```

## http methods

1. 传统的methods

```text
get 获取服务器的数据
post像服务器提交数据
简单的网页功能，就这两个操作
```

2. 现在的methods

```text
get 获取数据
post 新建数据
patch/put更新数据
delete删除数据
```

3. Restful API

```text
一种新的API设计方法(早已推广使用)
 传统 API设计:把每个url当做一个功能
Restful API设计:把每个url当做一个唯一的资源

如何设计成一个资源?
尽量不用url参数
method表示操作类型

不使用url参数
传统API 设计:/api/list?pageIndex=2
Restful API设计:/api/list/2

用method表示操作类型
（传统API设计)
post请求 /api/create-blog
post请求 /api/update-blog?id=100
get请求 /api/get-blog?id=100
(Restful API设计)
post请求 /api/blog
patch请求 /api/blog/100
get请求 /api/blog/100

```

## http常见的header有哪些?

```
常见的Request Headers

Accept  浏览器可接收的数据格式
Accept-Encoding 浏览器可接收的压缩算法，如gzip
Accept-Languange 浏览器可接收的语言，如zh-CN
Connection: keep-alive 一次TCP连接重复使用
cookie
Host
User-Agent(简称UA) 浏览器信息
Content-type 发送数据的格式，如application/json

常见的Response Headers

```

## 描述一下http的缓存机制(重要)

5. 

