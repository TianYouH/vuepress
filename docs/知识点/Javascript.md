# Javascript

## 变量类型和计算

1. 值类型

```js
let a = 100;
let b = a;
a = 200;
console.log(b); // 100

// 常见的值类型
let a; // undefined
const s = "abc";
const n = 100;
const b = true;
const s = Symbol("s");
```

2. 引用类型

```js
let a = { age: 20 };
let b = a;
b.age = 21;
console.log(a.age); // 21

// 常见引用类型
const obj = { x: 100 };
const arr = ["a", "b", "c "];
const n = null; // 特殊引用类型，指针指向为空地址

// 特殊引用类型，但不用于存储数据，所以没有“拷贝、复制函数"这一说，也可做为第三种函数类型
function fn() {}
```

3. typeof 运算符

```text
识别所有值类型
识别函数
判断是否是引用类型（不可再细分)
```

4. 深拷贝

```js
function deepClone(obj = {}) {
  if (typeof obj !== "object" || obj == null) {
    // obj是null ，或者不是对象和数组，直接返回
    return obj;
  }

  // 初始化返回结果
  let result;
  if (obj instanceof Array) {
    return [];
  } else {
    return {};
  }

  for (let key in obj) {
    // 保证key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用!!!
      result[key] = deepClone(obj[key]);
    }
  }
  //返回结果
  return result;
}
```

5. 字符串拼接

```js
const a = 100 + 10; //110
const b = 140 + "10"; //' 10010'
const c = true + "10"; // 'true10'
```

5. ==运算符

```js
100 == "100"; // true
0 == ""; // true
0 == false; // true
false = ""; // true
null == undefined; // true

// 除了== null之外，其他都一律用===，例如:
const obj = { x: 100 };
if (obj.a == null) {
}
//相当于:
// if (obj.a === null || obj.a === undefined) { }
```

6. if语句和逻辑运算

```text
truly变量: !!a === true的变量
falsely变量: !!a === false的变量
```
```js
console.log(10 && 0) // 0
console.log('' || 'abc') // 'abc'
console.log(!window.abc) // true
```

