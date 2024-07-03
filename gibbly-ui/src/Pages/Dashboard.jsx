import React from 'react';
import QuizCard from '../Components/QuizCard';

const Dashboard = () => {
  const quizzes = [
    { title: 'Financial International', questions: 21, image: 'https://via.placeholder.com/150' },
    { title: 'Mastering Grammar Basics', questions: 5, image: 'https://via.placeholder.com/150' },
    { title: 'Discovering West Africa: A', questions: 10, image: 'https://via.placeholder.com/150' },
    // Add more quizzes as needed
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Discover Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {quizzes.map((quiz, index) => (
          <QuizCard key={index} {...quiz} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
