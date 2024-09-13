import React from "react";
import { InputForm } from "./InputForm";
import { initializeTodoInfo } from "../utils/utils";
import * as Style from "../style/styleModal";
import "../style/styles.css";

const Tasks = (props) => {
  const { setIsModalOpen, setTodoInfo } = props;

  return (
    <div style={Style.tasks}>
      <p style={Style.tasksParagraph}>Tasks</p>
      <button
        className="tasksButtonAdd"
        style={Style.tasksButtonAdd}
        onClick={() => {
          setTodoInfo(initializeTodoInfo());
          setIsModalOpen(true);
        }}
      >
        <i className="fa-solid fa-square-plus">　</i>
        Add Task
      </button>
    </div>
  );
};

const ModalContents = (props) => {
  const { setTodos, todoInfo, setTodoInfo, isModalOpen, setIsModalOpen } =
    props;

  return (
    <>
      {isModalOpen && (
        <div style={Style.modal} onClick={() => setIsModalOpen(false)}>
          <div style={Style.modalContent} onClick={(e) => e.stopPropagation()}>
            {todoInfo.isNew ? <h2>Task Details</h2> : <h2>Edit</h2>}
            <InputForm
              setTodos={setTodos}
              todoInfo={todoInfo}
              setTodoInfo={setTodoInfo}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      )}
    </>
  );
};

export const Modal = (props) => {
  const { setTodos, todoInfo, setTodoInfo, isModalOpen, setIsModalOpen } =
    props;

  return (
    <>
      <Tasks setIsModalOpen={setIsModalOpen} setTodoInfo={setTodoInfo} />
      <ModalContents
        setTodos={setTodos}
        todoInfo={todoInfo}
        setTodoInfo={setTodoInfo}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};
