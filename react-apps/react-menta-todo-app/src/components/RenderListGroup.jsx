import React, { useState } from "react";
import { modalItems, commonProps, handleSetFormData } from "./GetModalData";
import * as Style from "../style/styleTaskList";
import { formatDate } from "../utils/utils";
import * as Icon from "../utils/Icon";
import { LABEL, COLOR, PLACEHOLDER } from "../utils/constants";
import { generateId } from "../utils/utils";
import { useEffect } from "react";
import { deadline } from "../style/styleModal";

const tasksToListGroup = (tasks, listGroup, setListGroup) => {
  if (!tasks) return;

  setListGroup((prevListGroup) =>
    prevListGroup.map((prevList) => {
      const newTasks = tasks.filter((task) => task.listId === prevList.listId);
      return { ...prevList, tasks: [...newTasks] };
    })
  );
};

export const RenderListGroup = (props) => {
  const {
    tasks,
    setTasks,
    modalData,
    setModalData,
    listGroup,
    setListGroup,
    isAddTask,
    setIsAddTask,
  } = props;

  useEffect(() => {
    tasksToListGroup(tasks, listGroup, setListGroup);
  }, [tasks]);

  return (
    <div style={Style.listGroupWrapper}>
      {listGroup.map((list) => (
        <AddListToListGroup
          key={list.listId}
          modalData={modalData}
          setModalData={setModalData}
          list={list}
          setTasks={setTasks}
          isAddTask={isAddTask}
          setIsAddTask={setIsAddTask}
        />
      ))}
    </div>
  );
};

export const AddListToListGroup = (props) => {
  const { modalData, setModalData, list, setTasks, isAddTask, setIsAddTask } =
    props;

  const completeTaskCount = list.tasks.filter((task) => task.isComplete).length;

  const handleIsAddTask = () => {
    setIsAddTask(true);
  };

  return (
    <div className="listContents" style={Style.listContents}>
      <div style={Style.listTitle}>
        <p style={Style.listName}>{list.listName}</p>
        <button style={Style.buttonTaskEdit}>
          <Icon.MoreVert />
        </button>
      </div>
      <p style={Style.LabelButtonAddTask}>
        <button style={Style.ButtonAddTask} onClick={handleIsAddTask}>
          <Icon.AddTask />
          {LABEL.ADD_TASK}
        </button>
      </p>
      <div style={{ ...Style.tasksComplete }}>
        {/* {isAddTask && <input placeholder="タイトル" />} */}
        {list.tasks
          .filter((task) => !task.isComplete)
          .map((taskIncomplete) => {
            return (
              <DisplayTask
                key={taskIncomplete.taskId}
                task={taskIncomplete}
                setTasks={setTasks}
              />
            );
          })}
      </div>
      {completeTaskCount > 0 && (
        <div style={{ fontSize: "0.8rem" }}>完了（{completeTaskCount}件）</div>
      )}
      <div style={{ ...Style.tasksComplete }}>
        {list.tasks
          .filter((task) => task.isComplete)
          .map((taskIncomplete) => {
            return (
              <DisplayTask
                key={taskIncomplete.taskId}
                task={taskIncomplete}
                setTasks={setTasks}
              />
            );
          })}
      </div>
    </div>
  );
};

const DisplayTask = (props) => {
  const { task, setTasks } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [daysLeftMessage, setDaysLeftMessage] = useState("");
  const [isClickedDaysLeft, setIsClickedDaysLeft] = useState(false);

  useEffect(() => {
    setDaysLeftMessage(displayDaysLeftMessage(task.deadline), [task.deadline]);
  });

  const handleToggleIsComplete = () => {
    setTasks((prevTasks) => {
      let index = -1;
      let newTasks = [];

      newTasks = prevTasks.map((prevTask, mapIndex) => {
        if (prevTask.taskId === task.taskId) {
          index = mapIndex;
          return { ...prevTask, isComplete: !prevTask.isComplete };
        } else {
          return prevTask;
        }
      });

      if (index !== -1) {
        console.log(index);
        const [updatedTask] = newTasks.splice(index, 1);
        newTasks.unshift(updatedTask);
      }

      return newTasks;
    });
  };

  // const handleTaskEdit = () => {
  //   setModalData({ ...task, isEditing: true });
  //   setisModalOpen(true);
  // };

  const handleIsHovered = () => {
    setIsHovered((prev) => !prev);
  };

  const handleChangeTaskInfo = (e) => {
    const { name, value } = e.target;
    const taskId = e.target.dataset.taskId;

    console.log("thisisit!", name);
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.taskId === taskId) {
          return { ...task, [name]: value };
        }
        return task;
      })
    );
  };

  const calculateDaysLeft = (deadline) => {
    const deadlineDate = new Date(deadline);
    const now = new Date();
    const timeDiff = deadlineDate - now;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return daysLeft;
  };

  const displayDaysLeftMessage = (deadline) => {
    const daysLeft = calculateDaysLeft(deadline);

    switch (true) {
      case daysLeft >= 2:
        return `${daysLeft}日後`;
      case daysLeft === 1:
        return `明日`;
      case daysLeft === 0:
        return `今日`;
      default:
        return `${-daysLeft}日超過`;
    }
  };

  const calculateWidth = (text) => {
    let length = 0;

    for (let char of text) {
      if (char.match(/[^\x00-\x7F]/)) {
        length += 2;
      } else {
        length += 1;
      }
    }
    return length;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.target.blur();
  };

  const handleIsClickedDaysLeft = () => {
    setIsClickedDaysLeft((isClickedDaysLeft) => !isClickedDaysLeft);
  };

  return (
    <button style={Style.task}>
      {/* <div
          onMouseEnter={handleIsHovered}
          onMouseLeave={handleIsHovered}
          style={{ margin: "0 10px", display: "flex" }}
        > */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          width: "100%",
        }}
      >
        <input
          type="checkbox"
          style={Style.checkbox}
          onChange={handleToggleIsComplete}
        ></input>
        {/* <input
        {...commonProps("title", modalData, setModalData)}
        style={Style.taskTitle}
      /> */}
        <input
          name={"title"}
          value={task.title}
          data-task-id={task.taskId}
          onChange={handleChangeTaskInfo}
          onFocus={(e) => e.target.select()}
          onKeyDown={handleKeyDown}
          style={Style.taskTitle}
        />
        <button style={Style.buttonTaskEdit}>
          <Icon.MoreVert />
        </button>
        <select
          name={"priority"}
          value={task.priority}
          data-task-id={task.taskId}
          onChange={handleChangeTaskInfo}
          style={{
            ...Style.priority,
            ...Style.priorityColor[task.priority],
          }}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {task.deadline && (
          <>
            <Icon.Clock />
            {isClickedDaysLeft ? (
              <input
                name={"deadline"}
                value={task.deadline}
                data-task-id={task.taskId}
                type="datetime-local"
                onChange={handleChangeTaskInfo}
                onBlur={handleIsClickedDaysLeft}
                style={{ backgroundColor: "transparent" }}
              />
            ) : (
              <input
                readOnly
                value={daysLeftMessage}
                style={Style.taskDeadline(calculateWidth(daysLeftMessage))}
                onClick={handleIsClickedDaysLeft}
              />
            )}
          </>
        )}
      </div>
    </button>
  );
};
