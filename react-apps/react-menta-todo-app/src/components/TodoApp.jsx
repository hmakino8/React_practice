import { useState } from "react";
import { Modal } from "./Modal";
import { TodoList } from "./TodoList";
import { initializeTaskInfo, COLOR } from "../utils/utils";
import * as Style from "../style/styleTodo";

const Title = () => {
  return (
    <div style={Style.todoTitle}>
      <button
        style={{
          display: "flex",
          fontSize: "1.2rem",
          borderRadius: "50%",
          border: "none",
          margin: "0 20px",
          padding: "13px",
        }}
      >
        <span class="material-symbols-outlined">menu</span>
      </button>
      <div>
        <span style={{ color: COLOR.BLUE }}>T</span>
        <span style={{ color: COLOR.RED }}>o</span>
        <span style={{ color: COLOR.YELLOW }}>o</span>
        <span style={{ color: COLOR.YELLOW }}>o</span>
        <span style={{ color: COLOR.YELLOW }}>o</span>
        <span style={{ color: COLOR.YELLOW }}>o</span>
        <span style={{ color: COLOR.YELLOW }}>o</span>
        <span style={{ color: COLOR.YELLOW }}>o</span>
        <span style={{ color: COLOR.YELLOW }}>o</span>
        <span style={{ color: COLOR.YELLOW }}>o</span>
        <span style={{ color: COLOR.YELLOW }}>o</span>
        <span style={{ color: COLOR.BLUE }}>d</span>
        <span style={{ color: COLOR.GREEN }}>l</span>
        <span
          style={{
            color: COLOR.RED,
            transform: "rotate(-30deg)",
            display: "inline-block",
          }}
        >
          e
        </span>
      </div>
    </div>
  );
};

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskInfo, setTaskInfo] = useState(initializeTaskInfo());

  return (
    <>
      <div style={Style.todoWrapper}>
        <Title />
        <Modal
          setTodos={setTodos}
          taskInfo={taskInfo}
          setTaskInfo={setTaskInfo}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setTaskInfo={setTaskInfo}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </>
  );
};
