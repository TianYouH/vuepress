# Ajax

```text
状态码
跨域:同源策略，跨域解决方案
```

1. XMLHttpRequest

```js
// get请求
const xhr = new XMLHttpRequest();
xhr.open("GET", " /api", true);
xhr.onreadystatechange = function () {
  //这里的函数异步执行，可参考之前JS 基础中的异步模块
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      alert(xhr.responseText);
    }
  }
};
xhr.send(null);

/*
xhr.readyState
0-(未初始化)还没有调用send(方法
1-(载入)已调用send()方法，正在发送请求
2-(载入完成) send()方法执行完成，已经接收到全部响应内容
3-(交互）正在解析响应内容
4-(完成）响应内容解析完成，可以在客户端调用
*/
/*
xhr.status
2xx–表示成功处理请求，如200
3xx-需要重定向，浏览器直接跳转，如301 302 304
4xx-客户端请求错误，如404 403
5xx-服务器端错误
*/

```
