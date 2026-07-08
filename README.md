# 数字人格分身 - MBTI趣味测试

一个通过脑洞大开的问题生成专属数字人格分身的Web应用。

## ✨ 功能特点

- 🧠 **12道趣味问题**：凌晨三点做什么、如果能隐身穿什么等脑洞大开的问题
- 👤 **MBTI性格分析**：基于回答精准计算16种人格类型
- 🎨 **虚拟形象生成**：每种人格都有独特的emoji形象和风格描述
- 💼 **未来职业预测**：推荐适合的职业方向和行业领域
- 📱 **社交文案生成**：自动生成朋友圈和小红书风格的分享内容

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看应用

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
src/
├── components/          # React组件
│   ├── WelcomeScreen.tsx    # 欢迎页面
│   ├── QuestionScreen.tsx   # 问答页面
│   └── ResultScreen.tsx     # 结果展示页面
├── data/                # 数据文件
│   ├── questions.ts         # 问题库
│   └── personalityData.ts   # 人格数据库
├── utils/               # 工具函数
│   └── mbtiCalculator.ts    # MBTI计算逻辑
├── types.ts             # TypeScript类型定义
├── App.tsx              # 主应用组件
├── main.tsx             # 入口文件
└── index.css            # 全局样式
```

## 🎯 技术栈

- **React 18** - UI框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Framer Motion** - 动画库

## 🎨 设计亮点

1. **渐变背景**：紫色渐变营造梦幻氛围
2. **玻璃态效果**：使用backdrop-filter实现毛玻璃卡片
3. **流畅动画**：页面切换、按钮交互都有平滑过渡
4. **响应式设计**：完美适配手机和桌面端

## 📝 问题示例

- 🌙 凌晨三点，你突然醒来，会做什么？
- 👻 如果能隐身一天，你最想偷听谁说话？
- 🚀 如果可以去任何星球，你会选择哪里？干什么？
- 💰 突然中了1000万彩票，第一反应是？

## 🎭 16种人格类型

包含所有MBTI类型：
- NT理性者：INTJ、INTP、ENTJ、ENTP
- NF理想主义者：INFJ、INFP、ENFJ、ENFP
- SJ守护者：ISTJ、ISFJ、ESTJ、ESFJ
- SP探险家：ISTP、ISFP、ESTP、ESFP

每种人格都有：
- 独特的emoji虚拟形象
- 性格标签（4个）
- 职业预测（含行业推荐）
- 朋友圈文案
- 小红书笔记

## 🔧 自定义扩展

### 添加新问题

编辑 `src/data/questions.ts`，按照现有格式添加：

```typescript
{
  id: 13,
  question: "你的新问题？",
  options: [
    {
      text: "选项A",
      traits: { E: 2, N: 1 }
    },
    // ...更多选项
  ]
}
```

### 修改人格数据

编辑 `src/data/personalityData.ts`，可以自定义：
- 人格名称和标签
- 虚拟形象（emoji、颜色、描述）
- 职业预测
- 社交文案内容

## 📱 移动端优化

应用已针对移动端进行优化：
- 触摸友好的按钮尺寸
- 自适应布局
- 流畅的滚动体验

## 🎉 分享功能

测试结果页面提供一键复制功能，可以轻松分享：
- 朋友圈风格的短文案
- 小红书风格的种草笔记

## 📄 License

MIT

---

**享受测试，发现你的数字人格分身！** 🎭✨
