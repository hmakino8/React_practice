import React from "react";
import { initModalData } from "../../utils/initializer";
import { ButtonClose } from "./ButtonClose";
import { ButtonSave } from "./ButtonSave";
import { ModalItemTitle } from "./ModalItemTitle";
import { ModalItemPriority } from "./ModalItemPriority";
import { ModalItemDeadline } from "./ModalItemDeadline";
import { ModalItemComment } from "./ModalItemComment";
import { ModalItemListName } from "./ModalItemListName";
import { generateId } from "../../utils/utils";
import styles from "./manageTaskModal.module.css";
import "../../style/global.css";

export const ManageTaskModal = (props) => {
  const { setIsModalOpen, modalData, setModalData, setTasks, listGroup } =
    props;

  const closeModal = () => {
    setModalData(initModalData());
    setIsModalOpen(false);
  };

  const taskAdder = () => {
    const newTasks = {
      ...modalData,
      taskId: generateId(),
      ...(!modalData.priority && { priority: "Low" }),
    };

    setTasks((prevTasks) => [...prevTasks, { ...newTasks }]);
    setModalData(initModalData());
    closeModal();
  };

  const taskEditer = () => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.taskId === modalData.taskId
          ? { ...prevTask, ...modalData }
          : prevTask
      )
    );

    setModalData(initModalData());
    closeModal();
  };

  const commonProps = (modalItem) => ({
    name: modalItem,
    value: modalData[modalItem] || "",
    onChange: (e) =>
      setModalData((prev) => ({ ...prev, [e.target.name]: e.target.value })),
  });

  return (
    <div className={styles.modalWrapper} onClick={closeModal}>
      <div
        className={styles.modalContents}
        onClick={(e) => e.stopPropagation()}
      >
        <ButtonClose closeModal={closeModal} />
        <ModalItemTitle {...commonProps("title")} />
        <div className={styles.wrapperPriorityAndDeadline}>
          <ModalItemPriority {...commonProps("priority")} />
          <ModalItemDeadline {...commonProps("deadline")} />
        </div>
        <ModalItemComment {...commonProps("comment")} />
        <ModalItemListName
          modalData={modalData}
          setModalData={setModalData}
          listGroup={listGroup}
        />
        <ButtonSave
          modalData={modalData}
          taskAdder={taskAdder}
          taskEditer={taskEditer}
        />
      </div>
    </div>
  );
};
