import React from 'react';
import TaskManager from '../components/TaskManager';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Your App</h1>
      <TaskManager />
    </div>
  );
};

export default HomePage;