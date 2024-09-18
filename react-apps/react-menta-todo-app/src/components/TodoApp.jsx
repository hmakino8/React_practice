import { useState } from "react";
import { GetModalData } from "./GetModalData";
import { DisplayListGroup } from "./DisplayListGroup";
import { ToggleMenuProject } from "../utils/Icon";
import { initTaskGroup, initModalData } from "../utils/initializer";
import { TodleTitle } from "../utils/TodleTitle";
import { TodleButtonAdd } from "../utils/TodleButtonAdd";
import { LABEL, PLACEHOLDER } from "../utils/constants";
import * as Icon from "../utils/Icon";
import * as Style from "../style/todoApp";
import { generateId } from "../utils/utils";

export const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [ListGroup, setTaskGroup] = useState(initTaskGroup());
  const [modalData, setModalData] = useState(initModalData());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div style={Style.todoAppWrapper}>
      <TodoAppHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div style={Style.todoAppBody}>
        {isModalOpen && (
          <GetModalData
            setTasks={setTasks}
            modalData={modalData}
            setModalData={setModalData}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {isMenuOpen && (
          <MenuBar
            tasks={tasks}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            ListGroup={ListGroup}
            setTaskGroup={setTaskGroup}
          />
        )}
        <DisplayListGroup
          setTasks={setTasks}
          ListGroup={ListGroup}
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
  const { tasks, ListGroup, setTaskGroup, isModalOpen, setIsModalOpen } = props;
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
          listId: generateId(),
          listName: `マイタスク${ListGroup.length}`,
          tasks: tasks,
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
        onClick={handleModalOpen}
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
