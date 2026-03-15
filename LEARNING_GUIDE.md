# 🎓 前端开发系统化学习教程

> 从零开始掌握 Web 开发的完整知识体系

---

## 📑 目录导航

1. [HTML 深度解析](#html-深度解析)
2. [CSS 核心原理](#css-核心原理)
3. [JavaScript 编程基础](#javascript-编程基础)
4. [DOM 编程艺术](#dom-编程艺术)
5. [事件处理机制](#事件处理机制)
6. [异步编程进阶](#异步编程进阶)
7. [实战项目指南](#实战项目指南)

---

# HTML 深度解析

## 1.1 HTML 的本质与历史

### 什么是 HTML？
**HTML (HyperText Markup Language)** 不是编程语言，而是**标记语言**。它的作用是使用标签来"标注"文档中的不同部分，告诉浏览器每个元素的意义和用途。

### HTML 版本演进
```
HTML 1.0 (1991)   - 诞生，只有基本标签
HTML 2.0 (1995)   - 第一个标准版本
HTML 4.01 (1999)  - 重大更新，引入 CSS 支持
XHTML (2000)      - 基于 XML 的严格版本
HTML5 (2014)      - 现代标准，新增语义化标签、多媒体等
HTML5.3 (2018)    - 最新稳定版本
```

---

## 1.2 HTML 文档结构深度剖析

### 完整文档结构示例
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <!-- 元数据区域：不会显示在页面上 -->
    <meta charset="UTF-8">
    <meta name="description" content="页面描述，用于 SEO">
    <meta name="keywords" content="关键词 1, 关键词 2">
    <meta name="author" content="作者名">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- 页面标题 -->
    <title>我的网页标题</title>
    
    <!-- 引入外部资源 -->
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="favicon.ico">
    
    <!-- 内联样式（不推荐大量使用） -->
    <style>
        body { margin: 0; }
    </style>
    
    <!-- 内联脚本（通常放在 body 底部） -->
    <script>
        console.log('页面加载前执行');
    </script>
</head>

<body>
    <!-- 可见内容区域 -->
    
    <!-- 脚本通常放在这里，确保 DOM 已加载 -->
    <script src="script.js"></script>
</body>
</html>
```

### DOCTYPE 的深层含义
```html
<!DOCTYPE html>
```
这行声明**必须**位于文档第一行，它的作用是：
- 告诉浏览器使用哪个 HTML 规范
- 触发浏览器的**标准模式**（Standards Mode）
- 防止浏览器进入**怪异模式**（Quirks Mode），导致渲染不一致

**没有 DOCTYPE 的后果**：浏览器会使用自己的怪异模式渲染，不同浏览器表现不一致！

---

## 1.3 语义化标签详解

### 为什么需要语义化？
语义化标签让代码具有**意义**，而不仅仅是外观。

**好处**：
1. ✅ **SEO 优化** - 搜索引擎更好地理解内容
2. ✅ **可访问性** - 屏幕阅读器能正确解读
3. ✅ **代码可维护** - 人类更容易理解
4. ✅ **设备兼容** - 各种设备都能正确处理

### 常用语义化标签对比

#### ❌ 非语义化写法
```html
<div id="header">
    <div class="nav">...</div>
</div>
<div id="main">
    <div class="article">...</div>
</div>
<div id="footer">...</div>
```

#### ✅ 语义化写法
```html
<header>
    <nav>...</nav>
</header>
<main>
    <article>...</article>
</main>
<footer>...</footer>
```

### 语义化标签完整手册

##### 1. `<header>` - 页眉/介绍区域
```html
<!-- 页面级别的 header -->
<header>
    <h1>网站标题</h1>
    <nav>...</nav>
</header>

<!-- 文章级别的 header -->
<article>
    <header>
        <h2>文章标题</h2>
        <p>发布时间：<time datetime="2024-01-01">2024 年 1 月 1 日</time></p>
    </header>
</article>
```

##### 2. `<nav>` - 导航链接组
```html
<nav aria-label="主导航">
    <ul>
        <li><a href="/">首页</a></li>
        <li><a href="/about">关于</a></li>
    </ul>
</nav>
```
**注意**：不是所有链接组都需要用 nav，只有重要的导航才使用

##### 3. `<main>` - 主要内容区域
```html
<body>
    <header>...</header>
    
    <main>
        <!-- 页面的核心内容，每个页面只能有一个 main -->
        <article>...</article>
    </main>
    
    <footer>...</footer>
</body>
```

##### 4. `<article>` - 独立内容块
```html
<article>
    <h2>博客文章标题</h2>
    <p>文章内容...</p>
</article>

<!-- article 可以嵌套，比如评论 -->
<article>
    <h2>博客文章</h2>
    <article>
        <h3>用户评论 1</h3>
    </article>
    <article>
        <h3>用户评论 2</h3>
    </article>
</article>
```

##### 5. `<section>` - 内容分区
```html
<section>
    <h2>技能列表</h2>
    <ul>...</ul>
</section>

<section>
    <h2>项目经验</h2>
    <div>...</div>
</section>
```

**section vs article 的区别**：
- `article`：独立的内容，可以单独分发（如博客文章）
- `section`：相关内容的一组，不能独立存在

##### 6. `<aside>` - 侧边栏/附属内容
```html
<article>
    <h2>主文章</h2>
    <p>...</p>
    
    <aside>
        <h3>相关阅读</h3>
        <ul>...</ul>
    </aside>
</article>
```

##### 7. `<figure>` 和 `<figcaption>` - 媒体及其说明
```html
<figure>
    <img src="chart.png" alt="销售数据图表">
    <figcaption>图 1: 2024 年度销售数据统计</figcaption>
</figure>
```

##### 8. `<time>` - 时间标记
```html
<time datetime="2024-01-15">2024 年 1 月 15 日</time>
<time datetime="2024-01-15T10:30">1 月 15 日上午 10:30</time>
<time datetime="2024-01-15" pubdate>发布日期</time>
```

---

## 1.4 表单深度解析

### 表单的工作原理
```html
<form action="/submit" method="POST">
    <!-- 表单项 -->
</form>
```

**关键属性**：
- `action`：数据提交到的 URL
- `method`：HTTP 方法（GET 或 POST）
- `enctype`：编码类型（上传文件时需要）

### GET vs POST

| 特性 | GET | POST |
|------|-----|------|
| 数据位置 | URL 参数 | 请求体 |
| 可见性 | URL 中可见 | 不可见 |
| 长度限制 | 有（约 2000 字符） | 无限制 |
| 缓存 | 可缓存 | 不可缓存 |
| 用途 | 获取数据 | 提交敏感数据 |

### 输入类型完全手册

#### 文本输入
```html
<!-- 普通文本 -->
<input type="text" name="username" placeholder="请输入用户名">

<!-- 密码（自动隐藏字符） -->
<input type="password" name="password">

<!-- 邮箱（自动验证格式） -->
<input type="email" name="email">

<!-- 电话号码 -->
<input type="tel" name="phone">

<!-- URL -->
<input type="url" name="website">

<!-- 搜索框（移动端显示搜索键盘） -->
<input type="search" name="query">
```

#### 数字和范围
```html
<!-- 数字输入（带上下箭头） -->
<input type="number" name="age" min="0" max="150" step="1">

<!-- 滑块 -->
<input type="range" name="volume" min="0" max="100" value="50">
```

#### 日期和时间
```html
<!-- 日期选择器 -->
<input type="date" name="birthday">

<!-- 年月选择 -->
<input type="month" name="start-month">

<!-- 周选择 -->
<input type="week" name="project-week">

<!-- 时间选择 -->
<input type="time" name="meeting-time">

<!-- 日期 + 时间 -->
<input type="datetime-local" name="event-time">
```

#### 选择器
```html
<!-- 复选框（多选） -->
<input type="checkbox" name="hobby" value="coding" id="coding">
<label for="coding">编程</label>

<input type="checkbox" name="hobby" value="reading" id="reading">
<label for="reading">阅读</label>

<!-- 单选按钮（单选） -->
<input type="radio" name="gender" value="male" id="male">
<label for="male">男</label>

<input type="radio" name="gender" value="female" id="female">
<label for="female">女</label>

<!-- 下拉选择 -->
<select name="city">
    <option value="">请选择城市</option>
    <option value="beijing">北京</option>
    <option value="shanghai">上海</option>
    <option disabled value="other">其他</option>
</select>
```

#### 文件和隐藏
```html
<!-- 文件上传 -->
<input type="file" name="avatar" accept="image/*">

<!-- 隐藏字段（用户看不到但会提交） -->
<input type="hidden" name="userId" value="12345">
```

### 表单验证

#### HTML5 内置验证属性
```html
<input 
    type="text"
    required           <!-- 必填 -->
    minlength="3"      <!-- 最小长度 -->
    maxlength="20"     <!-- 最大长度 -->
    pattern="[A-Za-z]+" <!-- 正则表达式 -->
    placeholder="请输入">
```

#### 自定义验证消息
```html
<input 
    type="email" 
    required
    oninvalid="this.setCustomValidity('请输入有效的邮箱地址')"
    oninput="this.setCustomValidity('')">
```

#### 禁用验证
```html
<!-- 表单级别禁用 -->
<form novalidate>
    <!-- 所有验证失效 -->
</form>

<!-- 按钮级别禁用 -->
<button type="submit" formnovalidate>不验证直接提交</button>
```

### label 标签的重要性
```html
<!-- 方式 1：包裹式 -->
<label>
    用户名：
    <input type="text" name="username">
</label>

<!-- 方式 2：关联式（推荐） -->
<input type="radio" id="option1" name="choice" value="1">
<label for="option1">选项 1</label>
```

**为什么需要 label？**
- 点击 label 也会聚焦/选中对应的 input
- 对屏幕阅读器友好
- 增加可点击区域，提升用户体验

---

## 1.5 多媒体元素

### 图片 img
```html
<!-- 基础用法 -->
<img src="photo.jpg" alt="照片描述">

<!-- 响应式图片 -->
<img 
    src="small.jpg"
    srcset="medium.jpg 768w, large.jpg 1200w"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
    alt="响应式图片">

<!-- 懒加载 -->
<img src="image.jpg" loading="lazy" alt="延迟加载的图片">
```

### 音频 audio
```html
<audio controls autoplay loop muted>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    您的浏览器不支持 audio 元素
</audio>
```

### 视频 video
```html
<video 
    width="640" 
    height="480" 
    controls 
    poster="thumbnail.jpg"
    preload="metadata">
    
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    
    <!-- 字幕 -->
    <track 
        kind="subtitles" 
        src="subtitles.vtt" 
        srclang="zh" 
        label="中文">
    
    您的浏览器不支持 video 元素
</video>
```

---

## 1.6 表格的高级用法

### 完整表格结构
```html
<table>
    <caption>2024 年销售数据</caption>
    
    <thead>
        <tr>
            <th scope="col">月份</th>
            <th scope="col">销售额</th>
            <th scope="col">增长率</th>
        </tr>
    </thead>
    
    <tbody>
        <tr>
            <td>1 月</td>
            <td>¥100,000</td>
            <td>+5%</td>
        </tr>
        <tr>
            <td>2 月</td>
            <td>¥120,000</td>
            <td>+20%</td>
        </tr>
    </tbody>
    
    <tfoot>
        <tr>
            <td>总计</td>
            <td>¥220,000</td>
            <td>+12.5%</td>
        </tr>
    </tfoot>
</table>
```

### 合并单元格
```html
<table>
    <tr>
        <td colspan="2">横跨两列</td>
        <td>第三列</td>
    </tr>
    <tr>
        <td rowspan="2">纵跨两行</td>
        <td>第二列</td>
        <td>第三列</td>
    </tr>
    <tr>
        <td>第二列</td>
        <td>第三列</td>
    </tr>
</table>
```

---

## 1.7 SEO 优化要点

### Meta 标签完整配置
```html
<head>
    <!-- 基础信息 -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题 - 品牌名</title>
    
    <!-- SEO 三要素 -->
    <meta name="description" content="150-160 字符的页面描述">
    <meta name="keywords" content="关键词 1, 关键词 2, 关键词 3">
    <meta name="author" content="作者名">
    
    <!-- Open Graph (社交媒体分享) -->
    <meta property="og:title" content="分享标题">
    <meta property="og:description" content="分享描述">
    <meta property="og:image" content="分享图片 URL">
    <meta property="og:url" content="页面 URL">
    <meta property="og:type" content="website">
    
    <!-- Favicon -->
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
</head>
```

### 语义化层级结构
```html
<body>
    <header>
        <h1>网站主标题</h1>
        <nav>...</nav>
    </header>
    
    <main>
        <article>
            <h2>文章标题</h2>
            <section>
                <h3>小节标题</h3>
                <h4>小小节标题</h4>
            </section>
        </article>
    </main>
    
    <footer>
        <p>版权信息</p>
    </footer>
</body>
```

**标题层级规则**：
- 每个页面只有一个 `<h1>`
- 标题级别依次递减（h1 → h2 → h3）
- 不要跳过级别（如 h1 直接到 h3）

---

# CSS 核心原理

## 2.1 CSS 工作原理

### CSS 如何影响 HTML
```
HTML (结构) + CSS (表现) = 渲染引擎 → 可视化网页
```

**CSS 工作流程**：
1. 浏览器解析 HTML，生成 **DOM 树**（Document Object Model）
2. 浏览器解析 CSS，生成 **CSSOM 树**（CSS Object Model）
3. 合并 DOM 和 CSSOM，生成 **渲染树**（Render Tree）
4. 根据渲染树进行**布局**（Layout）
5. **绘制**（Painting）到屏幕上

### CSS 的三种引入方式

#### 1. 外部样式表（推荐）
```html
<link rel="stylesheet" href="style.css">
```
**优点**：结构与样式分离，可复用，易维护

#### 2. 内部样式表
```html
<style>
    body { color: red; }
</style>
```
**适用场景**：单页面应用的关键 CSS

#### 3. 内联样式（不推荐）
```html
<p style="color: blue;">文本</p>
```
**缺点**：难以维护，无法复用，优先级过高

---

## 2.2 选择器权重计算

### 优先级规则（从高到低）

```
!important > 内联样式 > ID 选择器 > 类/属性/伪类 > 元素/伪元素 > 继承 > 默认
```

### 权重计算方法
```css
/* 权重表示法：(a, b, c) */

*                    /* (0, 0, 0) - 通配符，权重为 0 */
li                   /* (0, 0, 1) - 1 个元素 */
li::before           /* (0, 0, 2) - 1 个元素 + 1 个伪元素 */
ul li                /* (0, 0, 2) - 2 个元素 */
.class               /* (0, 1, 0) - 1 个类 */
.class li            /* (0, 1, 1) - 1 个类 + 1 个元素 */
#id                  /* (1, 0, 0) - 1 个 ID */
#id .class           /* (1, 1, 0) - 1 个 ID + 1 个类 */
#id #id              /* (2, 0, 0) - 2 个 ID */

/* !important 特殊处理 */
.red { color: red !important; }  /* 无视优先级，直接生效 */
```

### 实际案例
```html
<style>
    /* 场景 1：元素 vs 类 */
    p { color: blue; }           /* (0, 0, 1) */
    .text { color: green; }      /* (0, 1, 0) ✓ 胜出 */
    
    /* 场景 2：ID vs 类 */
    #main { background: white; }    /* (1, 0, 0) ✓ 胜出 */
    .container { background: gray; } /* (0, 1, 0) */
    
    /* 场景 3：复合选择器 */
    div ul li.class { color: red; }  /* (0, 1, 3) ✓ 胜出 */
    #nav li { color: blue; }         /* (1, 0, 1) */
</style>

<p class="text">这段文字是什么颜色？</p>
```

### 避免优先级陷阱
```css
/* ❌ 错误做法：过度使用 !important */
.header { color: red !important; }
.nav { color: blue !important; }

/* ✅ 正确做法：合理组织 CSS 结构 */
.header .nav { color: blue; }
.header .logo { color: red; }
```

---

## 2.3 盒模型深度解析

### 盒模型的组成
```
┌─────────────────────────────────────┐
│              Margin                 │
│  ┌───────────────────────────────┐  │
│  │           Border              │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │        Padding          │  │  │
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │     Content       │  │  │  │
│  │  │  │   (width/height)  │  │  │  │
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 两种盒模型

#### 1. 标准盒模型（content-box）
```css
box-sizing: content-box; /* 默认值 */

.element {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}

/* 实际占用宽度 = 200 + 20×2 + 5×2 + 10×2 = 260px */
```

#### 2. IE 盒模型（border-box）⭐推荐
```css
box-sizing: border-box;

.element {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}

/* 实际占用宽度 = 200 + 10×2 = 220px */
/* 内容区域 = 200 - 20×2 - 5×2 = 150px */
```

### 全局设置技巧
```css
/* 最佳实践：全局使用 border-box */
*, *::before, *::after {
    box-sizing: border-box;
}
```

### 盒模型计算练习
```css
.container {
    width: 1000px;
    box-sizing: border-box;
}

.box {
    width: 50%;
    padding: 20px;
    border: 2px solid #000;
    margin: 10px;
}

/* 问题：.box 的实际宽度是多少？ */
/* 答案：500px（包含 padding 和 border）*/
/*      内容宽度 = 500 - 40 - 4 = 456px */
```

---

## 2.4 定位系统详解

### position 的五个值

#### 1. static（默认）
```css
.element {
    position: static; /* 正常文档流，top/left 无效 */
}
```

#### 2. relative（相对定位）⭐重要
```css
.element {
    position: relative;
    top: 20px;    /* 相对于原始位置向下 20px */
    left: 30px;   /* 相对于原始位置向右 30px */
}
```
**特点**：
- 不脱离文档流（原位置仍保留）
- 常作为 absolute 的定位参考

#### 3. absolute（绝对定位）⭐重要
```css
.parent {
    position: relative; /* 建立定位上下文 */
}

.child {
    position: absolute;
    top: 0;
    right: 0;
}
```
**特点**：
- 脱离文档流（不占空间）
- 相对于**最近的非 static 祖先元素**定位
- 如果没有，则相对于初始包含块（通常是视口）

#### 4. fixed（固定定位）
```css
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
```
**特点**：
- 脱离文档流
- 相对于**视口**定位
- 滚动时位置不变

#### 5. sticky（粘性定位）
```css
.sidebar {
    position: sticky;
    top: 0;
}
```
**特点**：
- relative 和 fixed 的结合
- 在跨越特定阈值前是 relative
- 超过阈值后变为 fixed

### 定位实战：居中方案

#### 方案 1：Flexbox（推荐）
```css
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

#### 方案 2：Absolute + Transform
```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

#### 方案 3：Grid（最简单）
```css
.parent {
    display: grid;
    place-items: center;
}
```

---

## 2.5 Flexbox 完全指南

### Flexbox 的核心概念
```
容器（Container） ←→ 项目（Items）
   ↓                    ↓
flex container      flex items
```

### 容器属性

#### 1. display: flex
```css
.container {
    display: flex; /* 或 inline-flex */
}
```

#### 2. flex-direction（主轴方向）
```css
.container {
    flex-direction: row;            /* 水平，从左到右（默认）*/
    flex-direction: row-reverse;    /* 水平，从右到左 */
    flex-direction: column;         /* 垂直，从上到下 */
    flex-direction: column-reverse; /* 垂直，从下到上 */
}
```

#### 3. justify-content（主轴对齐）
```css
.container {
    justify-content: flex-start;    /* 起点对齐（默认）*/
    justify-content: flex-end;      /* 终点对齐 */
    justify-content: center;        /* 居中 */
    justify-content: space-between; /* 两端对齐，中间等距 */
    justify-content: space-around;  /* 每个项目两侧间距相等 */
    justify-content: space-evenly;  /* 所有间距相等 */
}
```

#### 4. align-items（交叉轴对齐）
```css
.container {
    align-items: stretch;   /* 拉伸填满（默认）*/
    align-items: flex-start;/* 起点对齐 */
    align-items: flex-end;  /* 终点对齐 */
    align-items: center;    /* 居中 */
    align-items: baseline;  /* 基线对齐 */
}
```

#### 5. flex-wrap（换行）
```css
.container {
    flex-wrap: nowrap;      /* 不换行（默认）*/
    flex-wrap: wrap;        /* 换行，从上到下 */
    flex-wrap: wrap-reverse;/* 换行，从下到上 */
}
```

#### 6. gap（间距）⭐实用
```css
.container {
    gap: 20px;              /* 行间距 + 列间距 */
    row-gap: 10px;          /* 行间距 */
    column-gap: 20px;       /* 列间距 */
}
```

### 项目属性

#### 1. order（排序）
```css
.item-1 { order: 2; }  /* 数字越小越靠前 */
.item-2 { order: 1; }  /* 这个会排在最前面 */
.item-3 { order: 3; }
```

#### 2. flex（简写）⭐重要
```css
.item {
    flex: 1;  /* 等同于 flex: 1 1 0% */
}

/* 完整形式 */
.item {
    flex: <grow> <shrink> <basis>;
    /*     放大系数 缩小系数 基准大小 */
}

/* 常见用法 */
.item { flex: 1; }           /* 等分空间 */
.item { flex: 2; }           /* 占据 2 倍空间 */
.item { flex: 0 0 auto; }    /* 不伸缩，按内容大小 */
.item { flex: 0 0 200px; }   /* 固定 200px */
```

#### 3. align-self（单独对齐）
```css
.item {
    align-self: flex-start;  /* 覆盖容器的 align-items */
}
```

### Flexbox 实战案例

#### 案例 1：圣杯布局
```html
<div class="container">
    <header>头部</header>
    <div class="main">
        <aside class="left">左侧</aside>
        <article class="content">内容</article>
        <aside class="right">右侧</aside>
    </div>
    <footer>底部</footer>
</div>
```

```css
.main {
    display: flex;
}

.left {
    flex: 0 0 200px;
    order: -1;
}

.content {
    flex: 1;
}

.right {
    flex: 0 0 200px;
}
```

#### 案例 2：响应式卡片布局
```css
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px; /* 最小 300px，可伸缩 */
}
```

---

## 2.6 Grid 网格布局完全指南

### Grid vs Flexbox
- **Flexbox**：一维布局（行**或**列）
- **Grid**：二维布局（行**和**列同时控制）

### 容器属性

#### 1. display: grid
```css
.container {
    display: grid; /* 或 inline-grid */
}
```

#### 2. grid-template-columns/rows（定义行列）
```css
.container {
    /* 固定宽度 */
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 100px 100px;
    
    /* 百分比 */
    grid-template-columns: 25% 50% 25%;
    
    /* fr 单位（分数） */
    grid-template-columns: 1fr 2fr 1fr; /* 1:2:1 比例 */
    
    /* repeat() 重复 */
    grid-template-columns: repeat(3, 1fr); /* 3 列等宽 */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* 响应式 */
    
    /* minmax() 范围 */
    grid-template-columns: minmax(200px, 400px) 1fr;
}
```

#### 3. gap（间距）
```css
.container {
    gap: 20px;
    row-gap: 10px;
    column-gap: 20px;
}
```

#### 4. grid-auto-flow（自动排列）
```css
.container {
    grid-auto-flow: row;    /* 按行填充（默认）*/
    grid-auto-flow: column; /* 按列填充 */
    grid-auto-flow: dense;  /* 紧密堆积算法 */
}
```

#### 5. justify-items / align-items（单元格内对齐）
```css
.container {
    justify-items: center;  /* 水平居中单元格内容 */
    align-items: center;    /* 垂直居中单元格内容 */
}
```

### 项目属性

#### 1. grid-column/row（位置）
```css
.item {
    grid-column: 1 / 3;     /* 从第 1 条竖线到第 3 条 */
    grid-row: 1 / span 2;   /* 从第 1 条横线开始，跨越 2 行 */
    
    /* 简写 */
    grid-area: 1 / 1 / 3 / 3; /* row-start / col-start / row-end / col-end */
}
```

#### 2. justify-self / align-self（自身对齐）
```css
.item {
    justify-self: center;
    align-self: center;
}
```

### Grid 实战案例

#### 案例 1：经典网格式布局
```css
.layout {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
}

.header { grid-area: 1 / 1 / 2 / 4; }
.sidebar-left { grid-area: 2 / 1 / 3 / 2; }
.main { grid-area: 2 / 2 / 3 / 3; }
.sidebar-right { grid-area: 2 / 3 / 3 / 4; }
.footer { grid-area: 3 / 1 / 4 / 4; }
```

#### 案例 2：响应式图片墙
```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
}
```

---

## 2.7 过渡和动画

### transition（过渡）

#### 基础语法
```css
.button {
    background: blue;
    transition: property duration timing-function delay;
}

/* 具体示例 */
.button {
    transition: all 0.3s ease-in-out 0s;
}

.button:hover {
    background: red;
}
```

#### 过渡属性详解
```css
/* 单个属性 */
transition: width 0.5s ease;

/* 多个属性 */
transition: 
    width 0.3s ease,
    height 0.3s ease,
    transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);

/* 简写 */
transition: all 0.3s linear 0.1s;
```

#### 缓动函数
```css
transition-timing-function: linear;          /* 匀速 */
transition-timing-function: ease;            /* 慢 - 快 - 慢（默认）*/
transition-timing-function: ease-in;         /* 慢 - 快 */
transition-timing-function: ease-out;        /* 快 - 慢 */
transition-timing-function: ease-in-out;     /* 慢 - 快 - 慢 */
transition-timing-function: cubic-bezier(...); /* 自定义贝塞尔曲线 */
```

### animation（动画）

#### @keyframes 定义
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

/* 复杂关键帧 */
@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}
```

#### animation 属性
```css
.element {
    animation: 
        slideIn        /* 动画名称 */
        1s             /* 持续时间 */
        ease-in-out    /* 缓动函数 */
        0.5s           /* 延迟 */
        infinite       /* 循环次数 */
        alternate      /* 方向 */
        forwards;      /* 填充模式 */
}

/* 分解写法 */
animation-name: slideIn;
animation-duration: 1s;
animation-timing-function: ease;
animation-delay: 0.5s;
animation-iteration-count: infinite;
animation-direction: alternate;
animation-fill-mode: forwards;
animation-play-state: running; /* 或 paused */
```

#### 动画方向
```css
animation-direction: normal;       /* 正向播放（默认）*/
animation-direction: reverse;      /* 反向播放 */
animation-direction: alternate;    /* 交替播放（正 - 反 - 正...）*/
animation-direction: alternate-reverse; /* 反向交替 */
```

#### 填充模式
```css
animation-fill-mode: none;      /* 不应用样式（默认）*/
animation-fill-mode: forwards;  /* 保持最后一帧 */
animation-fill-mode: backwards; /* 保持第一帧（延迟期间）*/
animation-fill-mode: both;      /* forwards + backwards */
```

### 实战动画效果

#### 1. 淡入效果
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-in {
    animation: fadeIn 0.5s ease-in;
}
```

#### 2. 缩放脉冲
```css
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.pulse {
    animation: pulse 1s ease-in-out infinite;
}
```

#### 3. 加载旋转
```css
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.loader {
    animation: spin 1s linear infinite;
}
```

---

## 2.8 响应式设计

### Media Queries（媒体查询）

#### 基础语法
```css
@media media-feature {
    /* CSS 规则 */
}

/* 示例 */
@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}
```

#### 常用断点
```css
/* 手机优先策略（Mobile First） */

/* 小屏手机 */
@media (min-width: 375px) { }

/* 大屏手机 */
@media (min-width: 480px) { }

/* 平板 */
@media (min-width: 768px) { }

/* 桌面 */
@media (min-width: 1024px) { }

/* 大屏桌面 */
@media (min-width: 1200px) { }

/* 超大屏 */
@media (min-width: 1440px) { }
```

#### 组合条件
```css
/* and - 且 */
@media (min-width: 768px) and (max-width: 1024px) { }

/* , - 或 */
@media (max-width: 768px), (orientation: portrait) { }

/* not - 非 */
@media not print and (max-width: 768px) { }
```

#### 特性查询
```css
/* 横屏/竖屏 */
@media (orientation: landscape) { }
@media (orientation: portrait) { }

/* 分辨率 */
@media (min-resolution: 2dppx) { } /* 视网膜屏 */

/* 颜色模式 */
@media (prefers-color-scheme: dark) {
    /* 暗色模式下的样式 */
}

/* 减少动画 */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

### 响应式图片
```css
/* 流体图片 */
img {
    max-width: 100%;
    height: auto;
}

/* 响应式背景 */
.background {
    background-size: cover;
    background-position: center;
}
```

### 响应式排版
```css
/* 使用 vw 单位 */
h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
    /* 最小 1.5rem，理想 5vw，最大 3rem */
}

/* 使用 calc() */
html {
    font-size: calc(14px + 0.5vw);
}
```

---

# JavaScript 编程基础

## 3.1 JavaScript 概述

### JavaScript 是什么？
JavaScript 是一种**动态类型**的脚本语言，用于：
- 操作 DOM，实现交互效果
- 发送网络请求，获取数据
- 存储本地数据
- 控制浏览器行为
- 服务端开发（Node.js）
- 移动应用开发（React Native）
- 桌面应用开发（Electron）

### JavaScript 的历史
```
1995  - Netscape 公司 Brendan Eich 发明 JavaScript
1997  - ECMA International 标准化（ECMAScript 1）
2009  - ES5 发布（重大更新）
2015  - ES6/ES2015 发布（里程碑式的更新）
2016+ - 每年发布新版本（ES2016, ES2017...）
```

---

## 3.2 变量和数据类型

### 变量的声明方式

#### var（已过时，了解即可）
```javascript
var name = 'John';
var name = 'Jane'; // 可以重复声明
console.log(name); // Jane
```
**问题**：
- 可以重复声明
- 函数作用域（不是块级作用域）
- 存在变量提升

#### let（推荐）
```javascript
let age = 25;
// let age = 30; // ❌ 报错：重复声明
age = 30; // ✅ 可以重新赋值

{
    let inner = 'inside';
}
// console.log(inner); // ❌ 报错：inner 未定义
```

#### const（推荐用于常量）
```javascript
const PI = 3.14159;
// PI = 3; // ❌ 报错：常量不能重新赋值

const user = { name: 'John' };
user.name = 'Jane'; // ✅ 可以修改对象属性
// user = {}; // ❌ 不能重新赋值
```

### 数据类型

#### 原始类型（Primitive Types）
```javascript
// 1. String（字符串）
const str = 'Hello';
const template = `模板字符串 ${str}`;

// 2. Number（数字）
const int = 42;
const float = 3.14;
const nan = NaN; // Not a Number
const infinity = Infinity;

// 3. Boolean（布尔）
const isTrue = true;
const isFalse = false;

// 4. Undefined（未定义）
let undefinedVar;
console.log(undefinedVar); // undefined

// 5. Null（空值）
const nullVar = null;

// 6. Symbol（符号，ES6）
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false

// 7. BigInt（大整数，ES2020）
const bigNum = 1234567890123456789012345678901234567890n;
```

#### 引用类型（Reference Types）
```javascript
// 1. Object（对象）
const obj = {
    name: 'John',
    age: 25,
    sayHi: function() {
        console.log('Hi');
    }
};

// 2. Array（数组）
const arr = [1, 2, 3, 4, 5];

// 3. Function（函数）
const func = function() {
    console.log('Hello');
};

// 4. Date（日期）
const now = new Date();

// 5. RegExp（正则）
const regex = /abc/;
```

### 类型检测
```javascript
typeof 'hello'           // "string"
typeof 42                // "number"
typeof true              // "boolean"
typeof undefined         // "undefined"
typeof null              // "object" (历史遗留 bug)
typeof {}                // "object"
typeof []                // "object"
typeof function(){}      // "function"

// 更好的检测方法
Array.isArray([])        // true
Object.prototype.toString.call([]) // "[object Array]"
```

---

## 3.3 运算符

### 算术运算符
```javascript
let a = 10;
let b = 3;

a + b   // 13 (加)
a - b   // 7  (减)
a * b   // 30 (乘)
a / b   // 3.333... (除)
a % b   // 1  (取余)
a ** b  // 1000 (幂运算)
a++     // 11 (自增)
a--     // 9  (自减)
```

### 比较运算符
```javascript
5 == '5'    // true (相等，会类型转换)
5 === '5'   // false (严格相等，不转换类型) ⭐推荐
5 != '5'    // false (不相等)
5 !== '5'   // true (严格不相等) ⭐推荐
5 > 3       // true
5 < 3       // false
5 >= 5      // true
5 <= 4      // false
```

### 逻辑运算符
```javascript
// && (与)
true && true    // true
true && false   // false

// || (或)
true || false   // true
false || false  // false

// ! (非)
!true           // false
!false          // true

// ?? (空值合并，ES2020)
null ?? 'default'  // 'default'
undefined ?? 'default' // 'default'
0 ?? 'default'     // 0

// ?. (可选链，ES2020)
const user = { profile: { name: 'John' } };
user?.profile?.name  // 'John'
user?.address?.city  // undefined (不会报错)
```

### 赋值运算符
```javascript
let x = 10;
x += 5;  // x = x + 5 = 15
x -= 3;  // x = x - 3 = 12
x *= 2;  // x = x * 2 = 24
x /= 4;  // x = x / 4 = 6
x %= 3;  // x = x % 3 = 0
x **= 2; // x = x ** 2 = 36
```

---

## 3.4 字符串操作

### 字符串方法
```javascript
const str = 'Hello, World!';

// 长度
str.length  // 13

// 查找
str.indexOf('World')     // 7
str.includes('Hello')    // true
str.startsWith('Hello')  // true
str.endsWith('!')        // true

// 提取
str.slice(0, 5)    // 'Hello'
str.substring(0, 5) // 'Hello'
str.charAt(0)      // 'H'
str.charCodeAt(0)  // 72 (ASCII 码)

// 转换大小写
str.toLowerCase()  // 'hello, world!'
str.toUpperCase()  // 'HELLO, WORLD!'

// 替换
str.replace('World', 'JavaScript')  // 'Hello, JavaScript!'
str.replaceAll('l', 'L')            // 'HeLLo, WorLd!'

// 分割
str.split(', ')  // ['Hello', 'World!']

// 去除空白
'  trim  '.trim()     // 'trim'
'  trim  '.trimStart() // 'trim  '
'  trim  '.trimEnd()   // '  trim'

// 重复
'Ha'.repeat(3)  // 'HaHaHa'

// 填充
'5'.padStart(3, '0')  // '005'
'5'.padEnd(3, '0')    // '500'
```

### 模板字符串
```javascript
const name = 'John';
const age = 25;

// 传统方式
const msg = 'My name is ' + name + ' and I am ' + age;

// 模板字符串（推荐）
const msg2 = `My name is ${name} and I am ${age}`;

// 多行字符串
const multiLine = `
    第一行
    第二行
    第三行
`;
```

---

## 3.5 数组操作

### 数组创建
```javascript
const arr1 = [1, 2, 3];
const arr2 = new Array(5); // 长度为 5 的空数组
const arr3 = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
```

### 增删改查

#### 尾部操作
```javascript
const arr = [1, 2, 3];
arr.push(4);      // [1, 2, 3, 4] (尾添加)
arr.pop();        // [1, 2, 3] (尾删除)
```

#### 头部操作
```javascript
arr.unshift(0);   // [0, 1, 2, 3] (头添加)
arr.shift();      // [1, 2, 3] (头删除)
```

#### 中间操作
```javascript
arr.splice(2, 0, 'a');  // [1, 2, 'a', 3] (插入)
arr.splice(2, 1);       // [1, 2, 3] (删除)
arr.splice(1, 1, 'x');  // [1, 'x', 3] (替换)
```

### 数组方法（不修改原数组）

#### 转换方法
```javascript
const arr = [1, 2, 3];

arr.join('-')     // '1-2-3'
arr.concat([4, 5]) // [1, 2, 3, 4, 5]
arr.slice(1, 3)   // [2, 3]
arr.reverse()     // [3, 2, 1]
arr.sort()        // 排序（默认按字符串）
arr.sort((a, b) => a - b) // 数字升序
```

#### 查找方法
```javascript
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];

arr.indexOf(2)           // 1
arr.includes(2)          // true
arr.find(x => x > 2)     // 3 (找到第一个符合条件的)
arr.findIndex(x => x > 2) // 2 (索引)
arr.filter(x => x > 1)   // [2, 3] (过滤)
```

#### 遍历方法
```javascript
const arr = [1, 2, 3];

// forEach（无返回值）
arr.forEach((item, index) => {
    console.log(item, index);
});

// map（映射，返回新数组）
const doubled = arr.map(x => x * 2); // [2, 4, 6]

// some（是否有符合条件的）
arr.some(x => x > 2);  // true

// every（是否都符合条件）
arr.every(x => x > 0); // true

// reduce（归并）
const sum = arr.reduce((acc, cur) => acc + cur, 0); // 6
```

#### 扁平化
```javascript
const nested = [1, [2, 3], [4, [5, 6]]];

nested.flat()      // [1, 2, 3, 4, [5, 6]] (扁平一层)
nested.flat(2)     // [1, 2, 3, 4, 5, 6] (扁平两层)
nested.flatMap(x => [x, x * 2]) // [1, 2, 2, 4, 3, 6]
```

---

## 3.6 对象详解

### 对象创建
```javascript
// 字面量（推荐）
const user = {
    name: 'John',
    age: 25,
    sayHi() {
        console.log('Hi');
    }
};

// 构造函数
const user2 = new Object();
user2.name = 'Jane';

// Object.create
const user3 = Object.create(null); // 创建空对象
```

### 访问属性
```javascript
const user = { name: 'John', age: 25 };

// 点表示法
user.name;  // 'John'

// 方括号表示法
user['age']; // 25
const key = 'name';
user[key];  // 'John'

// 可选链（ES2020）
user.address?.city; // undefined (不报错)
```

### 对象方法
```javascript
const user = { name: 'John', age: 25 };

Object.keys(user)    // ['name', 'age'] (键)
Object.values(user)  // ['John', 25] (值)
Object.entries(user) // [['name', 'John'], ['age', 25]]

// 合并
const extended = Object.assign({}, user, { city: 'NYC' });
const extended2 = { ...user, city: 'NYC' }; // 展开运算符（推荐）

// 冻结
Object.freeze(user); // 不能修改
```

---

## 3.7 函数完全指南

### 函数声明
```javascript
// 函数声明（会提升）
function add(a, b) {
    return a + b;
}

// 函数表达式（不会提升）
const add2 = function(a, b) {
    return a + b;
};

// 箭头函数（ES6，推荐）⭐
const add3 = (a, b) => a + b;

// 多行箭头函数
const add4 = (a, b) => {
    const result = a + b;
    return result;
};

// 单个参数可省略括号
const double = x => x * 2;

// 无参数需要空括号
const greet = () => 'Hello';
```

### 参数默认值
```javascript
function greet(name = 'Guest') {
    return `Hello, ${name}`;
}

greet();        // 'Hello, Guest'
greet('John');  // 'Hello, John'
```

### 剩余参数
```javascript
function sum(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

sum(1, 2, 3);  // 6
sum(1, 2);     // 3
```

### 展开运算符
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }
```

### 回调函数
```javascript
function process(data, callback) {
    const result = data * 2;
    callback(result);
}

process(5, function(res) {
    console.log(res); // 10
});
```

### 立即执行函数（IIFE）
```javascript
(function() {
    console.log('立即执行');
})();

(() => {
    console.log('箭头函数 IIFE');
})();
```

---

## 3.8 作用域和闭包

### 作用域链
```javascript
let globalVar = 'global';

function outer() {
    let outerVar = 'outer';
    
    function inner() {
        let innerVar = 'inner';
        console.log(globalVar); // ✅ 可以访问
        console.log(outerVar);  // ✅ 可以访问
        console.log(innerVar);  // ✅ 可以访问
    }
    
    inner();
    // console.log(innerVar); // ❌ 报错
}

outer();
```

### 块级作用域
```javascript
{
    let blockLet = 'inside';
    const blockConst = 'inside';
    var blockVar = 'inside';
}

console.log(blockLet);  // ❌ 报错
console.log(blockConst); // ❌ 报错
console.log(blockVar);  // ✅ 'inside' (var 是函数作用域)
```

### 闭包（Closure）⭐难点
```javascript
function createCounter() {
    let count = 0; // 私有变量
    
    return {
        increment() {
            count++;
            return count;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.getCount()); // 2
// console.log(counter.count); // ❌ undefined (私有)
```

**闭包的本质**：函数记住了它被创建时的环境，可以访问外部函数的变量。

### 闭包实战应用
```javascript
// 1. 数据封装
function createUser(name) {
    let privateData = { name };
    
    return {
        getName() { return privateData.name; },
        setName(newName) { privateData.name = newName; }
    };
}

// 2. 函数工厂
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
double(5); // 10

// 3. 防抖节流
function debounce(func, delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, arguments), delay);
    };
}
```

---

## 3.9 this 关键字

### this 的指向规则

#### 1. 普通函数调用
```javascript
function showThis() {
    console.log(this);
}

showThis(); // window (浏览器) 或 global (Node.js)
```

#### 2. 对象方法调用
```javascript
const obj = {
    name: 'John',
    sayName() {
        console.log(this.name);
    }
};

obj.sayName(); // 'John' (this 指向 obj)
```

#### 3. 构造函数调用
```javascript
function Person(name) {
    this.name = name;
    this.sayName = function() {
        console.log(this.name);
    };
}

const person = new Person('John');
person.sayName(); // 'John'
```

#### 4. 箭头函数
```javascript
const obj = {
    name: 'John',
    regularFunc: function() {
        console.log(this.name); // 'John'
    },
    arrowFunc: () => {
        console.log(this.name); // undefined (this 继承自外层)
    }
};
```

#### 5. call/apply/bind
```javascript
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = { name: 'John' };

greet.call(person, 'Hello');     // 'Hello, John'
greet.apply(person, ['Hello']);  // 'Hello, John'

const boundGreet = greet.bind(person);
boundGreet('Hi'); // 'Hi, John'
```

---

# DOM 编程艺术

## 4.1 DOM 基础

### 什么是 DOM？
**Document Object Model**（文档对象模型）是将 HTML 文档转换为树形结构，JavaScript 可以通过这个结构操作页面内容。

```
document
└── html
    ├── head
    │   ├── meta
    │   └── title
    └── body
        ├── header
        ├── main
        └── footer
```

### 获取元素的方法

#### 单一元素
```javascript
// 通过 ID（最快）
const element = document.getElementById('myId');

// 通过 CSS 选择器（推荐）
const element = document.querySelector('.myClass');
const element = document.querySelector('#myId');
const element = document.querySelector('div.container');
```

#### 多个元素
```javascript
// 通过类名
const elements = document.getElementsByClassName('myClass');

// 通过标签名
const elements = document.getElementsByTagName('div');

// 通过 CSS 选择器（推荐）
const elements = document.querySelectorAll('.myClass');

// NodeList vs Array
const nodeList = document.querySelectorAll('.item');
nodeList.forEach(item => console.log(item)); // ✅ 可以遍历
// nodeList.map() // ❌ 不能使用数组方法

// 转换为数组
const array = Array.from(nodeList);
const array2 = [...nodeList];
```

---

## 4.2 操作元素内容

### textContent vs innerHTML
```javascript
const element = document.querySelector('#app');

// textContent（纯文本，安全）
element.textContent = '<script>alert("XSS")</script>';
// 显示为文本，不会执行

// innerHTML（HTML 字符串，危险）
element.innerHTML = '<strong>Bold</strong>';
// 会解析 HTML

// 读取
const text = element.textContent;
const html = element.innerHTML;
```

### 操作属性
```javascript
const img = document.querySelector('img');

// 获取属性
img.getAttribute('src');
img.src; // 简写方式

// 设置属性
img.setAttribute('alt', '图片描述');
img.src = 'new-image.jpg';

// 删除属性
img.removeAttribute('alt');

// 检查属性
img.hasAttribute('src'); // true
```

### 操作类名
```javascript
const element = document.querySelector('.box');

// 传统方式
element.className = 'box active';
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active'); // 切换
element.classList.contains('active'); // 检查

// 多个类
element.classList.add('active', 'highlighted');
```

### 操作样式
```javascript
const element = document.querySelector('.box');

// 直接设置（不推荐）
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.width = '100px';

// 读取计算后的样式
const computedStyle = getComputedStyle(element);
console.log(computedStyle.color);

// 批量设置（推荐）
element.style.cssText = `
    color: red;
    background: blue;
    width: 100px;
`;
```

---

## 4.3 创建和删除元素

### 创建元素
```javascript
// 创建元素
const div = document.createElement('div');
div.className = 'card';
div.textContent = '内容';

// 添加到 DOM
const container = document.querySelector('.container');
container.appendChild(div); // 添加到末尾
container.insertBefore(div, container.firstChild); // 插入到开头
```

### 删除元素
```javascript
const element = document.querySelector('.to-remove');

// 方式 1
element.remove();

// 方式 2（旧方法）
element.parentNode.removeChild(element);
```

### 克隆元素
```javascript
const original = document.querySelector('.item');
const clone = original.cloneNode(true); // true = 深度克隆（包含子元素）
clone.id = 'new-id'; // 记得修改 ID
```

---

## 4.4 节点遍历

```javascript
const parent = document.querySelector('.parent');

// 子节点
parent.children;        // HTMLCollection (元素节点)
parent.childNodes;      // NodeList (所有节点，包括文本)
parent.firstElementChild;
parent.lastElementChild;

// 兄弟节点
element.nextElementSibling;
element.previousElementSibling;
element.parentElement;

// 遍历所有子元素
Array.from(parent.children).forEach(child => {
    console.log(child);
});
```

---

# 事件处理机制

## 5.1 事件基础

### 什么是事件？
事件是用户或浏览器执行的操作，如点击、按键、页面加载等。

### 事件监听器

#### 添加事件监听器（推荐）
```javascript
const button = document.querySelector('#myBtn');

button.addEventListener('click', function(event) {
    console.log('按钮被点击了!', event);
});

// 箭头函数
button.addEventListener('click', (e) => {
    console.log(e.target); // 触发事件的元素
});
```

#### 移除事件监听器
```javascript
function handleClick(e) {
    console.log('clicked');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
```

#### 一次性事件
```javascript
button.addEventListener('click', handleClick, { once: true });
// 只触发一次后自动移除
```

### 事件对象
```javascript
element.addEventListener('click', function(event) {
    event.target;      // 触发事件的元素
    event.currentTarget; // 事件监听器所在的元素
    event.type;        // 事件类型 'click'
    event.clientX;     // 鼠标 X 坐标
    event.clientY;     // 鼠标 Y 坐标
    event.preventDefault(); // 阻止默认行为
    event.stopPropagation(); // 阻止冒泡
});
```

---

## 5.2 事件传播

### 三个阶段
```
1. 捕获阶段（Capturing） - 从 window 向下到目标
2. 目标阶段（Target） - 到达目标元素
3. 冒泡阶段（Bubbling） - 从目标向上到 window
```

### 阻止冒泡
```javascript
child.addEventListener('click', function(e) {
    e.stopPropagation(); // 阻止事件继续传播
});
```

### 事件委托（Event Delegation）⭐重要
```html
<ul id="list">
    <li data-id="1">项目 1</li>
    <li data-id="2">项目 2</li>
    <li data-id="3">项目 3</li>
</ul>
```

```javascript
// ❌ 低效：给每个 li 添加监听器
document.querySelectorAll('#list li').forEach(li => {
    li.addEventListener('click', handleClick);
});

// ✅ 高效：只在父元素添加一个监听器
document.getElementById('list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        console.log('项目 ID:', e.target.dataset.id);
    }
});
```

**事件委托的优势**：
- 内存效率更高（一个监听器 vs 多个）
- 动态添加的元素也能响应事件
- 代码更简洁

---

## 5.3 常见事件类型

### 鼠标事件
```javascript
element.addEventListener('click', handler);      // 点击
element.addEventListener('dblclick', handler);   // 双击
element.addEventListener('mousedown', handler);  // 按下
element.addEventListener('mouseup', handler);    // 释放
element.addEventListener('mousemove', handler);  // 移动
element.addEventListener('mouseenter', handler); // 进入（不冒泡）
element.addEventListener('mouseleave', handler); // 离开（不冒泡）
element.addEventListener('mouseover', handler);  // 进入（冒泡）
element.addEventListener('mouseout', handler);   // 离开（冒泡）
element.addEventListener('wheel', handler);      // 滚轮
```

### 键盘事件
```javascript
document.addEventListener('keydown', function(e) {
    console.log(e.key);     // 按键名称
    console.log(e.code);    // 物理按键代码
    console.log(e.ctrlKey); // 是否按下 Ctrl
    console.log(e.shiftKey);// 是否按下 Shift
    console.log(e.altKey);  // 是否按下 Alt
});

document.addEventListener('keyup', handler);
```

### 表单事件
```javascript
form.addEventListener('submit', function(e) {
    e.preventDefault(); // 阻止表单提交
    console.log(this.username.value);
});

input.addEventListener('focus', handler);  // 获得焦点
input.addEventListener('blur', handler);   // 失去焦点
input.addEventListener('change', handler); // 值改变
input.addEventListener('input', handler);  // 输入中（实时）
```

### 窗口事件
```javascript
window.addEventListener('load', handler);     // 页面加载完成
window.addEventListener('DOMContentLoaded', handler); // DOM 加载完成
window.addEventListener('resize', handler);   // 窗口大小改变
window.addEventListener('scroll', handler);   // 滚动
window.addEventListener('beforeunload', handler); // 关闭前
```

---

## 5.4 防抖和节流

### 防抖（Debounce）
```javascript
// 连续触发时，只在最后一次执行
function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// 使用场景：搜索框实时搜索
searchInput.addEventListener('input', debounce(function(e) {
    console.log('搜索:', e.target.value);
}, 300));
```

### 节流（Throttle）
```javascript
// 一定时间内只执行一次
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 使用场景：滚动加载更多
window.addEventListener('scroll', throttle(function() {
    console.log('滚动中...');
}, 100));
```

---

# 异步编程进阶

## 6.1 同步 vs 异步

### 同步代码
```javascript
console.log('1');
console.log('2');
console.log('3');
// 输出：1, 2, 3（按顺序执行）
```

### 异步代码
```javascript
console.log('1');
setTimeout(() => {
    console.log('2');
}, 1000);
console.log('3');
// 输出：1, 3, 2（1 秒后输出 2）
```

---

## 6.2 Callback（回调函数）

### 基础用法
```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'John' };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log(data);
});
```

### 回调地狱（Callback Hell）❌
```javascript
getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            getMoreData(c, function(d) {
                console.log(d);
            });
        });
    });
});
```

---

## 6.3 Promise

### Promise 基础
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('成功!');
        } else {
            reject('失败!');
        }
    }, 1000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('总是执行'));
```

### Promise 链式调用
```javascript
fetchUser()
    .then(user => fetchPosts(user.id))
    .then(posts => fetchComments(posts[0].id))
    .then(comments => console.log(comments))
    .catch(error => console.error(error));
```

### Promise 静态方法
```javascript
// Promise.all（全部完成）
Promise.all([p1, p2, p3]).then(results => {
    console.log(results); // [result1, result2, result3]
});

// Promise.race（竞赛，谁快要谁的结果）
Promise.race([p1, p2]).then(result => {
    console.log(result); // 第一个完成的
});

// Promise.allSettled（不管成功失败都等待）
Promise.allSettled([p1, p2]).then(results => {
    results.forEach(r => {
        console.log(r.status); // 'fulfilled' or 'rejected'
    });
});

// Promise.resolve/reject
Promise.resolve('成功');
Promise.reject('失败');
```

---

## 6.4 Async/Await（ES2017）⭐推荐

### 基础语法
```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('错误:', error);
    }
}

// 箭头函数
const fetchData2 = async () => {
    const data = await getData();
    return data;
};
```

### 并行执行
```javascript
async function fetchAll() {
    // 串行（慢）
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    
    // 并行（快）⭐推荐
    const [user, posts] = await Promise.all([
        fetchUser(),
        fetchPosts()
    ]);
}
```

---

## 6.5 Fetch API

### 基础用法
```javascript
// GET 请求
fetch('/api/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// async/await 方式
async function getUsers() {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data;
}
```

### POST 请求
```javascript
async function createUser(userData) {
    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const data = await response.json();
    return data;
}
```

### 完整配置
```javascript
fetch('/api/users', {
    method: 'POST', // GET, POST, PUT, DELETE
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    },
    credentials: 'include', // 携带 cookie
    body: JSON.stringify({ name: 'John' })
});
```

---

# 实战项目指南

## 7.1 项目 1：待办事项应用

### 功能需求
- ✅ 添加任务
- ✅ 标记完成
- ✅ 删除任务
- ✅ 本地存储
- ✅ 过滤器（全部/未完成/已完成）

### 核心代码结构
```javascript
class TodoApp {
    constructor() {
        this.todos = this.loadTodos();
        this.init();
    }
    
    loadTodos() {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }
    
    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    
    addTodo(text) {
        const todo = {
            id: Date.now(),
            text,
            completed: false
        };
        this.todos.push(todo);
        this.saveTodos();
        this.render();
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        todo.completed = !todo.completed;
        this.saveTodos();
        this.render();
    }
    
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveTodos();
        this.render();
    }
    
    render() {
        // 渲染逻辑
    }
}
```

---

## 7.2 项目 2：天气预报应用

### 技术要点
- 调用第三方 API
- 地理位置定位
- 动态更新 UI
- 错误处理

### API 调用示例
```javascript
async function getWeather(city) {
    const apiKey = 'your-api-key';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('城市不存在');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
```

---

## 7.3 项目 3：图片画廊

### 技术要点
- 图片懒加载
- 灯箱效果
- 无限滚动
- 响应式布局

### 懒加载实现
```javascript
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));
```

---

## 7.4 调试技巧

### Console 方法
```javascript
console.log('普通日志');
console.info('信息');
console.warn('警告');
console.error('错误');

console.table([{ name: 'John', age: 25 }]);
console.time('计时');
console.timeEnd('计时');

console.group('分组');
console.log('内容');
console.groupEnd();
```

### Debugger
```javascript
function debugFunction() {
    debugger; // 断点
    // 代码执行到这里会暂停
}
```

---

## 7.5 性能优化

### 1. 减少 DOM 操作
```javascript
// ❌ 低效
for (let i = 0; i < 100; i++) {
    container.appendChild(createElement());
}

// ✅ 高效
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    fragment.appendChild(createElement());
}
container.appendChild(fragment);
```

### 2. 事件委托
```javascript
// 前面已讲解
```

### 3. 防抖节流
```javascript
// 前面已讲解
```

### 4. 图片优化
```html
<!-- 懒加载 -->
<img loading="lazy" src="image.jpg">

<!-- WebP 格式 -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="描述">
</picture>
```

---

## 7.6 最佳实践

### 代码组织
```javascript
// ✅ 使用模块化
// modules/todo.js
export class TodoApp { }

// main.js
import { TodoApp } from './modules/todo.js';
```

### 命名规范
```javascript
// 变量：驼峰命名
let userName = 'John';

// 常量：大写
const MAX_COUNT = 100;

// 函数：动词开头
function getUser() { }

// 类：大驼峰
class UserService { }
```

### 错误处理
```javascript
try {
    // 可能出错的代码
} catch (error) {
    console.error(error);
    // 恢复或提示用户
} finally {
    // 清理工作
}
```

---

# 总结与下一步

## 你已经学会了什么？

✅ HTML 语义化标签和表单
✅ CSS 盒模型、Flexbox、Grid
✅ JavaScript 基础和 ES6+
✅ DOM 操作和事件处理
✅ 异步编程和 Fetch API

## 下一步学什么？

### 1. TypeScript
- 类型系统
- 接口和泛型
- 装饰器

### 2. 前端框架
- Vue.js / React
- 组件化开发
- 状态管理（Vuex/Redux）

### 3. 构建工具
- Node.js 和 npm
- Vite / Webpack
- Babel

### 4. 工程化
- Git 版本控制
- 单元测试
- CI/CD

## 持续学习资源

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://zh.javascript.info/)
- [Vue.js 官方文档](https://cn.vuejs.org/)
- [React 官方文档](https://zh-hans.react.dev/)

---

**记住**：编程是一门实践的艺术。看懂不等于会写，一定要多动手！

祝你学习愉快！🚀
