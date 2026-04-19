#### Q2: 为什么中文显示为乱码？

**乱码样子**：
```
ä½ å¥½ï¼Œä¸–ç•Œï¼

```

**原因**：
```
浏览器不知道你的文件使用什么编码
默认可能使用 GBK 或其他编码
但你的文件实际是 UTF-8 编码
```

**解决方法**：

**方法 1：确保保存为 UTF-8**
```
在 VS Code 中：
1. 查看右下角状态栏
2. 应该显示 "UTF-8"
3. 如果不是，点击它 → "通过编码保存" → 选择 "UTF-8"
```

**方法 2：检查 meta 标签**
```html
<!-- 确保 head 中有这行 -->
<meta charset="UTF-8">

<!-- 而且必须是第一个 meta 标签 -->
<head>
    <meta charset="UTF-8">  ← 必须在最前面
    <title>...</title>
</head>
```

**方法 3：用记事本另存为**
```
Windows 记事本：
文件 → 另存为 → 编码选择 "UTF-8" → 保存
```

---

#### Q3: 如何修改网页标题？

**修改 `<title>` 标签**：
```html
<head>
    <title>这里改成你想要的标题</title>
</head>
```

**修改后刷新浏览器**，标签页上的文字就会改变。

---

#### Q4: 为什么我的样式不生效？

**常见原因**：

**1. CSS 文件没有正确链接**
```html
<!-- ❌ 错误：文件名写错 -->
<link rel="stylesheet" href="styles.css">

<!-- ✅ 正确：确保文件名完全一致 -->
<link rel="stylesheet" href="style.css">
```

**2. 选择器写错了**
```css
/* ❌ 错误：类名前面忘了加点 */
myclass { color: red; }

/* ✅ 正确：类选择器要加点 */
.myclass { color: red; }
```

**3. 浏览器缓存问题**
```
解决：按 Ctrl + F5 强制刷新
或者：Ctrl + Shift + R
```

**4. CSS 优先级问题**
```css
/* 后面的样式会覆盖前面的 */
p { color: blue; }
p { color: red; } /* 这个生效 */
```

---

#### Q5: 如何查看 JavaScript 错误？

**打开控制台**：
```
1. 按 F12 打开开发者工具
2. 点击 "Console" 标签
3. 查看红色错误信息
```

**常见错误**：

**错误 1：变量未定义**
```
Uncaught ReferenceError: xxx is not defined

原因：使用了未声明的变量
解决：检查变量名是否拼写正确
```

**错误 2：找不到元素**
```
Cannot read property 'xxx' of null

原因：getElementById 没找到元素
解决：检查 ID 是否正确，确保元素已加载
```

**错误 3：语法错误**
```
Uncaught SyntaxError: Unexpected token

原因：代码有语法错误
解决：检查括号、引号是否匹配
```

---

### 1.7 本章小结

#### 你学到了什么？

✅ **理论知识**：
- Web 工作原理（请求-响应模型）
- 前端三剑客的关系（HTML/CSS/JS）
- 开发环境搭建（浏览器 + VS Code）

✅ **实践技能**：
- 创建了第一个 HTML 页面
- 理解了基本标签（h1, p, html, head, body）
- 学会了使用开发者工具

✅ **问题解决**：
- 常见问题的排查方法
- 如何查看和修复错误

#### 下一步学什么？

```
下一章我们将学习：
→ CSS 基础：如何让网页变漂亮
→ 颜色、字体、布局
→ 盒模型概念
→ Flexbox 布局
```

#### 课后作业

**必做**：
1. 创建一个包含以下内容的网页：
   - 一个一级标题（你的名字）
   - 两个二级标题（兴趣爱好、学习目标）
   - 至少三段文字
2. 使用开发者工具修改网页标题
3. 尝试在 Console 中运行 `document.title = "新标题"`

**选做**：
1. 给你的网页添加一个列表（ul/li）
2. 添加一个链接到你的社交媒体账号
3. 探索 Elements 面板，尝试修改样式

---

# 第二部分 CSS - 网页的美容师

## 第 2 章 CSS 基础入门

### 2.1 什么是 CSS？

#### CSS 的定义

**CSS (Cascading Style Sheets)** 层叠样式表，用于控制网页的外观和布局。

**形象理解**：
```
如果 HTML 是人的骨架
那么 CSS 就是衣服、化妆、发型
让这个人变得好看！
```

#### CSS 能做什么？

```
✓ 设置颜色和背景
✓ 控制字体和文字大小
✓ 调整间距和边距
✓ 实现复杂布局
✓ 添加动画效果
✓ 响应式设计（适配手机/平板/电脑）
```

#### CSS 不能做什么？

```
✗ 不能创建内容（那是 HTML 的工作）
✗ 不能处理逻辑（那是 JavaScript 的工作）
✗ 不能与服务器通信
✗ 不能访问数据库
```

---

### 2.2 CSS 的三种引入方式

#### 方式 1：外部样式表（⭐推荐）

**创建 CSS 文件**：
```css
/* style.css */
body {
    background-color: #f0f0f0;
}

h1 {
    color: blue;
}
```

**在 HTML 中引入**：
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

**优点**：
```
✅ 结构与样式分离
✅ 可以复用（多个 HTML 共用一个 CSS）
✅ 易于维护
✅ 浏览器可以缓存
```

**缺点**：
```
❌ 需要额外的 HTTP 请求
```

---

#### 方式 2：内部样式表

**直接写在 HTML 文件中**：
```html
<head>
    <style>
        body {
            background-color: #f0f0f0;
        }
        
        h1 {
            color: blue;
        }
    </style>
</head>
```

**优点**：
```
✅ 不需要额外文件
✅ 适合单页面应用
✅ 首屏加载快
```

**缺点**：
```
❌ 不能复用
❌ HTML 文件变大
❌ 难以维护
```

**适用场景**：
- 邮件模板
- 单页面应用的关键 CSS
- 演示代码

---

#### 方式 3：内联样式（❌不推荐）

**直接写在 HTML 标签上**：
```html
<h1 style="color: blue; font-size: 24px;">标题</h1>
<p style="color: red; margin: 10px;">段落</p>
```

**优点**：
```
✅ 优先级最高
✅ 快速测试样式
```

**缺点**：
```
❌ 无法复用
❌ 难以维护
❌ 违反关注点分离原则
❌ 优先级过高，难以覆盖
```

**何时使用**：
- 临时调试
- JavaScript 动态修改样式
- 邮件 HTML（部分邮箱不支持外部 CSS）

---

#### 三种方式对比

| 特性 | 外部样式表 | 内部样式表 | 内联样式 |
|------|-----------|-----------|---------|
| 可复用性 | ✅ 高 | ❌ 低 | ❌ 无 |
| 易维护性 | ✅ 高 | ⚠️ 中 | ❌ 低 |
| 加载速度 | ⚠️ 需额外请求 | ✅ 快 | ✅ 快 |
| 优先级 | 低 | 中 | 高 |
| 推荐使用 | ⭐⭐⭐ | ⭐⭐ | ⭐ |

**最佳实践**：
```
主要使用：外部样式表
偶尔使用：内部样式表（关键 CSS）
避免使用：内联样式
```

---

### 2.3 CSS 选择器详解

#### 什么是选择器？

选择器用于"选中"你要 styled 的 HTML 元素。

```css
选择器 {
    属性: 值;
}
```

---

#### 1. 元素选择器

**选中所有某种标签**：

```css
/* 选中所有 p 标签 */
p {
    color: blue;
}

/* 选中所有 h1 标签 */
h1 {
    font-size: 32px;
}
```

```html
<p>这段文字会变蓝</p>
<p>这段也会变蓝</p>
<h1>这个标题会变大</h1>
```

**特点**：
- 权重低：(0, 0, 1)
- 影响范围大
- 适合设置全局样式

---

#### 2. 类选择器（⭐最常用）

**选中带有特定 class 的元素**：

```css
/* 选中 class="highlight" 的元素 */
.highlight {
    background-color: yellow;
}

/* 选中 class="btn" 的元素 */
.btn {
    padding: 10px 20px;
    border-radius: 5px;
}
```

```html
<p class="highlight">这段有黄色背景</p>
<button class="btn">按钮</button>
<div class="highlight btn">既有背景又是按钮样式</div>
```

**特点**：
- 权重中等：(0, 1, 0)
- 可以重复使用
- 一个元素可以有多个类

**多个类名**：
```html
<div class="card highlight large">
    这个元素有三个类
</div>
```

---

#### 3. ID 选择器

**选中特定 id 的元素**：

```css
/* 选中 id="header" 的元素 */
#header {
    background-color: #333;
    color: white;
}
```

```html
<header id="header">网站头部</header>
```

**特点**：
- 权重高：(1, 0, 0)
- 一个页面只能有一个相同 ID
- 适合唯一元素

**注意**：
```
⚠️ 一个 ID 只能在页面中出现一次
⚠️ 不要滥用 ID 选择器（优先级太高）
```

---

#### 4. 通配符选择器

**选中所有元素**：

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

**特点**：
- 权重最低：(0, 0, 0)
- 影响所有元素
- 常用于重置默认样式

---

#### 5. 组合选择器

**后代选择器（空格）**：
```css
/* 选中 div 里面的所有 p */
div p {
    color: red;
}
```

```html
<div>
    <p>这个会变红</p>
    <section>
        <p>这个也会变红（后代）</p>
    </section>
</div>
<p>这个不会变红（不是 div 的后代）</p>
```

**子元素选择器（>）**：
```css
/* 只选中 div 的直接子元素 p */
div > p {
    color: blue;
}
```

```html
<div>
    <p>这个会变蓝（直接子元素）</p>
    <section>
        <p>这个不会变蓝（不是直接子元素）</p>
    </section>
</div>
```

**相邻兄弟选择器（+）**：
```css
/* 选中紧接在 h1 后面的 p */
h1 + p {
    font-size: 18px;
}
```

```html
<h1>标题</h1>
<p>这个会变大（紧跟 h1）</p>
<p>这个不变</p>
```

**通用兄弟选择器（~）**：
```css
/* 选中 h1 后面所有的 p */
h1 ~ p {
    color: green;
}
```

---

#### 6. 伪类选择器

**根据状态选择元素**：

```css
/* 鼠标悬停时 */
a:hover {
    color: red;
}

/* 被点击时 */
a:active {
    color: blue;
}

/* 访问过的链接 */
a:visited {
    color: purple;
}

/* 第一个子元素 */
li:first-child {
    font-weight: bold;
}

/* 最后一个子元素 */
li:last-child {
    border-bottom: none;
}

/* 第 n 个子元素 */
li:nth-child(2n) {
    background-color: #f0f0f0; /* 偶数行 */
}

/* 焦点状态 */
input:focus {
    border-color: blue;
    outline: none;
}
```

---

#### 7. 伪元素选择器

**选择元素的某一部分**：

```css
/* 在元素前插入内容 */
p::before {
    content: "💡 ";
}

/* 在元素后插入内容 */
p::after {
    content: " ✨";
}

/* 选中第一行 */
p::first-line {
    font-weight: bold;
}

/* 选中第一个字母 */
p::first-letter {
    font-size: 2em;
    color: red;
}
```

---

#### 选择器优先级总结

```
优先级从高到低：

!important          ← 核武器，慎用
内联样式             ← style="..."
ID 选择器            ← #id
类/属性/伪类         ← .class, [type="text"], :hover
元素/伪元素          ← div, p, ::before
通配符              ← *
继承                ← 从父元素继承
浏览器默认           ← 浏览器自带样式
```

**计算规则**：
```
(inline, id, class, element)

style="..."         → (1, 0, 0, 0)
#header             → (0, 1, 0, 0)
.nav .item          → (0, 0, 2, 0)
div p               → (0, 0, 0, 2)
div .nav p          → (0, 0, 1, 2)
```

---

### 2.4 盒模型（Box Model）

#### 什么是盒模型？

**每个 HTML 元素都是一个矩形盒子**：

```
┌─────────────────────────────┐
│         Margin              │  ← 外边距
│  ┌───────────────────────┐  │
│  │       Border          │  │  ← 边框
│  │  ┌─────────────────┐  │  │
│  │  │    Padding      │  │  │  ← 内边距
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  Content  │  │  │  │  ← 内容
│  │  │  │(width/    │  │  │  │
│  │  │  │ height)   │  │  │  │
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

#### 四个组成部分

**1. Content（内容）**
```css
.box {
    width: 200px;   /* 内容宽度 */
    height: 100px;  /* 内容高度 */
}
```

**2. Padding（内边距）**
```css
.box {
    padding: 20px;              /* 四周都是 20px */
    padding: 10px 20px;         /* 上下 10px，左右 20px */
    padding: 10px 20px 30px;    /* 上 10，左右 20，下 30 */
    padding: 10px 20px 30px 40px; /* 上右下左（顺时针）*/
    
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}
```

**3. Border（边框）**
```css
.box {
    border: 2px solid black;  /* 宽度 样式 颜色 */
    
    border-width: 2px;
    border-style: solid;  /* solid, dashed, dotted, double */
    border-color: black;
    
    border-radius: 10px;  /* 圆角 */
}
```

**4. Margin（外边距）**
```css
.box {
    margin: 20px;           /* 四周 */
    margin: 10px auto;      /* 上下 10px，左右自动（居中）*/
    margin: 0 auto;         /* 水平居中 */
}
```

---

#### 两种盒模型

**1. 标准盒模型（content-box）**

```css
box-sizing: content-box; /* 默认值 */

.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}

/* 实际占用宽度 = 200 + 20×2 + 5×2 = 250px */
/* 内容宽度 = 200px */
```

**2. IE 盒模型（border-box）⭐推荐**

```css
box-sizing: border-box;

.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}

/* 实际占用宽度 = 200px */
/* 内容宽度 = 200 - 20×2 - 5×2 = 150px */
```

**全局设置（最佳实践）**：
```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

**为什么推荐 border-box？**
```
✅ 更直观：设置的 width 就是实际宽度
✅ 更容易布局：不用担心 padding/border 撑破容器
✅ 响应式更简单：百分比宽度不会因为 padding 而出错
```

---

#### 盒模型可视化示例

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 200px;
            padding: 20px;
            border: 5px solid #333;
            margin: 30px;
            background-color: lightblue;
        }
    </style>
</head>
<body>
    <div class="box">
        这是一个盒子
    </div>
</body>
</html>
```

**实际尺寸**：
```
总宽度 = 200 + 20×2 + 5×2 + 30×2 = 300px
总高度 = 内容高度 + 40 + 10 + 60 = ?
```

---

### 2.5 颜色和背景

#### 颜色表示方法

**1. 颜色关键字**
```css
color: red;
color: blue;
color: transparent;
```

**2. 十六进制**
```css
color: #ff0000;      /* 红色 */
color: #00ff00;      /* 绿色 */
color: #0000ff;      /* 蓝色 */
color: #ffffff;      /* 白色 */
color: #000000;      /* 黑色 */
color: #f00;         /* 简写（每两位相同可简写）*/
```

**3. RGB**
```css
color: rgb(255, 0, 0);     /* 红色 */
color: rgb(0, 255, 0);     /* 绿色 */
color: rgba(255, 0, 0, 0.5); /* 半透明红色 */
```

**4. HSL**
```css
color: hsl(0, 100%, 50%);      /* 红色 */
color: hsl(120, 100%, 50%);    /* 绿色 */
color: hsla(0, 100%, 50%, 0.5); /* 半透明红色 */
```

**在线取色工具**：
- https://htmlcolorcodes.com/
- https://coolors.co/

---

#### 背景属性

**背景颜色**：
```css
background-color: #f0f0f0;
```

**背景图片**：
```css
background-image: url('image.jpg');
background-repeat: no-repeat;      /* 不重复 */
background-position: center;       /* 居中 */
background-size: cover;            /* 覆盖整个区域 */
```

**简写**：
```css
background: #f0f0f0 url('image.jpg') no-repeat center/cover;
```

**渐变背景**：
```css
/* 线性渐变 */
background: linear-gradient(to right, red, blue);
background: linear-gradient(45deg, red, blue);

/* 径向渐变 */
background: radial-gradient(circle, red, blue);
```

---

### 2.6 文本样式

#### 字体相关

```css
.text {
    /* 字体族 */
    font-family: 'Microsoft YaHei', Arial, sans-serif;
    
    /* 字体大小 */
    font-size: 16px;
    font-size: 1.2em;
    font-size: 1rem;
    
    /* 字体粗细 */
    font-weight: normal;   /* 400 */
    font-weight: bold;     /* 700 */
    font-weight: 300;
    
    /* 字体样式 */
    font-style: italic;
    
    /* 行高 */
    line-height: 1.6;
    line-height: 24px;
}
```

**字体栈最佳实践**：
```css
font-family: -apple-system, BlinkMacSystemFont, 
             "Segoe UI", Roboto, "Helvetica Neue", 
             Arial, "Noto Sans SC", sans-serif;
```

---

#### 文本装饰

```css
.text {
    /* 文本颜色 */
    color: #333;
    
    /* 文本对齐 */
    text-align: left;
    text-align: center;
    text-align: right;
    text-align: justify;
    
    /* 文本装饰 */
    text-decoration: none;      /* 无装饰 */
    text-decoration: underline; /* 下划线 */
    text-decoration: line-through; /* 删除线 */
    
    /* 文本阴影 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    
    /* 字母间距 */
    letter-spacing: 2px;
    
    /* 单词间距 */
    word-spacing: 5px;
    
    /* 首行缩进 */
    text-indent: 2em;
}
```

---

### 2.7 Flexbox 布局（重点）

#### 什么是 Flexbox？

**Flexbox（弹性盒子）** 是一维布局模型，非常适合组件级别的布局。

**核心概念**：
```
容器（Flex Container）
  └─ 项目（Flex Items）
```

---

#### 启用 Flexbox

```css
.container {
    display: flex;
}
```

---

#### 主轴方向

```css
.container {
    /* 水平排列（默认）*/
    flex-direction: row;
    
    /* 垂直排列 */
    flex-direction: column;
    
    /* 水平反向 */
    flex-direction: row-reverse;
    
    /* 垂直反向 */
    flex-direction: column-reverse;
}
```

---

#### 主轴对齐

```css
.container {
    /* 左对齐（默认）*/
    justify-content: flex-start;
    
    /* 右对齐 */
    justify-content: flex-end;
    
    /* 居中对齐 */
    justify-content: center;
    
    /* 两端对齐 */
    justify-content: space-between;
    
    /* 均匀分布 */
    justify-content: space-around;
    
    /* 均匀分布（间距相等）*/
    justify-content: space-evenly;
}
```

---

#### 交叉轴对齐

```css
.container {
    /* 拉伸（默认）*/
    align-items: stretch;
    
    /* 起点对齐 */
    align-items: flex-start;
    
    /* 终点对齐 */
    align-items: flex-end;
    
    /* 居中对齐 */
    align-items: center;
    
    /* 基线对齐 */
    align-items: baseline;
}
```

---

#### 换行

```css
.container {
    /* 不换行（默认）*/
    flex-wrap: nowrap;
    
    /* 换行 */
    flex-wrap: wrap;
    
    /* 反向换行 */
    flex-wrap: wrap-reverse;
}
```

---

#### 间距

```css
.container {
    /* 项目之间的间距 */
    gap: 20px;
    
    /* 行间距 */
    row-gap: 20px;
    
    /* 列间距 */
    column-gap: 20px;
}
```

---

#### 项目属性

```css
.item {
    /* 放大比例 */
    flex-grow: 1;
    
    /* 缩小比例 */
    flex-shrink: 1;
    
    /* 基础大小 */
    flex-basis: 200px;
    
    /* 简写 */
    flex: 1; /* grow: 1, shrink: 1, basis: 0 */
    
    /* 单独对齐 */
    align-self: center;
    
    /* 排序 */
    order: 1;
}
```

---

#### Flexbox 实战示例

**导航栏**：
```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}
```

**卡片网格**：
```css
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px; /* 最小 300px，可放大 */
}
```

**垂直居中**：
```css
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

---

### 2.8 Grid 布局

#### 什么是 Grid？

**Grid（网格布局）** 是二维布局系统，适合页面整体布局。

---

#### 启用 Grid

```css
.container {
    display: grid;
}
```

---

#### 定义行列

```css
.container {
    /* 三列，每列等宽 */
    grid-template-columns: repeat(3, 1fr);
    
    /* 自定义列宽 */
    grid-template-columns: 200px 1fr 200px;
    
    /* 两行 */
    grid-template-rows: 100px auto;
    
    /* 间距 */
    gap: 20px;
}
```

---

#### 网格项定位

```css
.item {
    /* 占据第 1-2 列，第 1-3 行 */
    grid-column: 1 / 3;
    grid-row: 1 / 4;
    
    /* 简写 */
    grid-area: 1 / 1 / 4 / 3;
}
```

---

#### Grid vs Flexbox

| 特性 | Flexbox | Grid |
|------|---------|------|
| 维度 | 一维 | 二维 |
| 适用场景 | 组件布局 | 页面布局 |
| 对齐方式 | 强大 | 强大 |
| 学习曲线 | 简单 | 较复杂 |

**最佳实践**：
```
页面整体布局 → Grid
组件内部布局 → Flexbox
两者结合使用效果最佳
```

---

### 2.9 响应式设计

#### 媒体查询

```css
/* 小屏幕（手机）*/
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}

/* 中等屏幕（平板）*/
@media (min-width: 769px) and (max-width: 1024px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* 大屏幕（桌面）*/
@media (min-width: 1025px) {
    .container {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

---

#### 移动端优先

```css
/* 默认：移动端样式 */
.container {
    flex-direction: column;
}

/* 平板及以上 */
@media (min-width: 768px) {
    .container {
        flex-direction: row;
    }
}

/* 桌面及以上 */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

---

### 2.10 过渡和动画

#### 过渡（Transition）

```css
.button {
    background-color: blue;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: red;
    transform: scale(1.1);
}
```

**过渡属性**：
```css
transition-property: all;        /* 哪些属性过渡 */
transition-duration: 0.3s;       /* 持续时间 */
transition-timing-function: ease; /* 速度曲线 */
transition-delay: 0s;            /* 延迟 */

/* 简写 */
transition: all 0.3s ease 0s;
```

---

#### 动画（Animation）

```css
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.element {
    animation: slideIn 0.5s ease-out;
}
```

**动画属性**：
```css
animation-name: slideIn;
animation-duration: 0.5s;
animation-timing-function: ease-out;
animation-delay: 0s;
animation-iteration-count: 1;    /* infinite 无限循环 */
animation-direction: normal;     /* alternate 交替 */
animation-fill-mode: forwards;   /* 保持最终状态 */

/* 简写 */
animation: slideIn 0.5s ease-out 0s 1 normal forwards;
```

---

### 2.11 动手练习

#### 练习 1：创建卡片组件

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: Arial, sans-serif;
            background: #f0f0f0;
            padding: 20px;
        }
        
        .card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
            max-width: 300px;
            margin: 20px auto;
            transition: transform 0.3s;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .card-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, #667eea, #764ba2);
        }
        
        .card-content {
            padding: 20px;
        }
        
        .card-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
        
        .card-text {
            color: #666;
            line-height: 1.6;
        }
        
        .card-button {
            display: inline-block;
            margin-top: 15px;
            padding: 10px 20px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background 0.3s;
        }
        
        .card-button:hover {
            background: #764ba2;
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="card-image"></div>
        <div class="card-content">
            <h2 class="card-title">卡片标题</h2>
            <p class="card-text">这是卡片的内容描述，可以放一些文字。</p>
            <a href="#" class="card-button">了解更多</a>
        </div>
    </div>
</body>
</html>
```

---

#### 练习 2：实现响应式导航栏

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        .navbar {
            background: #333;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            color: white;
            font-size: 1.5rem;
        }
        
        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: #667eea;
        }
        
        @media (max-width: 768px) {
            .navbar {
                flex-direction: column;
                gap: 1rem;
            }
            
            .nav-links {
                gap: 1rem;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="logo">Logo</div>
        <ul class="nav-links">
            <li><a href="#">首页</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">联系</a></li>
        </ul>
    </nav>
</body>
</html>
```

---

### 2.12 常见问题

#### Q1: 为什么我的元素不居中？

**水平居中**：
```css
/* 块级元素 */
.element {
    margin: 0 auto;
    width: 50%; /* 必须有宽度 */
}

/* Flexbox */
.parent {
    display: flex;
    justify-content: center;
}

/* Grid */
.parent {
    display: grid;
    place-items: center;
}
```

**垂直居中**：
```css
/* Flexbox（推荐）*/
.parent {
    display: flex;
    align-items: center;
    min-height: 100vh;
}

/* Grid */
.parent {
    display: grid;
    place-items: center;
    min-height: 100vh;
}
```

---

#### Q2: 为什么 padding 会让元素变大？

**原因**：使用了默认的 `content-box` 盒模型

**解决**：
```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

---

#### Q3: 如何选择奇数/偶数行？

```css
/* 奇数行 */
li:nth-child(odd) {
    background: #f0f0f0;
}

/* 偶数行 */
li:nth-child(even) {
    background: white;
}

/* 每 3 行 */
li:nth-child(3n) {
    color: red;
}
```

---

### 2.13 本章小结

#### 你学到了什么？

✅ **CSS 基础**：
- 三种引入方式及优缺点
- 选择器类型和优先级
- 盒模型概念

✅ **布局技术**：
- Flexbox 一维布局
- Grid 二维布局
- 响应式设计

✅ **视觉效果**：
- 颜色和背景
- 文本样式
- 过渡和动画

#### 下一步学什么？

```
下一章我们将学习：
→ JavaScript 编程基础
→ 变量和数据类型
→ 函数和作用域
→ DOM 操作
```

---

# 第三部分 JavaScript - 网页的大脑

## 第 3 章 JavaScript 入门

### 3.1 什么是 JavaScript？

#### JavaScript 的定义

**JavaScript** 是一种编程语言，让网页具有交互性和动态功能。

**形象理解**：
```
HTML = 骨架（结构）
CSS  = 衣服（外观）
JS   = 大脑（行为）
```

#### JavaScript 能做什么？

```
✓ 响应用户操作（点击、滚动、输入）
✓ 动态修改页面内容
✓ 验证表单数据
✓ 发送网络请求
✓ 操作浏览器 API
✓ 创建游戏和动画
✓ 开发后端应用（Node.js）
```

---

### 3.2 第一个 JavaScript 程序

#### Hello World

```javascript
// 在浏览器控制台输入
console.log('Hello, World!');
```

**如何打开控制台**：
```
1. 按 F12 打开开发者工具
2. 点击 "Console" 标签
3. 输入代码并按 Enter
```

---

#### 在 HTML 中使用 JS

**方式 1：内联脚本**
```html
<script>
    alert('你好！');
</script>
```

**方式 2：外部文件（推荐）**
```html
<script src="script.js"></script>
```

**放置位置**：
```html
<!-- 推荐：放在 body 底部 -->
<body>
    <!-- 页面内容 -->
    
    <script src="script.js"></script>
</body>
```

**为什么放在底部？**
```
确保 HTML 元素已加载完成
JS 才能找到并操作这些元素
```

---

### 3.3 变量和数据类型

#### 声明变量

```javascript
// var（旧式，不推荐）
var name = '张三';

// let（推荐，可重新赋值）
let age = 20;
age = 21; // ✅ 可以修改

// const（推荐，不可重新赋值）
const PI = 3.14159;
PI = 3.14; // ❌ 报错
```

**选择建议**：
```
默认使用 const
需要重新赋值时使用 let
避免使用 var
```

---

#### 数据类型

**1. 字符串（String）**
```javascript
let name = '张三';
let greeting = "你好";
let template = `我叫${name}`; // 模板字符串
```

**2. 数字（Number）**
```javascript
let age = 20;
let price = 99.99;
let negative = -10;
```

**3. 布尔值（Boolean）**
```javascript
let isStudent = true;
let hasJob = false;
```

**4. 数组（Array）**
```javascript
let colors = ['red', 'green', 'blue'];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'hello', true, null];
```

**5. 对象（Object）**
```javascript
let person = {
    name: '张三',
    age: 20,
    isStudent: true
};
```

**6. 空值**
```javascript
let empty = null;      // 空值
let notDefined;        // undefined（未定义）
```

---

#### 类型检查

```javascript
typeof 'hello';    // "string"
typeof 123;        // "number"
typeof true;       // "boolean"
typeof [];         // "object"
typeof {};         // "object"
typeof null;       // "object" (历史遗留 bug)
typeof undefined;  // "undefined"
```

---

### 3.4 运算符

#### 算术运算符

```javascript
let a = 10;
let b = 3;

a + b   // 13  加法
a - b   // 7   减法
a * b   // 30  乘法
a / b   // 3.333... 除法
a % b   // 1   取余
a ** b  // 1000 幂运算
```

---

#### 赋值运算符

```javascript
let x = 10;

x += 5;   // x = x + 5 = 15
x -= 3;   // x = x - 3 = 12
x *= 2;   // x = x * 2 = 24
x /= 4;   // x = x / 4 = 6
x %= 4;   // x = x % 4 = 2
```

---

#### 比较运算符

```javascript
5 == '5'    // true  （宽松相等，只比较值）
5 === '5'   // false （严格相等，比较值和类型）
5 != '5'    // false
5 !== '5'   // true
5 > 3       // true
5 < 3       // false
5 >= 5      // true
5 <= 4      // false
```

**重要**：始终使用 `===` 和 `!==`

---

#### 逻辑运算符

```javascript
true && true    // true  （与）
true && false   // false
true || false   // true  （或）
false || false  // false
!true           // false （非）
!false          // true
```

---

### 3.5 条件语句

#### if...else

```javascript
let age = 18;

if (age >= 18) {
    console.log('成年人');
} else {
    console.log('未成年人');
}
```

---

#### if...else if...else

```javascript
let score = 85;

if (score >= 90) {
    console.log('优秀');
} else if (score >= 80) {
    console.log('良好');
} else if (score >= 60) {
    console.log('及格');
} else {
    console.log('不及格');
}
```

---

#### 三元运算符

```javascript
let age = 20;
let status = age >= 18 ? '成年' : '未成年';
console.log(status); // "成年"
```

---

#### switch 语句

```javascript
let day = 3;

switch (day) {
    case 1:
        console.log('星期一');
        break;
    case 2:
        console.log('星期二');
        break;
    case 3:
        console.log('星期三');
        break;
    default:
        console.log('其他');
}
```

---

### 3.6 循环

#### for 循环

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
```

---

#### while 循环

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

---

#### do...while 循环

```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

---

#### 遍历数组

```javascript
let fruits = ['苹果', '香蕉', '橙子'];

// for 循环
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of（推荐）
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach
fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

---

### 3.7 函数

#### 函数声明

```javascript
function greet(name) {
    return '你好，' + name;
}

let message = greet('张三');
console.log(message); // "你好，张三"
```

---

#### 函数表达式

```javascript
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3)); // 8
```

---

#### 箭头函数（ES6）

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20

// 单参数可省略括号
const square = x => x * x;

// 无参数需要括号
const hello = () => 'Hello';
```

---

#### 默认参数

```javascript
function greet(name = '访客') {
    return '你好，' + name;
}

greet();        // "你好，访客"
greet('张三');  // "你好，张三"
```

---

### 3.8 数组方法

#### 添加/删除元素

```javascript
let arr = [1, 2, 3];

arr.push(4);        // 末尾添加 → [1, 2, 3, 4]
arr.pop();          // 末尾删除 → [1, 2, 3]
arr.unshift(0);     // 开头添加 → [0, 1, 2, 3]
arr.shift();        // 开头删除 → [1, 2, 3]
```

---

#### 查找元素

```javascript
let arr = [1, 2, 3, 4, 5];

arr.indexOf(3);         // 2（索引）
arr.includes(3);        // true
arr.find(x => x > 3);   // 4（第一个符合条件的）
arr.findIndex(x => x > 3); // 3（索引）
```

---

#### 转换数组

```javascript
let numbers = [1, 2, 3, 4, 5];

// map - 映射
let doubled = numbers.map(x => x * 2);
// [2, 4, 6, 8, 10]

// filter - 过滤
let evens = numbers.filter(x => x % 2 === 0);
// [2, 4]

// reduce - 归约
let sum = numbers.reduce((acc, cur) => acc + cur, 0);
// 15
```

---

#### 排序和反转

```javascript
let arr = [3, 1, 4, 1, 5];

arr.sort((a, b) => a - b);  // 升序 → [1, 1, 3, 4, 5]
arr.sort((a, b) => b - a);  // 降序 → [5, 4, 3, 1, 1]
arr.reverse();              // 反转 → [5, 4, 3, 1, 1]
```

---

### 3.9 对象

#### 创建对象

```javascript
let person = {
    name: '张三',
    age: 20,
    hobbies: ['读书', '编程'],
    greet: function() {
        return '你好，我是' + this.name;
    }
};
```

---

#### 访问属性

```javascript
person.name;        // "张三"
person['name'];     // "张三"
person.greet();     // "你好，我是张三"
```

---

#### 修改属性

```javascript
person.age = 21;
person.email = 'zhangsan@example.com';
delete person.age;
```

---

#### 遍历对象

```javascript
// 获取所有键
Object.keys(person);
// ['name', 'hobbies', 'greet']

// 获取所有值
Object.values(person);
// ['张三', ['读书', '编程'], ƒ]

// 获取键值对
Object.entries(person);
// [['name', '张三'], ['hobbies', [...]], ...]

// for...in
for (let key in person) {
    console.log(key + ': ' + person[key]);
}
```

---

### 3.10 作用域

#### 全局作用域

```javascript
let globalVar = '全局';

function test() {
    console.log(globalVar); // 可以访问
}
```

---

#### 局部作用域

```javascript
function test() {
    let localVar = '局部';
    console.log(localVar); // 可以访问
}

console.log(localVar); // ❌ 报错
```

---

#### 块级作用域

```javascript
if (true) {
    let blockVar = '块级';
    console.log(blockVar); // 可以访问
}

console.log(blockVar); // ❌ 报错
```

---

### 3.11 动手练习

#### 练习 1：计算器

```javascript
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return '无效的运算符';
    }
}

console.log(calculator(10, 5, '+')); // 15
console.log(calculator(10, 5, '*')); // 50
```

---

#### 练习 2：数组操作

```javascript
// 找出数组中的最大值
function findMax(arr) {
    return Math.max(...arr);
}

// 去重
function unique(arr) {
    return [...new Set(arr)];
}

// 测试
console.log(findMax([3, 1, 4, 1, 5])); // 5
console.log(unique([1, 2, 2, 3, 3]));  // [1, 2, 3]
```

---

### 3.12 常见问题

#### Q1: var、let、const 有什么区别？

| 特性 | var | let | const |
|------|-----|-----|-------|
| 作用域 | 函数作用域 | 块级作用域 | 块级作用域 |
| 可重新赋值 | ✅ | ✅ | ❌ |
| 变量提升 | ✅ | ❌ | ❌ |
| 暂时性死区 | 无 | 有 | 有 |

**建议**：优先使用 const，需要修改时用 let，避免使用 var

---

#### Q2: == 和 === 有什么区别？

```javascript
5 == '5'    // true  （类型转换后比较）
5 === '5'   // false （严格比较，类型不同）

'' == false  // true
'' === false // false

null == undefined  // true
null === undefined // false
```

**建议**：始终使用 `===` 和 `!==`

---

#### Q3: 如何调试 JavaScript？

**方法 1：console.log**
```javascript
console.log('变量值:', variable);
console.table(array);  // 表格形式
console.error('错误信息');
```

**方法 2：断点调试**
```javascript
debugger; // 代码执行到这里会暂停
```

**步骤**：
```
1. 打开开发者工具（F12）
2. 切换到 Sources 面板
3. 在代码行号处点击设置断点
4. 刷新页面
5. 代码会在断点处暂停
6. 可以查看变量、单步执行
```

---

### 3.13 本章小结

#### 你学到了什么？

✅ **基础语法**：
- 变量和数据类型
- 运算符
- 条件和循环

✅ **函数**：
- 函数声明和表达式
- 箭头函数
- 默认参数

✅ **数据结构**：
- 数组及常用方法
- 对象及属性操作

#### 下一步学什么？

```
下一章我们将学习：
→ DOM 操作
→ 事件处理
→ 异步编程
→ 实战项目
```

---

# 总结与进阶

## 🎯 学习路线回顾

```
HTML（结构）
  ↓
CSS（样式）
  ↓
JavaScript（交互）
  ↓
DOM 操作
  ↓
实战项目
```

## 📚 继续学习

### 中级主题
- ES6+ 新特性
- 异步编程（Promise, async/await）
- Fetch API
- LocalStorage
- 模块化

### 高级主题
- Vue.js / React
- Node.js
- TypeScript
- Webpack / Vite
- 性能优化

## 🔗 优质资源

- [MDN Web Docs](https://developer.mozilla.org/zh-CN/)
- [freeCodeCamp](https://www.freecodecamp.org/)
- [CodePen](https://codepen.io/)
- [GitHub](https://github.com/)

---

**恭喜你完成了前端入门教程！** 🎉

记住：**实践是最好的老师**。多写代码，多做项目，你会进步得更快！

加油！💪