import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="welcome-screen">
      <motion.div
        className="welcome-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="welcome-emoji"
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          🎭
        </motion.div>
        
        <h1 className="welcome-title">数字人格分身</h1>
        <p className="welcome-subtitle">通过脑洞大开的问题，发现你的专属数字人格</p>
        
        <div className="features">
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="feature-icon">🧠</span>
            <h3>MBTI性格分析</h3>
            <p>16种人格类型精准定位</p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="feature-icon">👤</span>
            <h3>虚拟形象生成</h3>
            <p>专属你的数字分身</p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="feature-icon">💼</span>
            <h3>未来职业预测</h3>
            <p>探索适合你的发展方向</p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="feature-icon">📱</span>
            <h3>社交文案生成</h3>
            <p>朋友圈/小红书一键分享</p>
          </motion.div>
        </div>
        
        <motion.button
          className="start-button"
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          开始测试 ✨
        </motion.button>
        
        <p className="hint-text">共12道趣味问题，预计用时3分钟</p>
      </motion.div>
    </div>
  );
}
