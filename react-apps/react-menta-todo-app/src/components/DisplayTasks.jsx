import React, { useEffect } from "react";
import { formatDate } from "../utils/utils";
import * as Style from "../style/styleTaskList";
import * as Style2 from "../style/styleModal";
import { initTaskInfo, CreateToodleIcon } from "../utils/utils";

const ContentsIncomplete = (props) => {
  const { task, setTaskInfo, setTaskList, setIsModalOpen } = props;

  const handleOnChange = (e) => {
    setTaskList((prevTaskList) => {
      return prevTaskList.map((prevTask) =>
        prevTask.id === task.id
          ? { ...prevTask, isComplete: !prevTask.isComplete }
          : prevTask
      );
    });
  };

  return (
    <div style={Style.task}>
      <input
        type="checkbox"
        checked={task.isComplete}
        style={{ marginRight: "15px" }}
        onChange={handleOnChange}
      ></input>
      <div
        style={{ width: "50%", overflow: "hidden", textOverFlow: "ellipsis" }}
      >
        {task.title}
      </div>
      <div
        style={{
          display: "flex",
          width: "50%",
          overflow: "hidden",
          whiteSpace: "norap",
          textAlign: "center",
        }}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "20px" }}
        >
          schedule
        </span>
        {formatDate(task.deadline)}
      </div>
      <button
        style={{
          padding: "0",
          fontSize: "1px",
          marginRight: "5px",
          borderRadius: "50%",
          border: "none",
          color: "rgb(100, 100, 100)",
        }}
        onClick={() => {
          setTaskInfo({ ...task, isEditing: true });
          setIsModalOpen(true);
        }}
      >
        <span className="material-symbols-outlined">more_vert</span>
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

const ContentsComplete = (props) => {
  const { task, index, handleOnChange } = props;

  return (
    <>
      <div style={Style.task}>
        <input
          type="checkbox"
          defaultChecked={true}
          style={{ marginRight: "15px" }}
          onChange={(e) => {
            handleOnChange(e, index);
          }}
        ></input>
        <div style={{ width: "70%" }}>{task.title}</div>
        <div style={{ width: "30%" }}>{formatDate(task.deadline)}</div>
        {task.priority === "Medium" && (
          <div style={{ ...Style.priority, backgroundColor: "yellow" }}></div>
        )}
        {task.priority === "High" && (
          <div style={{ ...Style.priority, backgroundColor: "red" }}></div>
        )}
        {task.priority === "Low" && (
          <div style={{ ...Style.priority, backgroundColor: "gray" }}></div>
        )}
      </div>
    </>
  );
};

const Tasks = (props) => {
  const { setIsModalOpen, setTaskInfo } = props;

  return (
    <>
      <button
        style={Style2.buttonAddList}
        onClick={() => {
          setTaskInfo(initTaskInfo());
          setIsModalOpen(true);
        }}
      >
        <CreateToodleIcon />
        <p style={Style2.buttonAddTaskParagraph}>プロジェクトの追加</p>
      </button>
    </>
  );
};

export const DisplayTasks = (props) => {
  const { taskList, setTaskList, setTaskInfo, setIsModalOpen } = props;

  return (
    <>
      <Tasks setIsModalOpen={setIsModalOpen} setTaskInfo={setTaskInfo} />
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
                  <ContentsIncomplete
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
                  <ContentsIncomplete
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
    </>
  );
};
