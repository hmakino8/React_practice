import { useState } from "react";
import { Modal } from "./Modal";
import { TodoList } from "./TodoList";
import { initializeTodoInfo } from "../utils/utils";
import * as Style from "../style/styleTodo";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoInfo, setTodoInfo] = useState(initializeTodoInfo());

  return (
    <div style={Style.todoContainer}>
      <div style={Style.todoWrapper}>
        <div style={Style.contentsWrapper}>
          <h1 className="title" style={Style.todoTitle}>
            Todo App
          </h1>
          <Modal
            setTodos={setTodos}
            todoInfo={todoInfo}
            setTodoInfo={setTodoInfo}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setTodoInfo={setTodoInfo}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>
    </div>
  );
};
