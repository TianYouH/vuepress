# CSS布局

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
  justify-center: space-between;
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


