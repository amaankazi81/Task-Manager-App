import React from 'react';

function TaskItem({ task, onCompleteTask, onDeleteTask }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <div className="task-meta">
          <span className="task-date">
            Created: {new Date(task.createdAt).toLocaleDateString()}
          </span>
          {task.completed && (
            <span className="completed-badge">Completed</span>
          )}
        </div>
      </div>
      <div className="task-actions">
        {!task.completed && (
          <button
            className="complete-btn"
            onClick={() => onCompleteTask(task._id)}
          >
            Complete
          </button>
        )}
        <button
          className="delete-btn"
          onClick={() => onDeleteTask(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;