
function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-message">
        <h3>No tasks found!</h3>
        <p>Add a new task to get started.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          className={`task-card ${task.completed ? "completed" : ""}`}
          key={task.id}
        >
          <div className="task-info">
            <div className="task-title">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
              />

              <h3>{task.title}</h3>
            </div>

            <p>{task.description}</p>

            <div className="task-details">
              <span className={`priority ${task.priority.toLowerCase()}`}>
                {task.priority} Priority
              </span>

              {task.dueDate && (
                <span>Due: {task.dueDate}</span>
              )}

              <span>
                {task.completed ? "Completed" : "Pending"}
              </span>
            </div>
          </div>

          <div className="task-actions">
            <button
              className="edit-btn"
              onClick={() => onEdit(task)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
