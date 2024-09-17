import { useState } from "react";
import { DisplayModal } from "./DisplayModal";
import { DisplayAllTasks } from "./DisplayAllTasks";
import { ToggleMenuProject } from "../utils/Icon";
import { initTaskGroup, initModalData } from "../utils/initializer";
import { TodleTitle } from "../utils/TodleTitle";
import { TodleButtonAdd } from "../utils/TodleButtonAdd";
import { LABEL } from "../utils/constants";
import * as Style from "../style/todoApp";

export const TodoApp = () => {
  const [taskList, setTaskList] = useState([]);
  const [taskGroup, setTaskGroup] = useState(initTaskGroup());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(initModalData());
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div style={Style.todoAppWrapper}>
      <TodoAppHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div style={Style.todoAppBody}>
        {isModalOpen && (
          <DisplayModal
            setTaskList={setTaskList}
            modalData={modalData}
            setModalData={setModalData}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {isMenuOpen && (
          <MenuBar
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            taskGroup={taskGroup}
            setTaskGroup={setTaskGroup}
          />
        )}
        <DisplayAllTasks
          taskList={taskList}
          setTaskList={setTaskList}
          taskGroup={taskGroup}
          setTaskGroup={setTaskGroup}
        />
      </div>
    </div>
  );
};

const TodoAppHeader = (props) => {
  const { isMenuOpen, setIsMenuOpen } = props;

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={Style.todoAppHeader}>
      <button style={Style.toggleMenuProject} onClick={handleToggleMenu}>
        <ToggleMenuProject />
      </button>
      <TodleTitle />
    </div>
  );
};

const MenuBar = (props) => {
  const { taskGroup, setTaskGroup, isModalOpen, setIsModalOpen } = props;

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div style={Style.MenuBar}>
      <button style={Style.buttonAddTaskList} onClick={handleModalOpen}>
        <TodleButtonAdd />
        <p style={Style.menuBarLabel}>{LABEL.ADD_TASK_LIST}</p>
      </button>
    </div>
  );
};
