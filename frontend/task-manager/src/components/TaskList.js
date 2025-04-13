import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onCompleteTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <div className="no-tasks">No tasks yet. Add a new task to get started!</div>;
  }

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;