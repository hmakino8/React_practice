import React from "react";
import "../style/styles.css";
import * as Utils from "../utils/utils";
import * as Style from "../style/styleModal";

const CreateTask = ({ titleName, taskInfo, setTaskInfo }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setTaskInfo((prevTaskInfo) => ({
      ...prevTaskInfo,
      [name]: value,
    }));
  };

  const commonProps = {
    id: titleName,
    name: titleName,
    value: taskInfo[titleName] || "",
    onChange: handleOnChange,
  };

  switch (titleName) {
    case Utils.FORMINFO.TITLE:
      return (
        <div style={Style.inputForm}>
          <label style={Style.label}>{titleName}</label>
          <input type="text" {...commonProps} />
        </div>
      );
    case Utils.FORMINFO.PRIORITY:
      return (
        <div style={{ ...Style.inputForm, ...Style.priority }}>
          <label style={Style.label}>{titleName}</label>
          <select {...commonProps}>
            <option value="" disabled>
              選択してください
            </option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      );
    case Utils.FORMINFO.DEADLINE:
      return (
        <div style={Style.inputForm}>
          <label style={Style.label}>{titleName}</label>
          <input type="datetime-local" {...commonProps} />
        </div>
      );
    case Utils.FORMINFO.COMMENT:
      return (
        <div style={Style.inputForm}>
          <label style={Style.label}>{titleName}</label>
          <textarea {...commonProps} />
        </div>
      );
    default:
      return null;
  }
};

export const ModalContents = (props) => {
  const { setTodos, taskInfo, setTaskInfo, setIsModalOpen } = props;

  const addTask = () => {
    const uniqueId = Utils.generateId();
    setTodos((prevTodos) => [...prevTodos, { ...taskInfo, id: uniqueId }]);
    setTaskInfo(Utils.initializeTaskInfo());
    setIsModalOpen(false);
  };

  const editTask = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodo) => {
        if (prevTodo.id === taskInfo.id) {
          return { ...prevTodo, ...taskInfo };
        } else {
          return prevTodo;
        }
      });
    });

    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <CreateTask
          titleName={Utils.FORMINFO.TITLE}
          taskInfo={taskInfo}
          setTaskInfo={setTaskInfo}
        />
        <div style={Style.priorityAndDeadline}>
          <CreateTask
            titleName={Utils.FORMINFO.PRIORITY}
            taskInfo={taskInfo}
            setTaskInfo={setTaskInfo}
          />
          <CreateTask
            titleName={Utils.FORMINFO.DEADLINE}
            taskInfo={taskInfo}
            setTaskInfo={setTaskInfo}
          />
        </div>
        <CreateTask
          titleName={Utils.FORMINFO.COMMENT}
          taskInfo={taskInfo}
          setTaskInfo={setTaskInfo}
        />
        <button onClick={closeModal}>Close</button>
        {taskInfo.isNew ? (
          <button onClick={addTask}>Add Task</button>
        ) : (
          <button onClick={editTask}>Done</button>
        )}
      </div>
    </>
  );
};

export const Modal = (props) => {
  const { setTodos, taskInfo, setTaskInfo, isModalOpen, setIsModalOpen } =
    props;

  return (
    <>
      {isModalOpen && (
        <div style={Style.modal} onClick={() => setIsModalOpen(false)}>
          <div style={Style.modalContent} onClick={(e) => e.stopPropagation()}>
            {taskInfo.isNew ? <h2>タスク詳細</h2> : <h2>編集</h2>}
            <ModalContents
              setTodos={setTodos}
              taskInfo={taskInfo}
              setTaskInfo={setTaskInfo}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      )}
    </>
  );
};
