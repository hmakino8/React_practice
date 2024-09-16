import React, { useEffect } from "react";
import "../style/styles.css";
import * as Utils from "../utils/utils";
import * as Style from "../style/styleModal";

const GetFormData = (props) => {
  const { formFields, formFeild, taskInfo, setTaskInfo } = props;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setTaskInfo((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const commonProps = {
    id: formFeild,
    name: formFeild,
    value: taskInfo[formFeild] || "",
    onChange: handleOnChange,
  };

  switch (formFeild) {
    case formFields.title:
      return (
        <div style={Style.inputForm}>
          {/* <label style={Style.label}>{formFields.title}</label> */}
          <input type="text" {...commonProps} placeholder="タイトル" />
        </div>
      );
    case formFields.priority:
      return (
        <div style={{ ...Style.inputForm, ...Style.priority }}>
          {/* <label style={Style.label}>{formFields.priority}</label> */}
          <select {...commonProps}>
            <option value="" disabled>
              優先順位を選択
            </option>
            <option value="">なし</option>
            <option value="High">高</option>
            <option value="Medium">中</option>
            <option value="Low">低</option>
          </select>
        </div>
      );
    case formFields.deadline:
      return (
        <div style={Style.inputForm}>
          {/* <label style={Style.label}>{formFields.deadline}</label> */}
          <input type="datetime-local" {...commonProps} />
        </div>
      );
    case formFields.comment:
      return (
        <div style={Style.inputForm}>
          {/* <label style={Style.label}>{formFields.comment}</label> */}
          <textarea {...commonProps} placeholder="説明を追加" />
        </div>
      );
    default:
      return null;
  }
};

export const TaskBuilder = (props) => {
  const { setTaskList, taskInfo, setTaskInfo, setIsModalOpen } = props;

  const formFields = {
    title: "title",
    priority: "priority",
    deadline: "deadline",
    comment: "comment",
  };

  const taskAdder = () => {
    const uniqueId = Utils.generateId();

    setTaskList((prevList) => [...prevList, { ...taskInfo, id: uniqueId }]);
    setTaskInfo(Utils.initTaskInfo());

    setIsModalOpen(false);
  };

  const taskEditer = () => {
    setTaskList((prevList) => {
      return prevList.map((prevTask) => {
        if (prevTask.id === taskInfo.id) {
          setTaskInfo((prevTaskInfo) => ({
            ...prevTaskInfo,
            isEditing: false,
          }));
          return { ...prevTask, ...taskInfo };
        } else {
          return prevTask;
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
      {taskInfo.isEditing ? <h2>タスク編集</h2> : <h2>タスク追加</h2>}
      <GetFormData
        formFields={formFields}
        formFeild={formFields.title}
        taskInfo={taskInfo}
        setTaskInfo={setTaskInfo}
      />
      <div style={Style.priorityAndDeadline}>
        <GetFormData
          formFields={formFields}
          formFeild={formFields.priority}
          taskInfo={taskInfo}
          setTaskInfo={setTaskInfo}
        />
        <GetFormData
          formFields={formFields}
          formFeild={formFields.deadline}
          taskInfo={taskInfo}
          setTaskInfo={setTaskInfo}
        />
      </div>
      <GetFormData
        formFields={formFields}
        formFeild={formFields.comment}
        taskInfo={taskInfo}
        setTaskInfo={setTaskInfo}
      />
      <button onClick={closeModal}>Close</button>
      {taskInfo.isEditing ? (
        <button onClick={taskEditer}>変更を保存</button>
      ) : (
        <button onClick={taskAdder}>追加</button>
      )}
    </>
  );
};

export const AddTasksToList = (props) => {
  const { setTaskList, taskInfo, setTaskInfo, setIsModalOpen } = props;

  return (
    <div style={Style.modal} onClick={() => setIsModalOpen(false)}>
      <div style={Style.modalContent} onClick={(e) => e.stopPropagation()}>
        <TaskBuilder
          setTaskList={setTaskList}
          taskInfo={taskInfo}
          setTaskInfo={setTaskInfo}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
};
