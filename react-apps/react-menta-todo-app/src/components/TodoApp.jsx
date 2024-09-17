import { useState } from "react";
import { DisplayModal } from "./DisplayModal";
import { DisplayAllTasks } from "./DisplayAllTasks";
import { ToggleMenuProject } from "../utils/Icon";
import { initTaskGroup, initModalData } from "../utils/initializer";
import { TodleTitle } from "../utils/TodleTitle";
import { TodleButtonAdd } from "../utils/TodleButtonAdd";
import { LABEL, PLACEHOLDER } from "../utils/constants";
import * as Icon from "../utils/Icon";
import * as Style from "../style/todoApp";
import * as Style2 from "../style/styleTaskList";
import { generateId } from "../utils/utils";

export const TodoApp = () => {
  const [taskList, setTaskList] = useState([]);
  const [taskGroup, setTaskGroup] = useState(initTaskGroup());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(initModalData());
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [testAddList, setTestAddList] = useState(0);

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
            taskList={taskList}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            taskGroup={taskGroup}
            setTaskGroup={setTaskGroup}
          />
        )}
        <DisplayAllTasks
          id={generateId()}
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
  const { taskList, taskGroup, setTaskGroup, isModalOpen, setIsModalOpen } =
    props;
  const [isCreateTaskList, setIsCreateTaskList] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const enableCreateTaskList = () => {
    if (!isCreateTaskList) setIsCreateTaskList(true);
  };

  const disableCreateTaskList = () => {
    if (isCreateTaskList) setIsCreateTaskList(false);
  };

  const Test = () => {
    setTaskGroup((prev) => {
      return [
        ...prev,
        {
          projectId: generateId(),
          projectTitle: `マイタスク${taskGroup.length}`,
          taskList: taskList,
        },
      ];
    });
  };

  return (
    <div style={Style.MenuBarWrapper}>
      <button
        className="buttonAddTaskToList"
        style={Style.buttonAddTaskToList}
        // onClick={handleModalOpen}
        onClick={Test}
      >
        <TodleButtonAdd />
        <p style={Style.menuBarLabel}>{LABEL.ADD_TASK_TO_LIST}</p>
      </button>

      <button style={Style.buttonCreateTaskList} onClick={enableCreateTaskList}>
        <Icon.CreateTaskList />
        {LABEL.CREATE_TASK_LIST}
      </button>
      {isCreateTaskList && (
        <input
          style={{
            position: "absolute",
            width: "90%",
            top: "130px",
            height: "20px",
          }}
          placeholder={PLACEHOLDER.CREATE_TASK_LIST}
          autoFocus
          onBlur={disableCreateTaskList}
        />
      )}
    </div>
  );
};
