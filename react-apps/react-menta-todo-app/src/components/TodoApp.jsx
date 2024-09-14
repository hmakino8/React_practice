import { useState } from "react";
import { Modal } from "./Modal";
import { TodoList } from "./TodoList";
import { initializeTodoInfo } from "../utils/utils";
import * as Style from "../style/styleTodo";

const Title = () => {
  return (
    <h1 className="title" style={Style.todoTitle}>
      <i class="fa-brands fa-react"></i>
      Todo
    </h1>
  );
};

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoInfo, setTodoInfo] = useState(initializeTodoInfo());

  return (
    <>
      <div style={Style.todoWrapper}>
        <Title />
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
    </>
  );
};
