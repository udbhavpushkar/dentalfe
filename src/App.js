import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskCreated = (taskId) => {
    setTasks((prevTasks) => [...prevTasks, taskId]);
  };

  return (
    <div className="App">
      <h1>Task Management Dashboard</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
