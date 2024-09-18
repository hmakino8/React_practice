import React, { useEffect } from "react";
import { initModalData } from "../utils/initializer";
import * as Utils from "../utils/utils";
import * as Style from "../style/styleModal";
import { PLACEHOLDER, PULLDOWN } from "../utils/constants";
import "../style/styles.css";

export const GetModalData = (props) => {
  const { setTasks, modalData, setModalData, setIsModalOpen } = props;

  //DEBUG
  useEffect(() => {
    console.log(modalData);
  });

  const modalItems = {
    title: "title",
    priority: "priority",
    deadline: "deadline",
    comment: "comment",
  };

  const commonProps = (modalItem) => ({
    name: modalItem,
    value: modalData[modalItems[modalItem]] || "",
    onChange: handleSetFormData,
  });

  const handleSetFormData = (e) => {
    const { name, value } = e.target;

    setModalData((prev) => ({ ...prev, [name]: value }));
  };

  const closeTaskModal = () => {
    setIsModalOpen(false);
  };

  const taskAdder = () => {
    const uniqueId = Utils.generateId();

    setTasks((prevTasks) => [...prevTasks, { ...modalData, id: uniqueId }]);
    setModalData(initModalData());

    closeTaskModal();
  };

  const taskEditer = () => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === modalData.id) {
          setModalData((prevModalData) => ({
            ...prevModalData,
            isEditing: false,
          }));
          return { ...task, ...modalData };
        } else {
          return task;
        }
      });
    });

    closeTaskModal();
  };

  return (
    <div style={Style.modal} onClick={() => setIsModalOpen(false)}>
      <div style={Style.modalContents} onClick={(e) => e.stopPropagation()}>
        <ModalItemTitle {...commonProps("title")} />
        <div style={Style.priorityAndDeadline}>
          <ModalItemPriority {...commonProps("priority")} />
          <ModalItemDeadline {...commonProps("deadline")} />
        </div>
        <ModalItemComment {...commonProps("comment")} />
        <button onClick={closeTaskModal}>Close</button>
        {modalData.isEditing ? (
          <button onClick={taskEditer}>変更を保存</button>
        ) : (
          <button onClick={taskAdder}>追加</button>
        )}
      </div>
    </div>
  );
};

const ModalItemTitle = (props) => {
  console.log(props);
  return (
    <div style={Style.inputForm}>
      <input {...props} type="text" placeholder={PLACEHOLDER.TITLE} />
    </div>
  );
};

const ModalItemPriority = (props) => {
  return (
    <div style={{ ...Style.inputForm, ...Style.priority }}>
      <select {...props}>
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
};

const ModalItemDeadline = (props) => {
  return (
    <div style={Style.inputForm}>
      <input {...props} type="datetime-local" />
    </div>
  );
};

const ModalItemComment = (props) => {
  return (
    <div style={Style.inputForm}>
      <textarea {...props} placeholder={PLACEHOLDER.COMMENT} />
    </div>
  );
};
