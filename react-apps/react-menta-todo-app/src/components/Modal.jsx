import React, { useEffect } from "react";
import "../style/styles.css";
import * as Utils from "../utils/utils";
import * as Style from "../style/styleModal";

const GetFormData = (props) => {
  const { formFields, formFeild, formData, setFormData } = props;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const commonProps = {
    id: formFeild,
    name: formFeild,
    value: formData[formFeild] || "",
    onChange: handleOnChange,
  };

  switch (formFeild) {
    case formFields.title:
      return (
        <div style={Style.inputForm}>
          <label style={Style.label}>{formFields.title}</label>
          <input type="text" {...commonProps} />
        </div>
      );
    case formFields.priority:
      return (
        <div style={{ ...Style.inputForm, ...Style.priority }}>
          <label style={Style.label}>{formFields.priority}</label>
          <select {...commonProps}>
            <option value="" disabled>
              優先順位を選択
            </option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      );
    case formFields.deadline:
      return (
        <div style={Style.inputForm}>
          <label style={Style.label}>{formFeild.deadline}</label>
          <input type="datetime-local" {...commonProps} />
        </div>
      );
    case formFields.comment:
      return (
        <div style={Style.inputForm}>
          <label style={Style.label}>{formFields.comment}</label>
          <textarea {...commonProps} />
        </div>
      );
    default:
      return null;
  }
};

export const TaskBuilder = (props) => {
  const { setTaskList, formData, setFormData, setIsModalOpen } = props;
  const formFields = {
    title: "title",
    priority: "priority",
    deadline: "deadline",
    comment: "comment",
  };

  const addTask = () => {
    const uniqueId = Utils.generateId();

    setTaskList((prevTodos) => [...prevTodos, { ...formData, id: uniqueId }]);
    setFormData(Utils.initFormData());

    setIsModalOpen(false);
  };

  const editTask = () => {
    setTaskList((prevTodos) => {
      return prevTodos.map((prevTodo) => {
        if (prevTodo.id === formData.id) {
          return { ...prevTodo, ...formData };
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
      {formData.isEditing ? <h2>タスク編集</h2> : <h2>タスク追加</h2>}
      <GetFormData
        formFields={formFields}
        formFeild={formFields.title}
        formData={formData}
        setFormData={setFormData}
      />
      <div style={Style.priorityAndDeadline}>
        <GetFormData
          formFields={formFields}
          formFeild={formFields.priority}
          formData={formData}
          setFormData={setFormData}
        />
        <GetFormData
          formFields={formFields}
          formFeild={formFields.deadline}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
      <GetFormData
        formFields={formFields}
        formFeild={formFields.comment}
        formData={formData}
        setFormData={setFormData}
      />
      <button onClick={closeModal}>Close</button>
      {formData.isEditing ? (
        <button onClick={editTask}>変更を保存</button>
      ) : (
        <button onClick={addTask}>追加</button>
      )}
    </>
  );
};

export const Modal = (props) => {
  const { setTaskList, formData, setFormData, setIsModalOpen } = props;
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div style={Style.modal} onClick={() => setIsModalOpen(false)}>
      <div style={Style.modalContent} onClick={(e) => e.stopPropagation()}>
        <TaskBuilder
          setTaskList={setTaskList}
          formData={formData}
          setFormData={setFormData}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
};
