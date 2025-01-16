import React, { createContext, useContext, useState } from 'react';

const ExamContext = createContext();

export function ExamProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [view, setView] = useState('categories');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [userProgress, setUserProgress] = useState({
    completedLevels: {},
    currentAttempts: 0
  });

  const value = {
    darkMode,
    setDarkMode,
    view,
    setView,
    selectedCategory,
    setSelectedCategory,
    currentLevel,
    setCurrentLevel,
    currentQuestion,
    setCurrentQuestion,
    showInfo,
    setShowInfo,
    userProgress,
    setUserProgress
  };

  return <ExamContext.Provider value={value}>{children}</ExamContext.Provider>;
}

export function useExam() {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
}