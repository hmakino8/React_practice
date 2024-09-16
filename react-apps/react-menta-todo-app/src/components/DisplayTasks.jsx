import React from "react";
import * as Style from "../style/styleTaskList";
import { initTaskInfo, formatDate } from "../utils/utils";
import * as Icon from "../utils/Icon";

export const AddListsToProject = (props) => {
  const {
    taskList,
    setTaskList,
    setTaskInfo,
    project,
    setProject,
    setIsModalOpen,
  } = props;

  return (
    <div style={Style.listContentsWrapper}>
      <div style={Style.listContents}>
        <p style={{ fontSize: "20px", margin: "5px" }}>マイタスク</p>
        <p
          style={{
            display: "flex",
            fontSize: "1rem",
            height: "10px",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              display: "flex",
              borderRadius: "10px",
              padding: "5px",
              width: "130px",
              border: "none",
              color: "rgb(66, 133, 244)",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                color: "rgb(66, 133, 244)",
                fontSize: "1.2rem",
                marginRight: "5px",
              }}
            >
              add_task
            </span>
            タスクを追加
          </button>
        </p>
        <div style={{ ...Style.tasksWrapper, minHeight: "100px" }}>
          {taskList
            .filter((task) => !task.isComplete)
            .map((taskIncomplete) => {
              return (
                <DisplayTask
                  key={taskIncomplete.id}
                  task={taskIncomplete}
                  setTaskInfo={setTaskInfo}
                  setTaskList={setTaskList}
                  setIsModalOpen={setIsModalOpen}
                />
              );
            })}
        </div>
        <div>完了</div>
        <div style={{ ...Style.tasksWrapper, minHeight: "100px" }}>
          {taskList
            .filter((task) => task.isComplete)
            .map((taskComplete) => {
              return (
                <DisplayTask
                  key={taskComplete.id}
                  task={taskComplete}
                  setTaskInfo={setTaskInfo}
                  setTaskList={setTaskList}
                  setIsModalOpen={setIsModalOpen}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

const DisplayTask = (props) => {
  const { task, setTaskInfo, setTaskList, setIsModalOpen } = props;

  const handleToggleIsComplete = () => {
    setTaskList((prevTaskList) => {
      return prevTaskList.map((prevTask) =>
        prevTask.id === task.id
          ? { ...prevTask, isComplete: !prevTask.isComplete }
          : prevTask
      );
    });
  };

  const handleTaskEdit = () => {
    setTaskInfo({ ...task, isEditing: true });
    setIsModalOpen(true);
  };

  return (
    <div style={Style.task}>
      <input
        type="checkbox"
        checked={task.isComplete}
        style={Style.checkbox}
        onChange={handleToggleIsComplete}
      ></input>
      <div style={Style.taskTitle}>{task.title}</div>
      <div style={Style.taskDeadline}>
        <Icon.Clock />
        {formatDate(task.deadline)}
      </div>
      <button style={Style.buttonTaskEdit} onClick={handleTaskEdit}>
        <Icon.MoreVert />
      </button>
      <div
        style={{
          ...Style.priority,
          ...Style.priorityColor[task.priority],
        }}
      ></div>
    </div>
  );
};
