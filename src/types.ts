export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export interface Option {
  text: string;
  traits: {
    E?: number; // Extraversion vs Introversion
    I?: number;
    S?: number; // Sensing vs Intuition
    N?: number;
    T?: number; // Thinking vs Feeling
    F?: number;
    J?: number; // Judging vs Perceiving
    P?: number;
  };
}

export interface MBTIScore {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export interface PersonalityResult {
  mbti: string;
  personalityName: string;
  tags: string[];
  avatar: AvatarConfig;
  career: CareerPrediction;
  socialContent: SocialContent;
}

export interface AvatarConfig {
  emoji: string;
  color: string;
  style: string;
  description: string;
}

export interface CareerPrediction {
  title: string;
  description: string;
  industries: string[];
}

export interface SocialContent {
  wechatMoment: string;
  xiaohongshu: string;
}
