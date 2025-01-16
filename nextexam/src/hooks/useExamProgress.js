import { useExam } from '../contexts/ExamContext';

export function useExamProgress() {
  const {
    currentQuestion,
    setCurrentQuestion,
    currentLevel,
    setCurrentLevel,
    userProgress,
    setUserProgress,
    setView,
    selectedCategory
  } = useExam();

  const handleAnswerSubmit = (selectedAnswerIndex, currentQ) => {
    const isCorrect = selectedAnswerIndex === currentQ.correct;

    if (isCorrect) {
      if (currentQuestion === 9) { // Last question
        const updatedProgress = {
          ...userProgress,
          completedLevels: {
            ...userProgress.completedLevels,
            [selectedCategory.id]: [
              ...(userProgress.completedLevels[selectedCategory.id] || []),
              currentLevel
            ]
          }
        };
        setUserProgress(updatedProgress);
        setCurrentLevel(currentLevel + 1);
        setCurrentQuestion(0);
        setView('levelComplete');
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      setCurrentQuestion(0);
      setUserProgress({
        ...userProgress,
        currentAttempts: userProgress.currentAttempts + 1
      });
    }
  };

  return { handleAnswerSubmit };
}