import { useState } from "react";
import { Modal } from "./Modal";
import * as Style from "../style/styleTodo";

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div style={Style.todoContainer}>
      <div style={Style.todoWrapper}>
        <div style={Style.contentsWrapper}>
          <h1 className="title" style={Style.todoTitle}>
            Todo App
          </h1>
          <Modal todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};
