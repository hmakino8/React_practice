import { useState } from "react";
import { Dashboard } from "./Dashboard";
import { ManageTaskModal } from "../components/ManageTaskModal";
import { MenuBar } from "../components/MenuBar";
import { initModalData, initListGroup } from "../utils/initializer";
import { generateId } from "../utils/utils";
import styles from "./styles/Body.module.css";
import { TESTDATA_LISTS, TESTDATA_TASKS } from "../Test/testData";

export const Body = ({ isMenuOpen, searchKey }) => {
  const [modalData, setModalData] = useState(initModalData());
  const [tasks, setTasks] = useState(
    TESTDATA_TASKS().map((prev) => ({ ...prev, taskId: generateId() }))
  );
  const [listGroup, setListGroup] = useState(TESTDATA_LISTS());
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
