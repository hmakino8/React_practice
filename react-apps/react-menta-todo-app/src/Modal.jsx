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

const CreateInputForm = ({ closeModal, setTodos }) => {
  const InitializeTodoInfo = {
    title: "",
    priority: "",
    deadline: "",
    comments: "",
  };
  const [todoInfo, setTodoInfo] = useState({ InitializeTodoInfo });

  const addTodo = () => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos;
      newTodos.push(todoInfo);
      return newTodos;
    });
    closeModal();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <label for="title" style={{ marginBottom: "5px" }}>
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={todoInfo.title}
          // onChangeのe.targetは変更された<input>要素を指す
          onChange={(e) => {
            const { name, value } = e.target;
            setTodoInfo((prevTodoInfo) => ({
              ...prevTodoInfo,
              [name]: value,
            }));
            // console.log(todoInfo);
          }}
          // className="todo-input"
        />

        <label for="priority" style={{ marginBottom: "5px" }}>
          Priority
        </label>
        <input
          type="text"
          id="priority"
          name="priority"
          value={todoInfo["priority"]}
          // onChangeのe.targetは変更された<input>要素を指す
          onChange={(e) => {
            const { name, value } = e.target;
            setTodoInfo((prevTodoInfo) => ({
              ...prevTodoInfo,
              [name]: value,
            }));
          }}
        />

        <label for="deadline" style={{ marginBottom: "5px" }}>
          Deadline
        </label>
        <input
          type="text"
          id="deadline"
          name="deadline"
          value={todoInfo["deadline"]}
          // onChangeのe.targetは変更された<input>要素を指す
          onChange={(e) => {
            const { name, value } = e.target;
            setTodoInfo((prevTodoInfo) => ({
              ...prevTodoInfo,
              [name]: value,
            }));
          }}
        />

        <label for="comment" style={{ marginBottom: "5px" }}>
          Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          value={todoInfo["comment"]}
          // onChangeのe.targetは変更された<input>要素を指す
          onChange={(e) => {
            const { name, value } = e.target;
            setTodoInfo((prevTodoInfo) => ({
              ...prevTodoInfo,
              [name]: value,
            }));
          }}
        />
        <button onClick={closeModal}>Close</button>
        <button onClick={addTodo}>Add Task</button>
      </div>
    </>
  );
};

export const Modal = ({ todos, setTodos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
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
              <h2>Task Details</h2>
              <CreateInputForm closeModal={closeModal} setTodos={setTodos} />
            </div>
          </div>
        ) : todos.length === 0 ? (
          <p style={styleTasksNoData}>No data to display</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
