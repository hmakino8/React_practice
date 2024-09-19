import React, { useState } from "react";
import * as Style from "../style/styleTaskList";
import { formatDate } from "../utils/utils";
import * as Icon from "../utils/Icon";
import { LABEL, COLOR } from "../utils/constants";
import { generateId } from "../utils/utils";
import { useEffect } from "react";

const tasksToListGroup = (tasks, listGroup, setListGroup) => {
  if (tasks) {
    setListGroup((prevListGroup) =>
      prevListGroup.map((prevList) => {
        const newTasks = tasks.filter(
          (task) => task.listId === prevList.listId
        );
        return { ...prevList, tasks: [...newTasks] };
      })
    );
  }
};

export const RenderListGroup = (props) => {
  const { tasks, setTasks, listGroup, setListGroup } = props;

  useEffect(() => {
    tasksToListGroup(tasks, listGroup, setListGroup);
  }, [tasks]);

  // return (
  //     <div style={Style.listGroupWrapper}>
  //       {ListGroup.map((taskList) => (
  //         <AddListToListGroup
  //           key={generateId()}
  //           taskList={taskList}
  //           setTasks={setTasks}
  //         />
  //       ))}
  //     </div>
  //   );
  // };
  // export const AddListToListGroup = (props) => {
  //   const { taskList, setTasks } = props;

  //   return (
  //     <div className="listContents" style={Style.listContents}>
  //       <div style={Style.listTitle}>
  //         <p style={Style.listName}>{taskList.listName}</p>
  //         <button style={Style.buttonTaskEdit}>
  //           <Icon.MoreVert />
  //         </button>
  //       </div>
  //       <p style={Style.LabelButtonAddTask}>
  //         <button style={Style.ButtonAddTask}>
  //           <Icon.AddTask />
  //           {LABEL.ADD_TASK}
  //         </button>
  //       </p>
  //       <div style={{ ...Style.tasksComplete }}>
  //         {taskList.tasks
  //           .filter((task) => !task.isComplete)
  //           .map((taskIncomplete) => {
  //             return (
  //               <DisplayTask
  //                 key={taskIncomplete.id}
  //                 task={taskIncomplete}
  //                 setTasks={setTasks}
  //               />
  //             );
  //           })}
  //       </div>
  //       <div>完了</div>
  //       <div style={{ ...Style.tasksComplete }}>
  //         {taskList.tasks
  //           .filter((task) => task.isComplete)
  //           .map((taskComplete) => {
  //             return (
  //               <DisplayTask
  //                 key={taskComplete.id}
  //                 task={taskComplete}
  //                 setTasks={setTasks}
  //               />
  //             );
  //           })}
  //       </div>
  //     </div>
  // );
};

const DisplayTask = (props) => {
  const { task, setTasks } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleIsComplete = () => {
    setTasks((prevTaskList) => {
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
