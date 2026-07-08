import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    question: "🌙 凌晨三点，你突然醒来，会做什么？",
    options: [
      {
        text: "刷朋友圈/社交媒体，看看大家都在干嘛",
        traits: { E: 2, S: 1, P: 1 }
      },
      {
        text: "打开笔记本写日记或记录梦境",
        traits: { I: 2, N: 2, J: 1 }
      },
      {
        text: "起来煮个泡面或者找点吃的",
        traits: { S: 2, F: 1, P: 1 }
      },
      {
        text: "思考人生意义和宇宙奥秘",
        traits: { I: 1, N: 2, T: 2 }
      }
    ]
  },
  {
    id: 2,
    question: "👻 如果能隐身一天，你最想偷听谁说话？",
    options: [
      {
        text: "暗恋对象/心仪的人",
        traits: { E: 1, F: 2, P: 1 }
      },
      {
        text: "老板/领导在办公室的真实想法",
        traits: { T: 2, J: 1, N: 1 }
      },
      {
        text: "家人私下里怎么评价我",
        traits: { F: 2, S: 1, I: 1 }
      },
      {
        text: "科学家/大佬们的机密会议",
        traits: { N: 2, T: 2, I: 1 }
      }
    ]
  },
  {
    id: 3,
    question: "🚀 如果可以去任何星球，你会选择哪里？干什么？",
    options: [
      {
        text: "火星 - 建立人类第一个殖民地",
        traits: { E: 1, N: 2, T: 1, J: 1 }
      },
      {
        text: "土星环 - 坐在光环上发呆看风景",
        traits: { I: 2, N: 2, F: 1, P: 1 }
      },
      {
        text: "月球 - 开一家太空咖啡馆",
        traits: { E: 2, S: 1, F: 2, J: 1 }
      },
      {
        text: "黑洞边缘 - 探索时空的奥秘",
        traits: { I: 1, N: 2, T: 2, P: 1 }
      }
    ]
  },
  {
    id: 4,
    question: "💰 突然中了1000万彩票，第一反应是？",
    options: [
      {
        text: "立刻告诉所有亲朋好友，一起庆祝",
        traits: { E: 2, S: 1, F: 2, P: 1 }
      },
      {
        text: "冷静下来，制定详细的理财计划",
        traits: { I: 1, S: 1, T: 2, J: 2 }
      },
      {
        text: "先环游世界，买想买的东西",
        traits: { E: 1, S: 2, F: 1, P: 2 }
      },
      {
        text: "投资创业，实现更大的梦想",
        traits: { E: 1, N: 2, T: 2, J: 1 }
      }
    ]
  },
  {
    id: 5,
    question: "🎭 如果必须扮演一个角色参加化妆舞会，你会选？",
    options: [
      {
        text: "超级英雄 - 拯救世界的正义使者",
        traits: { E: 2, N: 1, F: 2, J: 1 }
      },
      {
        text: "神秘侦探 - 破解谜案的天才",
        traits: { I: 1, N: 2, T: 2, P: 1 }
      },
      {
        text: "童话公主/王子 - 优雅迷人的贵族",
        traits: { E: 1, S: 1, F: 2, J: 2 }
      },
      {
        text: "疯狂科学家 - 不按常理出牌的怪咖",
        traits: { I: 1, N: 2, T: 1, P: 2 }
      }
    ]
  },
  {
    id: 6,
    question: "📱 手机里哪个APP使用时间最长？",
    options: [
      {
        text: "微信/QQ - 聊天社交停不下来",
        traits: { E: 2, S: 1, F: 2, J: 1 }
      },
      {
        text: "B站/知乎 - 学习知识涨姿势",
        traits: { I: 1, N: 2, T: 2, P: 1 }
      },
      {
        text: "抖音/小红书 - 刷视频看种草",
        traits: { E: 1, S: 2, F: 1, P: 2 }
      },
      {
        text: "备忘录/待办清单 - 规划生活工作",
        traits: { I: 1, S: 1, T: 1, J: 2 }
      }
    ]
  },
  {
    id: 7,
    question: "🐾 如果可以养一只神奇生物当宠物，你会选？",
    options: [
      {
        text: "会说话的猫 - 能陪你聊天吐槽",
        traits: { E: 1, S: 1, F: 2, P: 1 }
      },
      {
        text: "小龙 - 可以骑着它飞翔",
        traits: { E: 2, N: 2, T: 1, J: 1 }
      },
      {
        text: "隐形兔子 - 安静陪伴不打扰",
        traits: { I: 2, N: 1, F: 1, P: 1 }
      },
      {
        text: "机械狗 - 高科技智能助手",
        traits: { I: 1, N: 1, T: 2, J: 2 }
      }
    ]
  },
  {
    id: 8,
    question: "⏰ 如果时间可以暂停一小时，你会用来做什么？",
    options: [
      {
        text: "补觉！太困了需要休息",
        traits: { I: 2, S: 2, F: 1, P: 1 }
      },
      {
        text: "恶作剧，捉弄一下朋友",
        traits: { E: 2, S: 1, F: 1, P: 2 }
      },
      {
        text: "完成未完成的工作/作业",
        traits: { I: 1, S: 1, T: 1, J: 2 }
      },
      {
        text: "观察静止的世界，思考人生",
        traits: { I: 2, N: 2, T: 2, P: 1 }
      }
    ]
  },
  {
    id: 9,
    question: "🎪 如果开一家店，你会选择？",
    options: [
      {
        text: "热闹的酒吧/咖啡厅 - 认识各种人",
        traits: { E: 2, S: 2, F: 2, P: 1 }
      },
      {
        text: "书店/图书馆 - 安静的知识殿堂",
        traits: { I: 2, N: 1, T: 1, J: 1 }
      },
      {
        text: "科技体验馆 - 展示未来科技",
        traits: { E: 1, N: 2, T: 2, J: 1 }
      },
      {
        text: "艺术工作室 - 自由创作的空间",
        traits: { I: 1, N: 2, F: 2, P: 2 }
      }
    ]
  },
  {
    id: 10,
    question: "🌈 如果拥有超能力，你最想要？",
    options: [
      {
        text: "读心术 - 知道别人在想什么",
        traits: { E: 1, N: 1, F: 2, J: 1 }
      },
      {
        text: "瞬间移动 - 想去哪就去哪",
        traits: { E: 2, S: 1, T: 1, P: 2 }
      },
      {
        text: "预知未来 - 看到即将发生的事",
        traits: { I: 1, N: 2, T: 2, J: 2 }
      },
      {
        text: "时间倒流 - 重来一次的机会",
        traits: { I: 1, N: 2, F: 2, P: 1 }
      }
    ]
  },
  {
    id: 11,
    question: "🎮 周末宅在家，最理想的度过方式是？",
    options: [
      {
        text: "约朋友来家里聚会玩游戏",
        traits: { E: 2, S: 2, F: 2, P: 1 }
      },
      {
        text: "一个人看书看电影追剧",
        traits: { I: 2, N: 1, F: 1, P: 1 }
      },
      {
        text: "研究新技能/做手工/编程",
        traits: { I: 1, N: 1, T: 2, J: 1 }
      },
      {
        text: "整理房间，做家务，规划下周",
        traits: { I: 1, S: 2, T: 1, J: 2 }
      }
    ]
  },
  {
    id: 12,
    question: "🎤 如果被邀请参加脱口秀，你的风格是？",
    options: [
      {
        text: "幽默搞笑，讲自己的糗事",
        traits: { E: 2, S: 2, F: 2, P: 1 }
      },
      {
        text: "犀利吐槽，分析社会现象",
        traits: { E: 1, N: 1, T: 2, P: 1 }
      },
      {
        text: "温暖治愈，分享感人故事",
        traits: { E: 1, S: 1, F: 2, J: 1 }
      },
      {
        text: "哲学思辨，探讨人生意义",
        traits: { I: 2, N: 2, T: 2, J: 1 }
      }
    ]
  }
];
