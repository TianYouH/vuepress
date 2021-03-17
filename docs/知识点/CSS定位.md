# CSS定位

1. absolute和relative定位

```text
relative 依据自身定位；
absolute 依据最近一层的定位元素定位；
定位元素：
absolute relative fixed；
body；
```

2. 居中对齐的实现方式

```text
水平居中：
inline元素:text-align: center；
block元素:margin: auto；
absolute元素:left: 50% + margin-left负值；

垂直居中：
inline元素: line-height的值等于height值；
absolute元素: top: 50% + margin-top负值；
absolute元素: transform(-50%, -50%)；
absolute元素: top, left, bottom, right = 0 + margin: auto；

```