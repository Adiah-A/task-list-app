// TaskList.js
import React, { useState } from 'react';
import Task from './Task';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    if (newTaskText) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          text: newTaskText,
          isComplete: false,
        },
      ]);
      setNewTaskText('');
    }
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      {tasks.map((task) => (
        !task.isComplete && (
          <Task
            key={task.id}
            task={task}
            onEdit={editTask}
            onDelete={() => deleteTask(task.id)}
            onToggleComplete={toggleComplete}
          />
        )
      ))}
    </div>
  );
}

export default TaskList;
