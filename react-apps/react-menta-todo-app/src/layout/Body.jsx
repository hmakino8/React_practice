import { useState, useEffect } from "react";
import { Dashboard } from "./Dashboard";
import { ManageTaskModal } from "../components/ManageTaskModal";
import { MenuBar } from "../components/MenuBar";
import { initModalData, initListGroup, initTasks } from "../utils/initializer";
import styles from "./styles/Body.module.css";

export const Body = ({ isMenuOpen, searchKey }) => {
  const DEBUG = true;

  const [modalData, setModalData] = useState(initModalData());
  const [tasks, setTasks] = useState(initTasks(DEBUG));
  const [listGroup, setListGroup] = useState(initListGroup(DEBUG));
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.body}>
      {isModalOpen && (
        <ManageTaskModal
          modalData={modalData}
          setModalData={setModalData}
          setIsModalOpen={setIsModalOpen}
          setTasks={setTasks}
          listGroup={listGroup}
        />
      )}
      {isMenuOpen && (
        <MenuBar
          setIsModalOpen={setIsModalOpen}
          listGroup={listGroup}
          setListGroup={setListGroup}
        />
      )}
      <Dashboard
        tasks={tasks}
        setTasks={setTasks}
        setIsModalOpen={setIsModalOpen}
        modalData={modalData}
        setModalData={setModalData}
        listGroup={listGroup}
        setListGroup={setListGroup}
        isMenuOpen={isMenuOpen}
        searchKey={searchKey}
      />
    </div>
  );
};
