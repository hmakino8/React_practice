import React from "react";

export const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={todo.completed ? "completed" : ""}>
      {todo.text}
      <div>
        <button onClick={toggleTodo}>
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </li>
  );
};
