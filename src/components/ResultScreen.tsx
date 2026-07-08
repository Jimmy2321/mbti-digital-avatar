import { motion } from 'framer-motion';
import { PersonalityResult } from '../types';

interface ResultScreenProps {
  result: PersonalityResult;
  onRestart: () => void;
}

export default function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('已复制到剪贴板！');
  };

  return (
    <div className="result-screen">
      <motion.div
        className="result-card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="avatar-section">
          <motion.div 
            className="avatar-emoji"
            style={{ backgroundColor: result.avatar.color }}
            animate={{ 
              rotate: [0, 5, -5, 5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {result.avatar.emoji}
          </motion.div>
          <h3 className="avatar-style">{result.avatar.style}</h3>
          <p className="avatar-description">{result.avatar.description}</p>
        </div>

        <div className="mbti-section">
          <h2 className="mbti-type">{result.mbti}</h2>
          <h3 className="personality-name">{result.personalityName}</h3>
          <div className="tags-container">
            {result.tags.map((tag, index) => (
              <motion.span
                key={index}
                className="tag"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="career-section">
          <h3>💼 未来职业预测</h3>
          <div className="career-card">
            <h4>{result.career.title}</h4>
            <p>{result.career.description}</p>
            <div className="industries">
              {result.career.industries.map((industry, index) => (
                <span key={index} className="industry-tag">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="social-section">
          <h3>📱 专属社交文案</h3>
          
          <div className="social-card">
            <div className="social-header">
              <span className="platform-icon">💬</span>
              <span>朋友圈文案</span>
              <button 
                className="copy-button"
                onClick={() => copyToClipboard(result.socialContent.wechatMoment)}
              >
                复制
              </button>
            </div>
            <p className="social-content">{result.socialContent.wechatMoment}</p>
          </div>

          <div className="social-card">
            <div className="social-header">
              <span className="platform-icon">📕</span>
              <span>小红书笔记</span>
              <button 
                className="copy-button"
                onClick={() => copyToClipboard(result.socialContent.xiaohongshu)}
              >
                复制
              </button>
            </div>
            <p className="social-content">{result.socialContent.xiaohongshu}</p>
          </div>
        </div>

        <motion.button
          className="restart-button"
          onClick={onRestart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          再测一次 🔄
        </motion.button>
      </motion.div>
    </div>
  );
}
