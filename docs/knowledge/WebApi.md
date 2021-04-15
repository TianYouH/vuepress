# WebApi

## DOM

1. DOM 本质

```text
树形结构(DOM树)
特定的XML数据结构
```

2. DOM 节点操作

```js
const div1 = document.getElementById("div1"); //元素

const divList = document.getElementsByTagName("div");
console.log(divList.length);
console.log(divList[0]);
//集合
const containerList = document.getElementsByClassName(".container");
//集合
const pList = document.querySelectorAll("p"); //集合
```

3. DOM 结构操作

```js
const div1 = document.getElementById("div1");
// 添加新节点
const p1 = document.createElement("p");
p1.innerHTML = "this is p1";
// 添加新创建的元素
div1.appendChild(p1);
// 移动已有节点。注意是移动!!!
const p2 = document.getElementById("p2");
div1.appendChild(p2);
```

4. DOM 性能

```text
DOM操作非常“昂贵”，避免频繁的DOM操作
对DOM查询做缓存
将频繁操作改为一次性操作
```

```js
// 对DOM查询做缓存

// 不缓存DOM查询结果
for (let = 0; i < document.getElementsByTagName("p").length; i++) {
  //每次循环，都会计算length ，频繁进行DOM查询
}
//缓存DOM查询结果
const pList = document.getElementsByTagName("p");
const length = pList.length;
for (let i = 0; i < length; i++) {
  //缓存length ,只进行一次DOM查询
}

// 将频繁操作改为一次性操作
const listNode = document.getElementById("list");
//创建一个文档片段，此时还没有插入到DOM树中
const frag = document.createDocumentFragment();
//执行插入
for (let x = 0; x < i0; x++) {
  const li = document.createElement("li");
  li.innerHTML = "List item " + x;
  frag.appendChild(li);
}
//都完成之后，再插入到DOM树中
listNode.appendChild(frag);
```

5. attr 和 property 的区别

```js
// property: 修改对象属性，不会体现到html结构中 推荐
// attribute: 修改html属性，会改变html结构
// 两者都有可能引起DOM重新渲染

// property
p1.style.width = "100px";
p1.className = "red ";

// attribute
p1.setAttribute("data-name", "imooc");
console.log(p1.getAttribute("data-name "));
```

8. 一次性插入多个 DOM 节点，考虑性能

## BOM

### navigator 和 screen

```js
// navigator
const ua = navigator.userAgent;
const isChrome = ua.index0f("Chrome");
console.log(isChrome);

// screen
console.log(screen.width);
console.log(screen.height);
```

### location 和 history

```js
//location
console.log(location.href);
console.log(location.protocol); // 'http: ' 'https: '
console.log(location.pathname); // '/learn/199'
console.log(location.search);
console.log(location.hash);
// history
history.back();
history.forward();
```

## 事件

### 事件绑定

```js
const btn = document.getElementById("btn1");
btn.addEventListener("click", (event) => {
  console.log("clicked ");
});
```

### 事件冒泡

```js
// 基于DOM树形结构
// 事件会顺着触发元素网上冒泡
// 应用场景∶代理


const p1 = document.getElementById("p1");
const body = document.body;
bindEvent(p1, "click", (e) => {
  e.stopPropagation();
  // 注释掉这一行，来体会事件冒泡
  alert("激活");
});
bindEvent(body, "click", (e) => {
  alert("取消");
});
```

### 事件代理

```text
代码简洁
减少浏览器内存占用
但是，不要滥用
```

## Ajax

### XMLHttpRequest

1. 请求

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
```

2. xhr.readyState

```text
0-(未初始化)还没有调用send(方法
1-(载入)已调用send()方法，正在发送请求
2-(载入完成) send()方法执行完成，已经接收到全部响应内容
3-(交互）正在解析响应内容
4-(完成）响应内容解析完成，可以在客户端调用
```

2. xhr.status

```text
2xx–表示成功处理请求，如200
3xx-需要重定向，浏览器直接跳转，如301 302 304
4xx-客户端请求错误，如404 403
5xx-服务器端错误
```

### Fetch Api

```text
```

### 第三方 axios $.ajax

```text
```

### 跨域:同源策略，跨域解决方案

1. 同源策略

```text
ajax请求时，浏览器要求当前网页和server 必须同源（安全)
同源: 协议、域名、端口，三者必须一致
前端: http://a.com:8080/; server:https://b.com/api/xxx;

加载图片css js 可无视同源策略
<img src=跨域的图片地址/>
<link href=跨域的css地址/>
<script src=跨域的js地址></script>

<img />可用于统计打点，可使用第三方统计服务
<link /> <script>可使用CDN ，CDN一般都是外域
<script>可实现JSONP
```

2. 跨域

```text
所有的跨域，都必须经过server端允许和配合
未经server端允许就实现跨域，说明浏览器有漏洞危险信号
```

3. JSONP

```text
访问https://imooc.com/，服务端一定返回一个html文件吗?
服务器可以任意动态拼接数据返回，只要符合html格式要求
同理于<script src= "https://imooc.com/getData.js"></script>
<script>可绕过跨域限制
服务器可以任意动态拼接数据返回
所以，<script>就可以获得跨域的数据，只要服务端愿意返回
```

3. CORS(服务端支持)

```js
//第二个参数填写允许跨域的域名称,不建议直接写“*"
response.setHeader("Access-Control-Allow-Origin", "http://localhost:8011");
response.setHeader("Access-Control-Allow-Headers", "X-Requested-with");
response.setHeader(
  "Access-Control-Allow-Methods",
  "PUT,POST,GET,DELETE,OPTIONS"
);
//接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials", "true");
```


## 存储

### cookie

```text
本身用于浏览器和server通讯
被“借用”到本地存储来
可用document.cpokie =  '.….’来修改

缺点：
存储大小，最大4KB
http 请求时需要发送到服务端，增加请求数据量
只能用document.cookie = '.…’来修改，太过简陋
```
### localStorage和sessionStorage

```text
HTML5专门为存储而设计，最大可存5M
API简单易用setItem getItem
不会随着http请求被发送出去

localStorage数据会永久存储，除非代码或手动删除
sessionStorage数据只存在于当前会话，浏览器关闭则清空
一般用localStorage会更多一些
```

1. 描述cookie localStorage sessionStorage区别

```text
容量
API易用性
是否跟随 http请求发送出去
```
