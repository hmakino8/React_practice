import React, { useState } from "react";
import { InputForm } from "./InputForm";
import "../style/styles.css";
import * as Style from "../style/styleModal";

const Tasks = ({ openModal }) => {
  return (
    <div style={Style.tasks}>
      <p style={Style.tasksParagraph}>Tasks</p>
      <button
        className="tasksButtonAdd"
        style={Style.tasksButtonAdd}
        onClick={openModal}
      >
        <i className="fa-solid fa-square-plus">　</i>
        Add Task
      </button>
    </div>
  );
};

const ModalContents = (props) => {
  const { closeModal, isModalOpen, setTodos } = props;

  return (
    <>
      {isModalOpen && (
        <div style={Style.modal} onClick={closeModal}>
          <div style={Style.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>Task Details</h2>
            <InputForm closeModal={closeModal} setTodos={setTodos} />
          </div>
        </div>
      )}
    </>
  );
};

export const Modal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { todos, setTodos } = props;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Tasks openModal={openModal} />
      <ModalContents
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
};
