import React from 'react';
import { Moon, Sun, Info, LogOut } from 'lucide-react';
import { useExam } from '../../contexts/ExamContext';

export function Header() {
  const { darkMode, setDarkMode, showInfo, setShowInfo } = useExam();

  return (
    <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Interactive Exam</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Info size={24} />
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <LogOut size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}