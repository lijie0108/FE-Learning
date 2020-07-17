
## css的学习目标
### HTML的局限性
内容的语义

### css网页的美容师
### css初识
层叠样式表
设置HTML的版面布局和外观样式

### 引入css样式表
行内式
内部样式表
外部样式表(css共享)

展开式，代码小写

### css选择器
选择器的作用：找到特定的HTML页面元素

#### 基础选择器
标签选择器
类选择器(多类名选择器)
id选择器
通配符选择器(会匹配页面所有元素，降低页面响应速度)

团队约定
尽量少用通用选择器和id选择器，不使用无具体语义的div span等标签选择器

#### css文字文本样式
#### font字体
font-size
font-family
font-weight   (bold -> 700, normal -> 400)
font-style
font

#### css外观属性
color
line-height
text-align
text-indent
text-decoration

#### emment语法

## css 复合选择器
### 1.后代选择器
父级 子级 {}
### 2.子元素选择器
父级 > 子级

### 3.交集选择器
p.one {}

### 并集选择器
p, span {}

### 链接伪类选择器
a:link
a:visited
a:hover
a:active

顺序不能颠倒


### 标签的三种显示模式
块级元素
独占一行，高度，宽度，外边距，内边距都可以红纸，宽度默认容器的100%
h1~h6, p, div, ul, ol, li
（p, h1~h3, dt里面不能放div）


行内元素
相邻元素显示在一行，宽高直接设置无效，默认宽度是本身内容的宽度，行内元素只能容纳文本或者其他行内元素

a, strong, b, em, i, span, ins, u, del, s

行内块元素
img, input, td
可以设置宽高

### 标签显示模式转换
display: block, inline-block, inline;

### 行高line-height
基线和基线之间的距离为行高

单行文本垂直居中
height: 50px;
line-height: 50px;

### css背景
背景颜色
background-color
背景图片
background-image
背景平铺
background-repeat
背景位置
background-position

背景简写
background: 背景颜色 背景图片 背景平铺 背景滚动 背景位置;
背景透明
background: rgba(0, 0, 0, 0.4)

### CSS的三大特性
css层叠性

css继承性
text-, font-, line-, color这些可以继承

css优先级算法
权重计算，权重叠加
继承的权重是零

## CSS盒子模型
border: border-width, border-style, border-color

内盒尺寸计算

