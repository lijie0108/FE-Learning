## 学习目标
能根据PSD文件，用HTML+CSS布局出符合W3C规范的网页。
HTML：常用浏览器与浏览器内核、HTML语义化、表格和表单、HTML中常用的标签以及每个标签的语义。

CSS：CSS语法，选择器，字体样式，边框，背景，图片格式详解，定位，浮动，盒模型。

Photoshop：使用Photoshop将美工设计的PSD图转成静态页面，了解网站前台页面的开发。

品优购电商项目：代码分离原则，使用div+css布局完成一整套电商网站的静态页面。


### 1.认识网页
网页主要是由文字，图像和超链接等元素构成。当然，除了这些元素，网页中还可以包含音频、视频以及Flash等。

### 2.浏览器（显示代码）
浏览器是网页显示、运行的平台，常用的浏览器有IE，火狐，谷歌，Safari和Opera等。·


#### 2.2 常见的浏览器内核
IE  -> Trident
Firefox -> Gecko
Safari -> webkit
Chrome -> Chromium/Blink
Opera -> blink

Blink其实是Webkit的一个分支


### 3.web标准
#### 3.1 为什么要遵循web标准
由于不同的浏览器解析出来的效果可能不一致，开发者常常需要为多版本的开发而艰苦工作。
#### 3.2 web标准的好处
#### 3.3 web标准的构成
结构（HTML） + 表现（CSS） + 行为（JavaScript）


## 学习目标
- HTML的概念
- HTML的标签的分类
- HTML标签的关系
- HTML标签的语义化

### 1.HTML初识
超文本标记语言

统一小写

#### 1.2 HTML元素标签分类
- 常规元素（双标签） h1
- 空元素（单标签） br

#### 1.3 HTML标签的关系
- 嵌套关系
<head>
    <title></title>
</head>
- 并列关系
<head></head>
<body></body>

#### 文档类型
<!DOCTYPE html>

#### 页面语言
<html lang="en">

#### 字符集
<meta charset="UTF-8" /> 是必须要写的，否则可能出现乱码

UTF-8基本包含全世界所有国家需要用到的字符。

#### HTML标签的语义化
根据标签的语义，在合适的地方放置一个最为合理的标签，让结构更清晰。

使用语义化会具有更好的搜索引擎优化。

确定语义的HTML，再选合适的CSS。

## 学习目标

### 1.HTML常用标签
#### 1.排版标签
    标题标签  h1-h6系列
    段落标签  p
    水平线标签  hr
    换行标签  br
    div和span标签

#### 2.文本格式化标签
    粗体  strong
    斜体  i
    删除线   del
    下划线    ins


### 2.标签属性
#### 1.图像标签
    <img src="" alt="" title="">
    src 图片路径
    alt 替换文本
    title 鼠标悬停文本
    width
    height

#### 2.链接标签
    <a href="" target"目标窗口的弹出方式"></a>
    target有self和_blank两种取值


#### 3.注释标签
    注释是给人看的，目的是为了更好的解释这部分代码是干啥的，程序是不执行这个代码的。

### 2.路径

#### 1.相对路径
相对路径，就是从代码所在的这个文件出发，去寻找我们的目标文件。
#### 2.绝对路径


### 3.拓展阅读
#### 1.锚点定位
#### 2.base标签
#### 3.预格式化文本 pre
#### 4.特殊字符

HTML第二天目标
表格，表单，列表

表格
table
th
tr
td

表格属性
border
width
height
align
cellspacing
cellpadding

表头单元格
th
表格标题
caption

合并单元格
colspan
rowspan

表格划分结构
thead
tbody
tfoot

### 列表标签
无序列表
有序列表
自定义列表

### 表单标签
input标签
text
password
radio
checkbox
button
submit
reset
image
file

表单name属性
表单checked属性

label标签
textarea标签
select 下拉列表标签
selected属性

form表单域
action
method
name

团队约定：
元素的属性值使用双引号
元素属性值可以写上都写上


查文档
W3C
MDN

表格
列表
表单













