/**
 * 主要脚本文件 - 蓝白主题个人网站
 * 包含粒子背景配置和暗黑模式切换功能
 */

// 等待文档加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化粒子背景
    initParticles();
    
    // 初始化暗黑模式切换
    initDarkModeToggle();
    
    // 初始化滚动动画
    initScrollAnimation();
});

/**
 * 初始化粒子背景
 */
function initParticles() {
    // 确保粒子容器存在
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#6c8eb3'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6c8eb3',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

/**
 * 初始化暗黑模式切换
 */
function initDarkModeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // 如果主题切换按钮存在
    if (themeToggle) {
        // 检查本地存储中的主题偏好
        checkThemePreference();
        
        // 添加点击事件
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const icon = this.querySelector('i');
            
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
    }
}

/**
 * 检查用户主题偏好
 */
function checkThemePreference() {
    // 获取本地存储的主题设置
    const currentTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle ? themeToggle.querySelector('i') : null;
    
    // 如果存在暗黑模式偏好
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
    // 如果没有存储的偏好，检查系统偏好
    else if (currentTheme === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
        localStorage.setItem('theme', 'dark');
    }
}

/**
 * 初始化滚动动画
 */
function initScrollAnimation() {
    // 获取所有需要动画的元素
    const animElements = document.querySelectorAll('.card, .section-title, .btn');
    
    // 创建Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // 如果元素可见
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // 元素已显示动画，不再观察
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // 当10%的元素可见时触发
    });
    
    // 观察每个元素
    animElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * 自定义光标效果
 * 可以在需要时取消注释启用
 */
/*
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    
    // 添加悬停效果
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
}
*/ 