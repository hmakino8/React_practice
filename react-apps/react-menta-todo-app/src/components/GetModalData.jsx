import React, { useState, useEffect } from "react";
import { initModalData } from "../utils/initializer";
import * as Utils from "../utils/utils";
import * as Style from "../style/styleModal";
import { PLACEHOLDER, PULLDOWN } from "../utils/constants";
import "../style/styles.css";

export const GetModalData = (props) => {
  const {
    setIsModalOpen,
    modalData,
    setModalData,
    setTasks,
    listGroup,
    setListGroup,
  } = props;

  const closeTaskModal = () => {
    setIsModalOpen(false);
  };

  const taskAdder = () => {
    const newTasks = {
      ...modalData,
      taskId: Utils.generateId(),
      ...(!modalData.priority && { priority: "Low" }),
    };

    setTasks((prevTasks) => [...prevTasks, { ...newTasks }]);
    setModalData(initModalData());
    closeTaskModal();
  };

  const taskEditer = () => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) => {
        if (prevTask.taskId === modalData.taskId) {
          return { ...prevTask, ...modalData };
        }
        return prevTask;
      })
    );

    setModalData(initModalData());
    closeTaskModal();
  };

  return (
    <div style={Style.modal} onClick={() => setIsModalOpen(false)}>
      <div style={Style.modalContents} onClick={(e) => e.stopPropagation()}>
        <ModalItemTitle {...commonProps("title", modalData, setModalData)} />
        <div style={Style.priorityAndDeadline}>
          <ModalItemPriority
            {...commonProps("priority", modalData, setModalData)}
          />
          <ModalItemDeadline
            {...commonProps("deadline", modalData, setModalData)}
          />
        </div>
        <ModalItemComment
          {...commonProps("comment", modalData, setModalData)}
        />
        <ModalItemListName
          modalData={modalData}
          setModalData={setModalData}
          listGroup={listGroup}
        />
        <button onClick={closeTaskModal}>Close</button>
        <button onClick={modalData.taskId ? taskEditer : taskAdder}>
          保存
        </button>
      </div>
    </div>
  );
};

export const modalItems = {
  listId: "",
  title: "title",
  priority: "priority",
  deadline: "deadline",
  comment: "comment",
};

export const commonProps = (modalItem, modalData, setModalData) => ({
  name: modalItem,
  value: modalData[modalItems[modalItem]] || "",
  onChange: (e) => handleSetFormData(e, setModalData),
});

export const handleSetFormData = (e, setModalData) => {
  const { name, value } = e.target;

  setModalData((prev) => ({ ...prev, [name]: value }));
};

const ModalItemTitle = (props) => {
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
          {PLACEHOLDER.PRIORITY}
        </option>
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
      <input
        {...props}
        type="datetime-local"
        placeholder={PLACEHOLDER.DEADLINE}
      />
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

const ModalItemListName = (props) => {
  const { modalData, setModalData, listGroup } = props;

  const listName = listGroup.map((list) => {
    if (list.listId === modalData.listId) {
      return list.listName;
    }
    return "";
  });

  return (
    <div style={{ ...Style.inputForm, width: "50%" }}>
      <select
        name={"listId"}
        onChange={(e) => handleSetFormData(e, setModalData)}
      >
        {modalData.listId ? (
          <option value={modalData.listId}>{listName}</option>
        ) : (
          <option value="">リストを選択</option>
        )}
        {listGroup.map(
          (taskList) =>
            taskList.listId !== modalData.listId && (
              <option value={taskList.listId} key={taskList.listId}>
                {taskList.listName}
              </option>
            )
        )}
      </select>
    </div>
  );
};
