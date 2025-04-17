/**
 * 多语言支持模块 - 蓝白主题个人网站
 * 实现中英文切换功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化多语言支持
    initI18n();
});

/**
 * 初始化多语言支持
 */
function initI18n() {
    // 初始化语言切换按钮事件
    initLangToggle();
    
    // 根据存储的偏好或默认设置显示语言
    loadLanguagePreference();
}

/**
 * 初始化语言切换按钮
 */
function initLangToggle() {
    const langToggle = document.getElementById('lang-toggle');
    
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            // 获取当前语言
            const currentLang = document.documentElement.lang;
            
            // 切换语言
            if (currentLang === 'en') {
                setLanguage('zh');
                this.textContent = 'English';
            } else {
                setLanguage('en');
                this.textContent = '中文';
            }
        });
    }
}

/**
 * 加载语言偏好
 */
function loadLanguagePreference() {
    // 默认语言为英语
    let lang = 'en';
    
    // 检查localStorage中是否有存储的语言偏好
    const storedLang = localStorage.getItem('language');
    
    if (storedLang === 'zh') {
        lang = 'zh';
    } else if (storedLang === null) {
        // 如果没有存储的偏好，检查浏览器语言设置
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.indexOf('zh') === 0) {
            lang = 'zh';
        }
    }
    
    // 设置语言
    setLanguage(lang);
}

/**
 * 设置语言
 * @param {string} lang - 语言代码 ('en' 或 'zh')
 */
function setLanguage(lang) {
    // 更新 HTML lang 属性
    document.documentElement.lang = lang;
    
    // 更新按钮文本
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? '中文' : 'English';
    }
    
    // 存储语言偏好
    localStorage.setItem('language', lang);
    
    // 更新页面文本
    updateTexts(lang);
}

/**
 * 更新页面文本
 * @param {string} lang - 语言代码 ('en' 或 'zh')
 */
function updateTexts(lang) {
    // 获取所有带有 data-i18n 属性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (window.translations[key] && window.translations[key][lang]) {
            element.textContent = window.translations[key][lang];
        }
    });
}

/**
 * 翻译数据 - 设为全局可访问
 */
window.translations = {
    // 导航
    'nav.home': {
        en: 'Home',
        zh: '首页'
    },
    'nav.about': {
        en: 'About',
        zh: '关于'
    },
    'nav.projects': {
        en: 'Projects',
        zh: '项目'
    },
    'nav.contact': {
        en: 'Contact',
        zh: '联系'
    },
    
    // 英雄区
    'hero.greeting': {
        en: 'Hello, I\'m ',
        zh: '你好，我是 '
    },
    'hero.name': {
        en: 'Your Name',
        zh: '您的名字'
    },
    'hero.role': {
        en: 'Frontend Developer / Designer / Creative Worker',
        zh: '前端开发者 / 设计师 / 创意工作者'
    },
    'hero.contact': {
        en: 'Contact Me',
        zh: '联系我'
    },
    
    // 关于部分
    'about.title': {
        en: 'About Me',
        zh: '关于我'
    },
    'about.skills.title': {
        en: 'Skills',
        zh: '技能'
    },
    'about.skills.content': {
        en: 'Proficient in HTML, CSS, JavaScript and modern frameworks like React and Vue.',
        zh: '熟练掌握HTML、CSS、JavaScript等前端技术，以及React、Vue等现代框架。'
    },
    'about.education.title': {
        en: 'Education',
        zh: '教育'
    },
    'about.education.content': {
        en: 'Bachelor\'s degree in Computer Science with honors. Passionate about continuous learning.',
        zh: '计算机科学学士学位，优秀毕业生。对新技术保持持续学习的热情。'
    },
    'about.interests.title': {
        en: 'Interests',
        zh: '兴趣'
    },
    'about.interests.content': {
        en: 'Love exploring new technologies and enjoy photography, travel, and outdoor activities.',
        zh: '喜欢探索新技术，业余时间热爱摄影、旅行和户外活动。'
    },
    
    // 项目部分
    'projects.title': {
        en: 'Projects',
        zh: '项目展示'
    },
    'projects.project1.title': {
        en: 'Project One',
        zh: '项目一'
    },
    'projects.project1.content': {
        en: 'A responsive website developed with React, featuring modern UI design and smooth user experience.',
        zh: '这是一个使用React开发的响应式网站，具有现代UI设计和流畅的用户体验。'
    },
    'projects.project2.title': {
        en: 'Project Two',
        zh: '项目二'
    },
    'projects.project2.content': {
        en: 'A mobile application developed with Flutter cross-platform framework, receiving high user ratings.',
        zh: '一款移动应用，使用Flutter跨平台开发，获得了极高的用户评价。'
    },
    'projects.project3.title': {
        en: 'Project Three',
        zh: '项目三'
    },
    'projects.project3.content': {
        en: 'Data visualization platform combining backend APIs with frontend chart libraries for intuitive data display.',
        zh: '数据可视化平台，结合后端API和前端图表库，展示复杂数据的直观界面。'
    },
    
    // 联系部分
    'contact.title': {
        en: 'Contact Me',
        zh: '联系我'
    },
    'contact.content': {
        en: 'If you\'re interested in my work or have any questions, please feel free to contact me. I\'d be happy to connect!',
        zh: '如果您对我的工作感兴趣，或者有任何问题，请随时联系我。我很乐意与您交流！'
    },
    'contact.button': {
        en: 'Send Email',
        zh: '发送邮件'
    },
    
    // 页脚
    'footer.copyright': {
        en: '© 2023 Your Name. All rights reserved.',
        zh: '© 2023 您的名字. 保留所有权利.'
    }
}; 