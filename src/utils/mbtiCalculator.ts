import { MBTIScore, PersonalityResult } from '../types';
import { personalityDatabase } from '../data/personalityData';
import { questions } from '../data/questions';

export function calculateMBTI(answers: number[]): string {
  const score: MBTIScore = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  // 根据答案累加分数
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const traits = question.options[answerIndex].traits;
      
      Object.keys(traits).forEach(key => {
        const traitKey = key as keyof MBTIScore;
        score[traitKey] += traits[key as keyof typeof traits] || 0;
      });
    }
  });

  // 确定每个维度的倾向
  const result = [
    score.E >= score.I ? 'E' : 'I',
    score.S >= score.N ? 'S' : 'N',
    score.T >= score.F ? 'T' : 'F',
    score.J >= score.P ? 'J' : 'P'
  ].join('');

  return result;
}

export function getPersonalityResult(mbti: string): PersonalityResult {
  return personalityDatabase[mbti] || personalityDatabase['INTP']; // 默认返回INTP
}
