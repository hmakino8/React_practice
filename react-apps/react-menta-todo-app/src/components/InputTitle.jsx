export const InputTitle = ({ task, handleUpdateTaskInfo, handleKeyDown }) => (
  <input
    name={"title"}
    value={task.title}
    data-task-id={task.taskId}
    onChange={handleUpdateTaskInfo}
    onFocus={(e) => e.target.select()}
    onKeyDown={handleKeyDown}
  />
);