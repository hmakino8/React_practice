import React from "react";
import { InputForm } from "./InputForm";
import * as Style from "../style/styleModal";
import "../style/styles.css";

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
    <ModalContents
      setTodos={setTodos}
      todoInfo={todoInfo}
      setTodoInfo={setTodoInfo}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    ></ModalContents>
  );
};
