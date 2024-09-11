import { TodoList } from "./TodoList";
import { TodoTitle } from "./TodoTitle";
import { useState } from "react";
import { Modal } from "./Modal";
import "./styles.css";

const styleTodoContainer = {
  display: "flex",
};

const styleTodoWrapper = {
  display: "flex",
  flexDirection: "column",
  /* align-items: center; */
  /* padding: 2rem; フォントサイズの相対単位 ルートのサイズの2倍のスペース */
  margin: "10px auto auto",
  width: "800px",
  height: "1000px",
  backgroundColor: "#f4f4f4" /* 背景色を設定 */,
  borderRadius: "10px" /* 角を丸くする */,
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 影を付ける */
};

const styleContentsWrapper = {
  width: "80%",
  margin: "0 auto",
};

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div style={styleTodoContainer}>
      <div style={styleTodoWrapper}>
        <div style={styleContentsWrapper}>
          <TodoTitle />
          <Modal todos={todos} setTodos={setTodos} />
          {/* <TodoList todos={todos} setTodos={setTodos} /> */}
        </div>
      </div>
    </div>
  );
};
