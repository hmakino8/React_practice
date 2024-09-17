import React, { useEffect } from "react";
import "../style/styles.css";
import * as Utils from "../utils/utils";
import { initModalData } from "../utils/initializer";
import * as Style from "../style/styleModal";
import {
  FORMDATA_TITLE_ADD,
  FORMDATA_TITLE_EDIT,
  PLACEHOLDER,
  PULLDOWN,
} from "../utils/constants";

const GetFormData = (props) => {
  const { formFields, formFeild, modalData, setModalData } = props;

  const handleSetFormData = (e) => {
    const { name, value } = e.target;

    setModalData((prev) => ({ ...prev, [name]: value }));
  };

  const commonProps = {
    id: formFeild,
    name: formFeild,
    value: modalData[formFeild] || "",
    onChange: handleSetFormData,
  };

  switch (formFeild) {
    case formFields.title:
      return (
        <div style={Style.inputForm}>
          <input type="text" {...commonProps} placeholder={PLACEHOLDER.TITLE} />
        </div>
      );
    case formFields.priority:
      return (
        <div style={{ ...Style.inputForm, ...Style.priority }}>
          <select {...commonProps}>
            <option value="" disabled>
              {PLACEHOLDER.PRIORITY_DEFAULT}
            </option>
            <option value=""></option>
            <option value="High">{PULLDOWN.PRIORITY_HIGH}</option>
            <option value="Medium">{PULLDOWN.PRIORITY_MEDIUM}</option>
            <option value="Low">{PULLDOWN.PRIORITY_LOW}</option>
          </select>
        </div>
      );
    case formFields.deadline:
      return (
        <div style={Style.inputForm}>
          <input type="datetime-local" {...commonProps} />
        </div>
      );
    case formFields.comment:
      return (
        <div style={Style.inputForm}>
          <textarea {...commonProps} placeholder={PLACEHOLDER.COMMENT} />
        </div>
      );
    default:
      return null;
  }
};

export const TaskBuilder = (props) => {
  const { setTaskList, modalData, setModalData, setIsModalOpen } = props;
  const formFields = {
    title: "title",
    priority: "priority",
    deadline: "deadline",
    comment: "comment",
    id: "",
  };

  const closeForm = () => {
    setIsModalOpen(false);
  };

  const taskAdder = () => {
    const uniqueId = Utils.generateId();

    setTaskList((prev) => [...prev, { ...modalData, id: uniqueId }]);
    setModalData(initModalData());

    closeForm();
  };

  const taskEditer = () => {
    setTaskList((prevList) => {
      return prevList.map((task) => {
        if (task.id === modalData.id) {
          setModalData((prev) => ({
            ...prev,
            isEditing: false,
          }));
          return { ...task, ...modalData };
        } else {
          return task;
        }
      });
    });

    closeForm();
  };

  return (
    <>
      {modalData.isEditing ? (
        <h2>{FORMDATA_TITLE_EDIT}</h2>
      ) : (
        <h2>{FORMDATA_TITLE_ADD}</h2>
      )}
      <GetFormData
        formFields={formFields}
        formFeild={formFields.title}
        modalData={modalData}
        setModalData={setModalData}
      />
      <div style={Style.priorityAndDeadline}>
        <GetFormData
          formFields={formFields}
          formFeild={formFields.priority}
          modalData={modalData}
          setModalData={setModalData}
        />
        <GetFormData
          formFields={formFields}
          formFeild={formFields.deadline}
          modalData={modalData}
          setModalData={setModalData}
        />
      </div>
      <GetFormData
        formFields={formFields}
        formFeild={formFields.comment}
        modalData={modalData}
        setModalData={setModalData}
      />
      <button onClick={closeForm}>Close</button>
      {modalData.isEditing ? (
        <button onClick={taskEditer}>変更を保存</button>
      ) : (
        <button onClick={taskAdder}>追加</button>
      )}
    </>
  );
};

export const DisplayModal = (props) => {
  const { setTaskList, modalData, setModalData, setIsModalOpen } = props;

  return (
    <div style={Style.modal} onClick={() => setIsModalOpen(false)}>
      <div style={Style.modalContent} onClick={(e) => e.stopPropagation()}>
        <TaskBuilder
          setTaskList={setTaskList}
          modalData={modalData}
          setModalData={setModalData}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      <div style={{ height: "10px", flexShrink: "0" }}></div>
    </div>
  );
};
