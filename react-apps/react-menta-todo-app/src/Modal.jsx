import React, { useState } from "react";

const styleTasks = {
  display: "flex",
};

const styleTasksP = {
  fontWeight: "bold",
};

const styleTasksButtonAdd = {
  border: "none",
  backgroundColor: "green",
  color: "white",
  fontWeight: "lighter",
  width: "120px",
  height: "35px",
  fontSize: "10.5px",
  borderRadius: "3px",
  marginLeft: "auto",
};

const styleTasksContents = {
  display: "flex",
  height: "100%",
  backgroundColor: "red",
};

const styleTasksNoData = {
  display: "flex",
  fontSize: "0.5rem",
  margin: "auto auto",
  border: "1px dotted",
  width: "98%",
  height: "95%",
  justifyContent: "center",
  alignItems: "center",
};

export const Modal = (todos, setTodos) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダルの表示状態を管理
  const [todoText, setTodoText] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const addTodo = () => {
    if (todoText === "") return;
    setTodos([...todos, { text: todoText, completed: false }]);
    setTodoText("");
    closeModal();
  };

  return (
    <>
      <div style={styleTasks}>
        <p style={styleTasksP}>Tasks</p>
        <button style={styleTasksButtonAdd} onClick={openModal}>
          + Add Task
        </button>
      </div>
      <div style={styleTasksContents}>
        {isModalOpen ? (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>Add a new TODO</h2>
              <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                className="todo-input"
                placeholder="Enter a new task"
              />
              <button onClick={addTodo}>Add Todo</button>
            </div>
          </div>
        ) : (
          <p style={styleTasksNoData}>No data to display</p>
        )}
      </div>
    </>
  );
};
