import React, { useState, useEffect, useRef } from "react";
import { modalItems, commonProps, handleSetFormData } from "./GetModalData";
import * as Style from "../style/styleTaskList";
import { formatDate } from "../utils/utils";
import * as Icon from "../utils/Icon";
import {
  LABEL,
  COLOR,
  PLACEHOLDER,
  DEFAULT_LIST_NAME,
} from "../utils/constants";
import { generateId } from "../utils/utils";
import { deadline } from "../style/styleModal";
import { initModalData } from "../utils/initializer";

export const RenderListGroup = (props) => {
  const {
    tasks,
    setTasks,
    modalData,
    setIsModalOpen,
    setModalData,
    listGroup,
    setListGroup,
    isAddTask,
    setIsAddTask,
    isMenuOpen,
  } = props;

  useEffect(() => {
    tasksToListGroup(tasks, listGroup, setListGroup);
    console.log(tasks);
  }, [tasks]);

  return (
    <div style={Style.listGroupWrapper(isMenuOpen)}>
      {listGroup.map(
        (list) =>
          list.isDisplay && (
            <AddListToListGroup
              key={list.listId}
              modalData={modalData}
              setIsModalOpen={setIsModalOpen}
              setModalData={setModalData}
              list={list}
              setTasks={setTasks}
              isAddTask={isAddTask}
              setIsAddTask={setIsAddTask}
              setListGroup={setListGroup}
            />
          )
      )}
    </div>
  );
};

const tasksToListGroup = (tasks, listGroup, setListGroup) => {
  if (!tasks) return;

  setListGroup((prevListGroup) =>
    prevListGroup.map((prevList) => {
      const newTasks = tasks.filter((task) => task.listId === prevList.listId);
      return {
        ...prevList,
        tasks: [...newTasks],
        isDefault: prevList.hasOwnProperty("isDefault")
          ? prevList.isDefault
          : false,
      };
    })
  );
};

export const AddListToListGroup = (props) => {
  const {
    modalData,
    setIsModalOpen,
    setModalData,
    list,
    setTasks,
    isAddTask,
    setIsAddTask,
    setListGroup,
  } = props;
  const [isDisplayTaskComplete, setIsDisplayTaskComplete] = useState(false);
  const completeTaskCount = list.tasks.filter((task) => task.isComplete).length;

  const handleIsAddTask = (e) => {
    const listId = e.target.dataset.listId;

    setTasks((tasks) => [
      {
        ...initModalData(),
        listId: listId,
        taskId: generateId(),
        priority: "Low",
      },
      ...tasks,
    ]);
    // setIsAddTask(false);
  };

  // useEffect(() => {
  //   if (!isAddTask) return;

  //   setTasks((prevTasks) => {
  //     const newTask = {
  //       ...initModalData(),
  //       listId: task.listId,
  //       taskId: generateId(),
  //     };

  //     return [newTask, ...prevTasks];
  //   });
  //   console.log("hello");

  //   setIsAddTask(false);
  // }, [isAddTask, setTasks, task.listId]);

  const toggleIsDisplayTaskComplete = () => {
    setIsDisplayTaskComplete((prev) => !prev);
  };

  return (
    <div className="listContents" style={Style.listContents}>
      <div style={Style.listTitle}>
        <p style={Style.listName}>{list.listName}</p>
        <Dropdown
          list={list}
          setListGroup={setListGroup}
          isMoreVertOnList={true}
        />
      </div>
      <p style={Style.LabelButtonAddTask}>
        <button
          style={Style.ButtonAddTask}
          data-list-id={list.listId}
          onClick={handleIsAddTask}
        >
          <Icon.AddTask />
          {LABEL.ADD_TASK}
        </button>
      </p>
      <div style={{ ...Style.tasksComplete }}>
        {list.tasks
          .filter((task) => !task.isComplete)
          .map((taskIncomplete) => (
            <DisplayTask
              key={taskIncomplete.taskId}
              task={taskIncomplete}
              setTasks={setTasks}
              modalData={modalData}
              setModalData={setModalData}
              setIsModalOpen={setIsModalOpen}
              isAddTask={isAddTask}
              setIsAddTask={setIsAddTask}
            />
          ))}
      </div>
      {completeTaskCount > 0 && (
        <div
          style={{
            fontSize: "0.8rem",
            alignItems: "center",
            display: "flex",
            width: "80%",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          onClick={toggleIsDisplayTaskComplete}
        >
          <button
            style={{
              display: "flex",
              // height: "20px",
              // width: "20px",
              padding: "3px",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              borderRadius: "100%",
            }}
          >
            {isDisplayTaskComplete ? <Icon.ArrowDown /> : <Icon.ArrowRight />}
          </button>
          完了（{completeTaskCount}件）
        </div>
      )}
      {isDisplayTaskComplete && (
        <div style={{ ...Style.tasksComplete }}>
          {list.tasks
            .filter((task) => task.isComplete)
            .map((taskIncomplete) => {
              return (
                <DisplayTask
                  key={taskIncomplete.taskId}
                  task={taskIncomplete}
                  setTasks={setTasks}
                  modalData={modalData}
                  setModalData={setModalData}
                  setIsModalOpen={setIsModalOpen}
                  isAddTask={isAddTask}
                  setIsAddTask={setIsAddTask}
                  isMoreVertOnList={true}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export const Dropdown = (props) => {
  const {
    list,
    setListGroup,
    task,
    setTasks,
    setIsModalOpen,
    setModalData,
    isMoreVertOnList,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <button
        onClick={toggleDropdown}
        style={{
          display: "flex",
          padding: "15px 10px",
          // height: "20px",
          // width: "20px",
          border: "none",
          borderRadius: "100%",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Icon.MoreVert />
      </button>

      {isOpen &&
        (isMoreVertOnList ? (
          <MoreVertOnList
            list={list}
            setListGroup={setListGroup}
            dropdownRef={dropdownRef}
          />
        ) : (
          <MoreVertOnTask
            task={task}
            setTasks={setTasks}
            setIsModalOpen={setIsModalOpen}
            setModalData={setModalData}
            dropdownRef={dropdownRef}
          />
        ))}
    </div>
  );
};

const MoreVertOnTask = (props) => {
  const { task, setTasks, setIsModalOpen, setModalData, dropdownRef } = props;

  const handleDeleteTask = (e) => {
    e.stopPropagation();
    const taskId = e.currentTarget.dataset.taskId;

    setTasks((prevTasks) => prevTasks.filter((task) => task.taskId !== taskId));
  };

  const handleOpenTaskInfo =
    ({ task, setIsModalOpen, setModalData }) =>
    (e) => {
      e.stopPropagation();

      setModalData((prevModalData) => ({ ...prevModalData, ...task }));
      setIsModalOpen(true);
    };

  return (
    <div ref={dropdownRef}>
      <ul
        style={{
          width: "130px",
          position: "absolute",
          top: "0",
          right: "50px",
          height: "95%",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "5px",
          listStyle: "none",
          padding: "5px 0",
          margin: "0",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
          zIndex: 1,
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <li
          style={{
            margin: "auto",
            display: "flex",
            alignItems: "center",
            fontSize: "0.8rem",
            width: "100%",
          }}
        >
          <button
            style={{
              height: "40px",
              display: "flex",
              alignItems: "center",
              border: "none",
              width: "100%",
            }}
            data-task-id={task.taskId}
            onClick={handleDeleteTask}
          >
            <Icon.Trash />
            <p>削除</p>
          </button>
        </li>
        <li
          style={{
            margin: "auto",
            display: "flex",
            alignItems: "center",
            fontSize: "0.8rem",
            width: "100%",
          }}
        >
          <button
            style={{
              height: "40px",
              display: "flex",
              alignItems: "center",
              border: "none",
              width: "100%",
            }}
            onClick={handleOpenTaskInfo({ task, setIsModalOpen, setModalData })}
          >
            <Icon.Info />
            <p>詳細</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

const MoreVertOnList = (props) => {
  const { list, setListGroup, dropdownRef } = props;

  const handleDeleteList = (e) => {
    if (list.isDefault) return;

    e.stopPropagation();
    const listId = e.currentTarget.dataset.listId;

    setListGroup((prevListGroup) =>
      prevListGroup.filter((list) => list.listId !== listId)
    );
  };

  const handleInvisibleList = (e) => {
    if (list.isDefault) return;

    e.stopPropagation();
    const listId = e.currentTarget.dataset.listId;

    setListGroup((prevListGroup) =>
      prevListGroup.map((prevList) => {
        if (prevList.listId === listId) {
          return { ...prevList, isDisplay: false };
        }
        return prevList;
      })
    );
  };

  console.log("here");
  return (
    <div ref={dropdownRef}>
      <ul
        style={{
          width: "160px",
          position: "absolute",
          top: "100%",
          right: "0",
          backgroundColor: list.isDefault ? "rgb(240, 240, 240)" : "#fff",
          border: "1px solid #ccc",
          borderRadius: "5px",
          listStyle: "none",
          padding: "10px 0",
          margin: "0",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
          zIndex: 1, // メニューが前面に表示されるように
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <li
          style={{
            // padding: "5px 10px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            fontSize: "0.8rem",
            width: "100%",
          }}
        >
          <button
            disabled={list.isDefault}
            style={{
              height: "40px",
              display: "flex",
              alignItems: "center",
              border: "none",
              width: "100%",
              ...(list.isDefault && { cursor: "default" }),
            }}
            data-list-id={list.listId}
            onClick={handleDeleteList}
          >
            <Icon.Trash />
            <p style={{ marginLeft: "10px" }}>リストを削除</p>
          </button>
        </li>
        {list.isDefault && <div>※このリストは削除できません</div>}
        <li
          style={{
            margin: "auto",
            display: "flex",
            alignItems: "center",
            fontSize: "0.8rem",
            width: "100%",
          }}
        >
          <button
            style={{
              height: "40px",
              display: "flex",
              alignItems: "center",
              border: "none",
              width: "100%",
              ...(list.isDefault && { cursor: "default" }),
            }}
            data-list-id={list.listId}
            onClick={handleInvisibleList}
          >
            <Icon.VisibilityOff />
            <p style={{ marginLeft: "10px" }}>リストを非表示</p>
          </button>
        </li>
        {list.isDefault && <div>※このリストは非表示にできません</div>}
      </ul>
    </div>
  );
};

const DisplayTask = (props) => {
  const {
    task,
    setTasks,
    modalData,
    setModalData,
    setIsModalOpen,
    isAddTask,
    setIsAddTask,
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [daysLeftMessage, setDaysLeftMessage] = useState("");
  const [isClickedDaysLeft, setIsClickedDaysLeft] = useState(false);

  useEffect(() => {
    setDaysLeftMessage(displayDaysLeftMessage(task.deadline));
  }, [task.deadline]);

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

    setTasks((prevTasks) => {
      let newTasks = prevTasks.map((task) => {
        if (task.taskId === taskId) {
          return { ...task, [name]: value };
        }
        return task;
      });

      // if (!newTasks) {
      //   newTasks = {
      //     ...modalData,
      //     taskId: generateId(),
      //   };
      //   return [...prevTasks, { ...newTasks }];
      // }
      return newTasks;
    });
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

  // useEffect(() => {
  //   if (!isAddTask) return;

  //   setTasks((prevTasks) => [
  //     { ...modalData, listId: generateId() },
  //     ...prevTasks,
  //   ]);
  // }, [isAddTask]);

  return (
    <div className="task" style={Style.task}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <input
          type="checkbox"
          style={Style.checkbox}
          onChange={handleToggleIsComplete}
        />
        <input
          name={"title"}
          value={task.title}
          data-task-id={task.taskId}
          onChange={handleChangeTaskInfo}
          onFocus={(e) => e.target.select()}
          onKeyDown={handleKeyDown}
          style={Style.taskTitle}
        />
        {/* <button style={Style.buttonTaskEdit}>
          <Icon.MoreVert />
        </button> */}
        <Dropdown
          task={task}
          setTasks={setTasks}
          setIsModalOpen={setIsModalOpen}
          setModalData={setModalData}
          isMoreVertOnList={false}
        />
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
    </div>
  );
};
