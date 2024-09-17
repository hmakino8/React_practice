import React, { useState } from "react";
import * as Style from "../style/styleTaskList";
import { formatDate } from "../utils/utils";
import { InputForm } from "./DisplayModal";
import { initFormData } from "../utils/initializer";
import * as Icon from "../utils/Icon";
import { COLOR } from "../utils/constants";
import { LABEL } from "../utils/constants";
import { DEFAULT_LIST_TITLE } from "../utils/constants";

export const DisplayAllTasks = (props) => {
  const { taskList, setTaskList, taskGroup, setTaskGroup } = props;

  return (
    <div style={Style.listGroupWrapper}>
      {taskGroup.map((List) => (
        <AddListToListGroup
          taskList={List.taskList}
          setTaskList={setTaskList}
          taskGroup={taskGroup}
          setTaskGroup={setTaskGroup}
        />
      ))}
    </div>
  );
};

export const AddListToListGroup = (props) => {
  const { taskList, setTaskList, taskGroup, setTaskGroup } = props;

  return (
    <div className="listContents" style={Style.listContents}>
      <div style={Style.listTitle}>
        <p style={Style.listName}>{DEFAULT_LIST_TITLE}</p>
        <button style={Style.buttonTaskEdit}>
          <Icon.MoreVert />
        </button>
      </div>
      <p style={Style.LabelButtonAddTask}>
        <button style={Style.ButtonAddTask}>
          <Icon.AddTask />
          {LABEL.ADD_TASK}
        </button>
      </p>
      <div style={{ ...Style.tasksComplete }}>
        {taskList
          .filter((task) => !task.isComplete)
          .map((taskIncomplete) => {
            return (
              <DisplayTask
                key={taskIncomplete.id}
                task={taskIncomplete}
                setTaskList={setTaskList}
              />
            );
          })}
      </div>
      <div>完了</div>
      <div style={{ ...Style.tasksComplete }}>
        {taskList
          .filter((task) => task.isComplete)
          .map((taskComplete) => {
            return (
              <DisplayTask
                key={taskComplete.id}
                task={taskComplete}
                setTaskList={setTaskList}
              />
            );
          })}
      </div>
    </div>
  );
};

const DisplayTask = (props) => {
  const { task, setTaskList } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleIsComplete = () => {
    setTaskList((prevTaskList) => {
      return prevTaskList.map((prevTask) =>
        prevTask.id === task.id
          ? { ...prevTask, isComplete: !prevTask.isComplete }
          : prevTask
      );
    });
  };

  // const handleTaskEdit = () => {
  //   setModalData({ ...task, isEditing: true });
  //   setisModalOpen(true);
  // };

  const handleIsHovered = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <>
      <button style={Style.task}>
        <div
          onMouseEnter={handleIsHovered}
          onMouseLeave={handleIsHovered}
          style={{ margin: "0 10px", display: "flex" }}
        >
          {!isHovered ? (
            <input
              type="checkbox"
              checked={task.isComplete}
              style={Style.checkbox}
              onChange={handleToggleIsComplete}
              on
            ></input>
          ) : (
            <button>
              <span
                class="material-symbols-outlined"
                style={{
                  color: COLOR.BLUE,
                }}
              >
                check
              </span>
            </button>
          )}
        </div>
        <div style={Style.taskTitle}>{task.title}</div>
        <div style={Style.taskDeadline}>
          <Icon.Clock />
          {formatDate(task.deadline)}
        </div>
        <button style={Style.buttonTaskEdit}>
          <Icon.MoreVert />
        </button>
        <div
          style={{
            ...Style.priority,
            ...Style.priorityColor[task.priority],
          }}
        ></div>
      </button>
    </>
  );
};
