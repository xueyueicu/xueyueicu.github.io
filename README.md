# 蓝白主题个人网站

一个简洁、科技感的蓝白主题个人网站模板，具有多种动态元素和视觉效果。

## 特点

- **简洁蓝白主题**：采用蓝白配色方案，清新专业
- **响应式设计**：适配各种屏幕尺寸设备
- **微交互效果**：
  - 悬浮动效：按钮、卡片和图标悬停时有动画效果
  - 波浪分割线：使用SVG绘制的蓝白渐变波浪形分隔线
  - 粒子背景：白色粒子在背景上缓慢浮动
- **视觉点缀**：
  - 几何图形：半透明蓝色圆形和三角形装饰
  - 渐变玻璃卡片：展示项目和技能
  - 视差效果：鼠标移动时背景图形跟随移动
- **实用功能**：
  - 暗黑模式：支持深色主题切换
  - 自定义光标：可选的蓝色圆点光标效果（默认未启用）
- **动画效果**：
  - 滚动动画：元素进入视口时的淡入动画
  - 悬浮动画：按钮和社交图标的悬浮效果
  - 卡片闪光：卡片悬停时的闪光效果
  - 渐变边框：项目卡片的动态渐变边框

## 文件结构

```
├── index.html          # 主页
├── 404.html            # 404错误页面
├── css/
│   ├── styles.css      # 主样式文件
│   ├── animations.css  # 动画效果样式
│   └── custom-cursor.css # 自定义光标样式
└── js/
    └── scripts.js      # 主脚本文件
```

## 使用方法

1. 克隆或下载此仓库
2. 根据您的需求修改内容：
   - 在 `index.html` 中更新个人信息
   - 在 CSS 文件中调整颜色和样式
   - 添加您的项目和经历
3. 部署到您的网站托管服务

## 可选功能启用

### 启用自定义光标

要启用自定义蓝色圆点光标，打开 `index.html` 文件，找到底部的脚本部分，取消注释这段代码：

```javascript
/*
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.display = 'block';
    document.body.classList.add('custom-cursor-enabled');
    
    // ... 其他光标代码
});
*/
```

## 自定义

- **颜色**：在 `css/styles.css` 中修改 `:root` 变量
- **字体**：根据需要在 CSS 中更改字体系列
- **动画**：在 `css/animations.css` 中调整动画参数
- **粒子背景**：在 `js/scripts.js` 中的 `initParticles()` 函数中修改配置

## 浏览器兼容性

- Chrome（推荐）
- Firefox
- Safari
- Edge

## 依赖项

- [Font Awesome](https://fontawesome.com/) - 图标库
- [particles.js](https://vincentgarreau.com/particles.js/) - 粒子背景效果

## 许可

MIT 