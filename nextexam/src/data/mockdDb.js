export const mockDb = {
    categories: [
      { id: 1, name: 'Mathematics', icon: '📐', color: 'bg-blue-500' },
      { id: 2, name: 'Science', icon: '🔬', color: 'bg-green-500' },
      { id: 3, name: 'History', icon: '📚', color: 'bg-yellow-500' },
      { id: 4, name: 'Geography', icon: '🌍', color: 'bg-purple-500' },
      { id: 5, name: 'Literature', icon: '📖', color: 'bg-pink-500' },
      { id: 6, name: 'Computer Science', icon: '💻', color: 'bg-indigo-500' },
    ],
    questions: {
      1: [ // Level 1
        {
          id: 1,
          category: 1,
          heading: "Basic Arithmetic",
          question: "What is 2 + 2?",
          image: "/api/placeholder/400/200",
          options: ["3", "4", "5", "6"],
          correct: 1,
          description: "This is a basic addition problem. Add the numbers together to find the sum."
        },
        // Add more questions here
      ],
      // Add more levels here
    }
  };