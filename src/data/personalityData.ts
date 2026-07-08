import { PersonalityResult } from '../types';

export const personalityDatabase: Record<string, PersonalityResult> = {
  // NT型 - 理性者
  INTJ: {
    mbti: "INTJ",
    personalityName: "建筑师",
    tags: ["战略家", "独立思考", "完美主义", "高冷学霸"],
    avatar: {
      emoji: "🧙‍♂️",
      color: "#6366f1",
      style: "神秘智者",
      description: "深邃的眼神，总在想下一个五年计划"
    },
    career: {
      title: "科技创业者 / 战略顾问",
      description: "擅长长远规划，能看透复杂系统的本质",
      industries: ["人工智能", "金融科技", "管理咨询"]
    },
    socialContent: {
      wechatMoment: "凌晨三点还在优化商业计划书。有人说我太拼，但我觉得，与其抱怨黑暗，不如点亮蜡烛。☕💻 #创业日常 #深夜思考",
      xiaohongshu: "📚 INTJ的学习方法论 | 高效成长的5个习惯\n\n✨ 建立知识体系，而非碎片化学习\n✨ 每周复盘，持续迭代\n✨ 深度工作，远离干扰\n\n#个人成长 #学习方法 #INTJ"
    }
  },
  INTP: {
    mbti: "INTP",
    personalityName: "逻辑学家",
    tags: ["好奇心爆棚", "理论派", "脑洞大开", "哲学少年"],
    avatar: {
      emoji: "🔬",
      color: "#8b5cf6",
      style: "极客学者",
      description: "永远在问'为什么'的探索者"
    },
    career: {
      title: "科学家 / 研究员",
      description: "热爱探索未知，追求真理和知识",
      industries: ["基础科研", "数据分析", "游戏设计"]
    },
    socialContent: {
      wechatMoment: "刚看完一篇量子物理论文，突然觉得平行宇宙可能真的存在...所以另一个我在干嘛？🤔 #脑洞时间",
      xiaohongshu: "🌌 INTP的奇妙世界 | 那些让我着迷的问题\n\n🔍 如果时间可以倒流，记忆会保留吗？\n🔍 AI会有意识吗？\n🔍 宇宙的边界在哪里？\n\n#哲学思考 #科学探索 #INTP"
    }
  },
  ENTJ: {
    mbti: "ENTJ",
    personalityName: "指挥官",
    tags: ["天生领袖", "目标导向", "执行力强", "气场两米八"],
    avatar: {
      emoji: "👑",
      color: "#dc2626",
      style: "霸气总裁",
      description: "走路带风，说话有分量的领导者"
    },
    career: {
      title: "CEO / 企业高管",
      description: "善于组织资源，带领团队实现目标",
      industries: ["企业管理", "投资银行", "政治"]
    },
    socialContent: {
      wechatMoment: "季度目标超额完成！感谢团队的付出。下一步，进军海外市场。💪🚀 #领导力 #团队建设",
      xiaohongshu: "💼 ENTJ的职场进阶指南 | 如何成为不可替代的人\n\n✅ 结果导向，用数据说话\n✅ 主动承担责任，展现领导力\n✅ 持续学习，保持竞争力\n\n#职场干货 #领导力 #ENTJ"
    }
  },
  ENTP: {
    mbti: "ENTP",
    personalityName: "辩论家",
    tags: ["创意无限", "嘴炮王者", "打破常规", "社交达人"],
    avatar: {
      emoji: "🎭",
      color: "#f59e0b",
      style: "机智玩家",
      description: "总能找到新角度，让人又爱又恨"
    },
    career: {
      title: "产品经理 / 创意总监",
      description: "善于发现机会，推动创新变革",
      industries: ["互联网产品", "广告创意", "风险投资"]
    },
    socialContent: {
      wechatMoment: "刚才和朋友辩论了两个小时'AI会不会取代人类'，结论是：不会，但会取代不学习的人😂 #思维碰撞",
      xiaohongshu: "💡 ENTP的创意秘籍 | 如何源源不断产生好点子\n\n🎯 跨界学习，连接不同领域\n🎯 质疑常识，寻找新视角\n🎯 快速试错，迭代优化\n\n#创意思维 #产品设计 #ENTP"
    }
  },
  
  // NF型 - 理想主义者
  INFJ: {
    mbti: "INFJ",
    personalityName: "提倡者",
    tags: ["心灵导师", "共情能力强", "理想主义", "文艺青年"],
    avatar: {
      emoji: "🌟",
      color: "#ec4899",
      style: "温柔治愈",
      description: "能读懂人心，给人温暖的指引"
    },
    career: {
      title: "心理咨询师 / 作家",
      description: "善于理解他人，帮助人们成长",
      industries: ["心理咨询", "教育", "内容创作"]
    },
    socialContent: {
      wechatMoment: "今天和一个朋友聊了很久，看到他眼里的光重新亮起来，真好。每个人都有自己的故事，都值得被倾听。💫 #温暖时刻",
      xiaohongshu: "📖 INFJ的阅读清单 | 这些书治愈了我的焦虑\n\n🌸 《被讨厌的勇气》\n🌸 《蛤蟆先生去看心理医生》\n🌸 《活出生命的意义》\n\n#心灵成长 #阅读推荐 #INFJ"
    }
  },
  INFP: {
    mbti: "INFP",
    personalityName: "调停者",
    tags: ["浪漫诗人", "内心丰富", "追求真实", "佛系青年"],
    avatar: {
      emoji: "🦋",
      color: "#10b981",
      style: "梦幻精灵",
      description: "活在自己的小世界里，美好而纯粹"
    },
    career: {
      title: "艺术家 / 自由职业者",
      description: "追求有意义的工作，表达内心世界",
      industries: ["艺术设计", "写作", "公益组织"]
    },
    socialContent: {
      wechatMoment: "傍晚的风很温柔，路边的花开了。生活虽然平凡，但总有小确幸。🌺 #慢生活 #记录美好",
      xiaohongshu: "🎨 INFP的创作日常 | 把内心情感变成作品\n\n✨ 写日记，记录情绪波动\n✨ 画画/摄影，捕捉美好瞬间\n✨ 听独立音乐，寻找共鸣\n\n#艺术创作 #生活方式 #INFP"
    }
  },
  ENFJ: {
    mbti: "ENFJ",
    personalityName: "主人公",
    tags: ["魅力领袖", "热心肠", "激励大师", "社交核心"],
    avatar: {
      emoji: "🌈",
      color: "#f97316",
      style: "阳光使者",
      description: "走到哪里都能带来正能量"
    },
    career: {
      title: "人力资源总监 / 培训师",
      description: "善于激发他人潜能，建立和谐团队",
      industries: ["人力资源", "教育培训", "公关"]
    },
    socialContent: {
      wechatMoment: "团队团建活动圆满成功！看到大家开心的笑容，我也超级满足。一起成长的感觉真好！🎉 #团队凝聚力",
      xiaohongshu: "🤝 ENFJ的社交技巧 | 如何成为受欢迎的人\n\n💝 真诚倾听，给予关注\n💝 发现他人优点，及时赞美\n💝 乐于助人，建立信任\n\n#社交技巧 #人际关系 #ENFJ"
    }
  },
  ENFP: {
    mbti: "ENFP",
    personalityName: "竞选者",
    tags: ["快乐小狗", "热情洋溢", "可能性探索者", "社牛"],
    avatar: {
      emoji: "🎪",
      color: "#eab308",
      style: "活力四射",
      description: "永远充满好奇和热情的冒险家"
    },
    career: {
      title: "市场营销 / 自媒体博主",
      description: "善于传播理念，感染他人",
      industries: ["市场营销", "新媒体", "演艺娱乐"]
    },
    socialContent: {
      wechatMoment: "今天认识了三个新朋友，聊得超开心！世界这么大，有趣的人这么多，爱了爱了！🥳 #社交日常",
      xiaohongshu: "🌟 ENFP的一周挑战 | 尝试10件新鲜事\n\nDay 1: 学做咖啡拉花 ☕\nDay 2: 参加即兴表演课 🎭\nDay 3: 去从未去过的餐厅 🍜\n\n#挑战自我 #生活方式 #ENFP"
    }
  },
  
  // SJ型 - 守护者
  ISTJ: {
    mbti: "ISTJ",
    personalityName: "物流师",
    tags: ["靠谱担当", "细节控", "责任感强", "务实派"],
    avatar: {
      emoji: "📋",
      color: "#64748b",
      style: "稳重可靠",
      description: "说到做到，值得信赖的伙伴"
    },
    career: {
      title: "会计师 / 项目经理",
      description: "注重细节，确保任务准确完成",
      industries: ["财务会计", "行政管理", "质量控制"]
    },
    socialContent: {
      wechatMoment: "本周工作计划全部按时完成✓。周末可以安心陪家人了。平衡工作和生活很重要。📊 #工作效率",
      xiaohongshu: "📝 ISTJ的时间管理法 | 高效完成任务的秘诀\n\n1️⃣ 制定详细计划\n1️⃣ 优先级排序\n1️⃣ 专注执行，不被打扰\n\n#时间管理 #工作效率 #ISTJ"
    }
  },
  ISFJ: {
    mbti: "ISFJ",
    personalityName: "守卫者",
    tags: ["暖男/暖女", "细心体贴", "默默付出", "顾家"],
    avatar: {
      emoji: "🏠",
      color: "#f43f5e",
      style: "温馨守护",
      description: "总是记得每个人的喜好和需求"
    },
    career: {
      title: "护士 / 教师",
      description: "关心他人，提供温暖和支持",
      industries: ["医疗健康", "教育", "客户服务"]
    },
    socialContent: {
      wechatMoment: "给爸妈做了顿晚饭，看他们吃得开心，我也很幸福。陪伴是最长情的告白。❤️ #家庭时光",
      xiaohongshu: "🍰 ISFJ的居家日常 | 打造温馨的小窝\n\n🏡 定期整理收纳\n🏡 学习新菜谱\n🏡 养绿植，增添生机\n\n#居家生活 #生活方式 #ISFJ"
    }
  },
  ESTJ: {
    mbti: "ESTJ",
    personalityName: "总经理",
    tags: ["组织者", "效率至上", "传统守护者", "实干家"],
    avatar: {
      emoji: "⚙️",
      color: "#0ea5e9",
      style: "精明干练",
      description: "条理清晰，办事利落的执行者"
    },
    career: {
      title: "运营总监 / 公务员",
      description: "善于建立秩序，提高组织效率",
      industries: ["运营管理", "政府机构", "制造业"]
    },
    socialContent: {
      wechatMoment: "公司流程优化项目顺利完成，效率提升30%。好的制度能让团队事半功倍。💼 #管理心得",
      xiaohongshu: "💪 ESTJ的自律日常 | 养成好习惯的方法\n\n⏰ 早起晨练，开启一天\n⏰ 番茄工作法，保持专注\n⏰ 睡前复盘，持续改进\n\n#自律 #个人成长 #ESTJ"
    }
  },
  ESFJ: {
    mbti: "ESFJ",
    personalityName: "执政官",
    tags: ["人气王", "照顾周到", "重视和谐", "热心大姐/大哥"],
    avatar: {
      emoji: "🎊",
      color: "#a855f7",
      style: "热情好客",
      description: "聚会组织者，朋友圈的核心人物"
    },
    career: {
      title: "活动策划 / 销售经理",
      description: "善于协调关系，营造和谐氛围",
      industries: ["活动策划", "销售", "酒店管理"]
    },
    socialContent: {
      wechatMoment: "生日派对大成功！感谢各位朋友的到来，看到大家玩得开心我就满足了～明年继续！🎂🎉 #生日派对",
      xiaohongshu: "🎁 ESFJ的送礼指南 | 如何送出走心的礼物\n\n💝 观察对方需求\n💝 注重包装和仪式感\n💝 附上手写卡片更暖心\n\n#送礼技巧 #人际关系 #ESFJ"
    }
  },
  
  // SP型 - 探险家
  ISTP: {
    mbti: "ISTP",
    personalityName: "鉴赏家",
    tags: ["技术宅", "动手能力", "冷静理智", "酷盖"],
    avatar: {
      emoji: "🔧",
      color: "#475569",
      style: "机械大师",
      description: "话不多，但动手解决问题的能力超强"
    },
    career: {
      title: "工程师 / 飞行员",
      description: "擅长操作工具，解决技术问题",
      industries: ["机械工程", "航空航天", "网络安全"]
    },
    socialContent: {
      wechatMoment: "花了三天时间组装了一台电脑，性能跑分超预期。动手的乐趣，懂的都懂。💻 #DIY",
      xiaohongshu: "🛠️ ISTP的工具箱 | 必备神器推荐\n\n🔨 多功能螺丝刀套装\n🔨 3D打印机（自制小物件）\n🔨 树莓派（折腾各种项目）\n\n#数码科技 #DIY #ISTP"
    }
  },
  ISFP: {
    mbti: "ISFP",
    personalityName: "探险家",
    tags: ["审美在线", "享受当下", "温柔敏感", "艺术家气质"],
    avatar: {
      emoji: "🎨",
      color: "#fb7185",
      style: "文艺清新",
      description: "用独特的方式感受世界的美好"
    },
    career: {
      title: "设计师 / 摄影师",
      description: "追求美感，创造视觉体验",
      industries: ["平面设计", "时尚", "摄影"]
    },
    socialContent: {
      wechatMoment: "今天的晚霞好美，忍不住拍了下来。生活中处处都是风景，只是需要一双发现美的眼睛。🌅 #摄影日常",
      xiaohongshu: "📸 ISFP的拍照技巧 | 用手机拍出大片感\n\n✨ 利用自然光线\n✨ 构图要简洁\n✨ 捕捉真实情感\n\n#摄影教程 #审美提升 #ISFP"
    }
  },
  ESTP: {
    mbti: "ESTP",
    personalityName: "企业家",
    tags: ["行动派", "冒险精神", "社交高手", "现充"],
    avatar: {
      emoji: "🏄",
      color: "#facc15",
      style: "运动健将",
      description: "活在当下，随时准备迎接挑战"
    },
    career: {
      title: "销售代表 / 运动员",
      description: "善于把握机会，快速行动",
      industries: ["销售", "体育", "餐饮"]
    },
    socialContent: {
      wechatMoment: "周末去跳伞了！那种自由落体的感觉太爽了！人生就是要勇于尝试！🪂 #极限运动",
      xiaohongshu: "🏋️ ESTP的运动日常 | 保持活力的秘诀\n\n💪 每周健身3次\n💪 尝试新运动（攀岩/冲浪/拳击）\n💪 和朋友一起运动更有动力\n\n#健身打卡 #运动生活 #ESTP"
    }
  },
  ESFP: {
    mbti: "ESFP",
    personalityName: "表演者",
    tags: ["派对动物", "乐天派", "舞台中心", "气氛组"],
    avatar: {
      emoji: "🎉",
      color: "#ec4899",
      style: "闪耀明星",
      description: "走到哪里都是焦点，自带BGM"
    },
    career: {
      title: "艺人 / 主持人",
      description: "善于表现自己，娱乐他人",
      industries: ["演艺", "直播", "旅游"]
    },
    socialContent: {
      wechatMoment: "KTV嗨到凌晨！唱歌跳舞我最行！快乐就是要分享出来～🎤💃 #派对时间",
      xiaohongshu: "💃 ESFP的穿搭日记 | 如何成为人群中的焦点\n\n👗 大胆尝试鲜艳色彩\n👗 配饰要亮眼\n👗 自信是最好的装饰\n\n#穿搭灵感 #时尚搭配 #ESFP"
    }
  }
};
