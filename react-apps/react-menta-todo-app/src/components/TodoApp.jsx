import { useState, useEffect } from "react";
import { AddTaskToList, Modal } from "./Modal";
import { DisplayTasks } from "./DisplayTasks";
import { initTaskInfo, COLOR } from "../utils/utils";
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
        <span className="material-symbols-outlined">menu</span>
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
            transform: "rotate(-20deg)",
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
  const [taskList, setTaskList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskInfo, setTaskInfo] = useState(initTaskInfo());

  useEffect(() => {
    console.log(taskList);
  });
  return (
    <div style={Style.todoWrapper}>
      <Title />
      {isModalOpen && (
        <AddTaskToList
          setTaskList={setTaskList}
          taskInfo={taskInfo}
          setTaskInfo={setTaskInfo}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <DisplayTasks
        taskList={taskList}
        setTaskList={setTaskList}
        setTaskInfo={setTaskInfo}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};
