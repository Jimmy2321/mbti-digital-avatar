import { motion } from 'framer-motion';
import { Question } from '../types';

interface QuestionScreenProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (answerIndex: number) => void;
  onBack?: () => void;
  onExit?: () => void;
}

export default function QuestionScreen({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onAnswer,
  onBack,
  onExit
}: QuestionScreenProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="question-screen">
      {/* 顶部导航栏 */}
      <div className="question-header">
        <button 
          className={`nav-button back-button ${!onBack ? 'disabled' : ''}`}
          onClick={onBack}
          disabled={!onBack}
        >
          ← 上一题
        </button>
        
        <button 
          className="nav-button exit-button"
          onClick={onExit}
        >
          ✕ 退出
        </button>
      </div>
      
      <div className="progress-bar">
        <motion.div 
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="question-counter">
        问题 {currentQuestion} / {totalQuestions}
      </div>
      
      <motion.div
        className="question-card"
        key={question.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="question-text">{question.question}</h2>
        
        <div className="options-container">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              className="option-button"
              onClick={() => onAnswer(index)}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="option-text">{option.text}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
