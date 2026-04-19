/**
 * ========================================
 * JavaScript 交互脚本
 * ========================================
 * JavaScript 是网页的编程语言，让网页"动"起来
 * 
 * 主要功能：
 * 1. DOM 操作 - 修改页面内容
 * 2. 事件处理 - 响应用户操作
 * 3. 动态效果 - 动画和交互
 * 4. 本地存储 - 保存用户偏好
 */

// ========================================
// 等待页面加载完成
// ========================================
// DOMContentLoaded 事件：当 HTML 文档完全加载并解析完成后触发
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 页面已加载完成！JavaScript 准备就绪！');
    
    // 调用初始化函数
    initPage();
});

/**
 * 初始化页面功能
 */
function initPage() {
    try {
        // 设置用户名
        setUserName();
        
        // 绑定按钮点击事件
        bindGreetButton();
        
        // 启动数字动画
        animateStats();
        
        // 更新时间显示
        updateTime();
        setInterval(updateTime, 1000); // 每秒更新一次
        
        // 绑定表单提交事件
        bindContactForm();
        
        // 初始化深色模式
        initDarkMode();
        
        console.log('✅ 所有功能初始化成功');
    } catch (error) {
        console.error('❌ 初始化失败:', error);
    }
}

/**
 * 功能 1: 动态设置用户名
 * 使用 DOM 操作修改页面内容
 */
function setUserName() {
    try {
        // getElementById: 通过 ID 获取页面元素
        const nameElement = document.getElementById('name-text');
        
        if (!nameElement) {
            console.warn('⚠️ 未找到 name-text 元素');
            return;
        }
        
        // 从本地存储读取用户名，如果没有则使用默认值
        const savedName = localStorage.getItem('userName');
        const yourName = savedName || '前端学习者';
        
        // textContent: 设置元素的文本内容
        nameElement.textContent = yourName;
        
        console.log(`👤 用户名设置为: ${yourName}`);
    } catch (error) {
        console.error('设置用户名失败:', error);
    }
}

/**
 * 功能 2: 问候按钮交互
 * 学习事件监听器的使用
 */
function bindGreetButton() {
    try {
        // 获取按钮元素
        const button = document.getElementById('greet-btn');
        
        if (!button) {
            console.warn('⚠️ 未找到 greet-btn 元素');
            return;
        }
        
        // addEventListener: 添加事件监听器
        // 参数：事件类型，回调函数
        button.addEventListener('click', function() {
            // alert: 弹出警告框
            alert('👋 你好！欢迎来到前端的世界！\n\n你已经迈出了第一步，继续加油！💪');
            
            // 改变按钮文字
            button.textContent = '已收到问候 ✨';
            
            // 添加一个动画效果
            button.style.transform = 'scale(1.1)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 300);
        });
        
        console.log('✅ 问候按钮绑定成功');
    } catch (error) {
        console.error('绑定问候按钮失败:', error);
    }
}

/**
 * 功能 3: 统计数据动画
 * 学习数字递增效果
 */
function animateStats() {
    try {
        // 模拟数据
        const targetDays = 30;      // 目标学习天数
        const targetLines = 500;    // 目标代码行数
        const targetProjects = 3;   // 目标完成项目数
        
        // 动画持续时间（毫秒）
        const duration = 2000;
        const frameRate = 60; // 每秒 60 帧
        const totalFrames = duration / 1000 * frameRate;
        
        // 每帧的增量
        const incrementDays = targetDays / totalFrames;
        const incrementLines = targetLines / totalFrames;
        const incrementProjects = targetProjects / totalFrames;
        
        let currentDays = 0;
        let currentLines = 0;
        let currentProjects = 0;
        let frame = 0;
        
        // 使用 setInterval 创建动画循环
        const timer = setInterval(() => {
            frame++;
            
            // 更新数值
            currentDays += incrementDays;
            currentLines += incrementLines;
            currentProjects += incrementProjects;
            
            // 获取元素并更新显示
            const daysElement = document.getElementById('learn-days');
            const linesElement = document.getElementById('code-lines');
            const projectsElement = document.getElementById('projects-done');
            
            if (daysElement) daysElement.textContent = Math.floor(currentDays);
            if (linesElement) linesElement.textContent = Math.floor(currentLines);
            if (projectsElement) projectsElement.textContent = Math.floor(currentProjects);
            
            // 达到目标后停止动画
            if (frame >= totalFrames) {
                clearInterval(timer);
                // 确保最终值准确
                if (daysElement) daysElement.textContent = targetDays;
                if (linesElement) linesElement.textContent = targetLines;
                if (projectsElement) projectsElement.textContent = targetProjects;
            }
        }, 1000 / frameRate);
        
        console.log('✅ 统计数据动画启动');
    } catch (error) {
        console.error('启动统计数据动画失败:', error);
    }
}

/**
 * 功能 4: 实时时间显示
 * 学习 Date 对象的使用
 */
function updateTime() {
    try {
        const timeElement = document.getElementById('current-time');
        
        if (!timeElement) {
            return;
        }
        
        // 创建日期对象
        const now = new Date();
        
        // 提取时间信息
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // 月份从 0 开始，需要 +1
        const day = now.getDate();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        // 格式化时间字符串（补零操作）
        const formattedTime = `${year}年${month}月${day}日 ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        timeElement.textContent = `当前时间：${formattedTime}`;
    } catch (error) {
        console.error('更新时间失败:', error);
    }
}

/**
 * 功能 5: 联系表单处理
 * 学习表单事件的阻止默认行为
 */
function bindContactForm() {
    try {
        const form = document.getElementById('contact-form');
        
        if (!form) {
            console.warn('⚠️ 未找到 contact-form 元素');
            return;
        }
        
        form.addEventListener('submit', function(event) {
            // preventDefault: 阻止表单默认的提交行为（页面刷新）
            event.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('username')?.value;
            const email = document.getElementById('email')?.value;
            const message = document.getElementById('message')?.value;
            
            // 简单验证
            if (!name || !email || !message) {
                alert('⚠️ 请填写所有字段！');
                return;
            }
            
            // 保存到本地存储（模拟）
            try {
                const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
                contacts.push({
                    name,
                    email,
                    message,
                    timestamp: new Date().toISOString()
                });
                localStorage.setItem('contacts', JSON.stringify(contacts));
                console.log('💾 消息已保存到本地存储');
            } catch (storageError) {
                console.warn('⚠️ 无法保存到本地存储:', storageError);
            }
            
            // 模拟发送成功
            alert(`✅ 谢谢你的消息，${name}！\n\n这是一次模拟提交，实际项目中会发送到服务器。`);
            
            // 清空表单
            form.reset();
        });
        
        console.log('✅ 联系表单绑定成功');
    } catch (error) {
        console.error('绑定联系表单失败:', error);
    }
}

/**
 * 功能 6: 深色模式切换
 * 学习 CSS 类切换和本地存储
 */
function initDarkMode() {
    try {
        // 创建切换按钮
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'theme-toggle';
        toggleBtn.className = 'theme-toggle';
        toggleBtn.innerHTML = '🌙';
        toggleBtn.title = '切换深色/浅色模式';
        document.body.appendChild(toggleBtn);
        
        // 从本地存储读取主题偏好
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme === 'true') {
            document.body.classList.add('dark-mode');
            toggleBtn.innerHTML = '☀️';
        }
        
        // 绑定点击事件
        toggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            
            // 更新按钮图标
            toggleBtn.innerHTML = isDark ? '☀️' : '🌙';
            
            // 保存到本地存储
            localStorage.setItem('darkMode', isDark);
            
            console.log(`🎨 主题切换为: ${isDark ? '深色' : '浅色'}模式`);
        });
        
        console.log('✅ 深色模式功能初始化成功');
    } catch (error) {
        console.error('初始化深色模式失败:', error);
    }
}

/**
 * ========================================
 * 额外功能：平滑滚动
 * ========================================
 */
// 为导航链接添加平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // scrollIntoView: 滚动到指定元素
            targetElement.scrollIntoView({
                behavior: 'smooth' // 平滑滚动
            });
        }
    });
});

/**
 * ========================================
 * 控制台小贴士
 * ========================================
 * 打开浏览器开发者工具（F12），在 Console 中可以看到这些信息
 */
console.log('%c 🚀 前端学习小贴士 ', 'background: #667eea; color: white; font-size: 16px; padding: 10px;');
console.log('💡 按 F12 打开开发者工具，探索更多可能性！');
console.log('📖 尝试在 Console 中输入以下命令：');
console.log('   - document.title = "新标题"  // 修改页面标题');
console.log('   - document.body.style.background = "red"  // 改变背景色');
console.log('   - localStorage.setItem("key", "value")  // 保存数据');
console.log('   - localStorage.getItem("key")  // 读取数据');
console.log('🎯 动手试试吧，实践是最好的老师！');