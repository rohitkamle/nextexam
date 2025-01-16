import React from 'react';
import { mockDb } from '../../data/mockDb';
import { useExam } from '../../contexts/ExamContext';

export function CategoryGrid() {
  const { setSelectedCategory, setView, userProgress } = useExam();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    const categoryProgress = userProgress.completedLevels[category.id] || [];
    setView('exam');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockDb.categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategorySelect(category)}
          className={`${category.color} p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center justify-center space-y-4`}
        >
          <span className="text-4xl">{category.icon}</span>
          <h2 className="text-xl font-semibold text-white">{category.name}</h2>
        </button>
      ))}
    </div>
  );
}