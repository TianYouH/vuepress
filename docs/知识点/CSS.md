# CSS

## CSS布局

1. 盒模型宽度计算

```text
offsetWidth =(内容宽度＋内边距＋边框)，无外边距；
```

2. margin纵向重叠问题

```text
相邻元素的margin-top和margin-bottom会发生重叠，已最大值优先；
空白内容的<p></p>也会重叠；
```

3. margin负值问题

```text
margin-top和margin-left负值，元素向上、向左移动；
margin-right负值，右侧元素左移，自身不受影响；
margin-bottom负值，下方元素上移，自身不受影响；
```

4. BFC理解与应用

```text
理解：
Block format context，块级格式化上下文；
一块独立渲染区域，内部元素的渲染不会影响边界以外的元素；
应用：
清除浮动；
```

5. 如何实现圣杯布局和双飞翼布局

```text
目的：
三栏布局，中间一栏最先加载和渲染（内容最重要)；
两侧内容固定，中间内容随着宽度自适应；
一般用于PC网页；
技术总结：
使用float布局；
两侧使用margin负值，以便和中间内容横向重叠；
防止中间内容被两侧覆盖，一个用padding一个用margin；
```

6. 手写clearfix

```css
.clearfix:after {
  content: '';
  display: table;
  clear: both;
}
.clearfix {
  *zoom: 1; /* 兼容 IE 低版本 */
}
```

7. flex 实现一个三点的色子

```css
/* flex 画三个点的骰子 */
.box {
  display: flex;
  justify-content: space-between;
}
.item {
  /* 背景色，大小，边框 */
}
.item:nth-child(2) {
  align-self: center; /* 第二项居中对齐 */
}
.item:nth-child(3) {
  align-self: flex-end; /* 第三项尾对齐 */
}
```

## CSS定位

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

## CSS图文样式

1. line-height如何继承

```text
写具体数值，如30px，则继承该值（比较好理解)
写比例，1.5 ，则继承该比例（比较好理解)(实际值 = 16px * 1.5)
写百分比，如200%，则继承计算出来的值（考点)(继承值 = 16px * 200%)
```

## CSS 响应式

1. rem 是什么？

```text
rem是一个长度单位
px，绝对长度单位，最常用
em ，相对长度单位，相对于父元素，不常用
rem ，相对长度单位，相对于根元素，常用于响应式布局
```

2. 响应式布局的常用方案 rem

```text
media-query，根据不同的屏幕宽度设置根元素font-size
rem，基于根元素的相对单位
弊端：
"阶梯"性
```

```css
@media only screen and (max-width: 374px) {
  /* iphone5或者更小的尺寸，以 iphone5的宽度(320px)比例设置
font-size */
  html {
    font-size: 86px;
  }
}
@media only screen and (min-width: 375px) and (max-width: 413px) {
  /*iphone6/7/8和iphone x*/
  html {
    font-size: 100px;
  }
}
@media only screen and (min-width: 414px) {
  /* iphone6p或者更大的尺寸，以 iphone6p 的宽度(414px)比例设置 font-size */
  html {
    font-size: 110px;
  }
}
```

3.  vw/vh

```text
window.innerHeight === 100vh
window.innerWidth === 100vw

vh网页视口高度的1/100
vw网页视口宽度的1/100
vmax取两者最大值;vmin取两者最小值
```