import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';
import { calculateMBTI, getPersonalityResult } from './utils/mbtiCalculator';
import './App.css';

type Screen = 'welcome' | 'quiz' | 'result';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<any>(null);

  const handleStart = () => {
    setCurrentScreen('quiz');
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 计算结果
      const mbti = calculateMBTI(newAnswers);
      const personalityResult = getPersonalityResult(mbti);
      setResult(personalityResult);
      setCurrentScreen('result');
    }
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // 移除最后一个答案
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleExit = () => {
    if (window.confirm('确定要退出测试吗？进度将不会保存。')) {
      handleRestart();
    }
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {currentScreen === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <WelcomeScreen onStart={handleStart} />
          </motion.div>
        )}

        {currentScreen === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <QuestionScreen
              question={questions[currentQuestionIndex]}
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
              onBack={currentQuestionIndex > 0 ? handleBack : undefined}
              onExit={handleExit}
            />
          </motion.div>
        )}

        {currentScreen === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <ResultScreen result={result} onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
