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
  fontSize: "12.5px",
  borderRadius: "3px",
  marginLeft: "auto",
};

const styleTasksContents = {
  display: "flex",
  height: "700px",
  backgroundColor: "white",
  borderRadius: "3px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const styleTasksNoData = {
  display: "flex",
  fontSize: "0.5rem",
  margin: "20px auto",
  border: "1px solid rgb(240, 240, 240)",
  width: "95%",
  height: "60%",
  justifyContent: "center",
  alignItems: "center",
};

export const Modal = (todos, setTodos) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダルの表示状態を管理
  const [todoText, setTodoText] = useState({});

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

  const CreateInputForm = ({ title }) => {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          width: "100%",
          margin: "5px",
        }}
      >
        <label for={title}>{title}</label>
        <input
          type="text"
          id={title}
          name={title}
          value={todoText[title]}
          onChange={(e) => setTodoText(e.target.value)}
          className="todo-input"
        />
      </div>
    );
  };

  return (
    <>
      <div style={styleTasks}>
        <p style={styleTasksP}>Tasks</p>
        <button
          className="styleTasksButtonAdd"
          style={styleTasksButtonAdd}
          onClick={openModal}
        >
          <i class="fa-solid fa-square-plus">　</i>
          Add Task
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
              <CreateInputForm title="title" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <CreateInputForm title="Priority" />
                <CreateInputForm title="Deadline" />
              </div>
              <CreateInputForm title="Comments" />
            </div>
            <button onClick={addTodo}>Close</button>
            <button onClick={addTodo}>Add Task</button>
          </div>
        ) : (
          <p style={styleTasksNoData}>No data to display</p>
        )}
      </div>
    </>
  );
};
