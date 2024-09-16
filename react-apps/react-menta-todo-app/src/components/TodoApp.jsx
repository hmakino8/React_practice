import { useState } from "react";
import { AddTasksToList } from "./Modal";
import { AddListsToProject } from "./DisplayTasks";
import { initTaskInfo } from "../utils/utils";
import { ToggleMenuProject } from "../utils/Icon";
import { TodleTitle } from "../utils/TodleTitle";
import { TodleButtonAdd } from "../utils/TodleButtonAdd";
import * as Style from "../style/styleTodo";
import * as Style2 from "../style/styleModal";
import * as Style3 from "../style/styleTaskList";

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

export const TodoApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskInfo, setTaskInfo] = useState(initTaskInfo());
  const [taskList, setTaskList] = useState([]);
  const [project, setProject] = useState([]);

  return (
    <div style={Style.todoAppWrapper}>
      <TodoAppHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isModalOpen && (
        <AddTasksToList
          setTaskList={setTaskList}
          taskInfo={taskInfo}
          setTaskInfo={setTaskInfo}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <div style={{ display: "flex", height: "100%" }}>
        {isMenuOpen && (
          <div style={Style3.MenuBar}>
            <MenuProject
              setIsModalOpen={setIsModalOpen}
              setTaskInfo={setTaskInfo}
            />
          </div>
        )}
        <AddListsToProject
          taskList={taskList}
          setTaskList={setTaskList}
          setTaskInfo={setTaskInfo}
          project={project}
          setProject={setProject}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
};

const MenuProject = (props) => {
  const { setIsModalOpen, setTaskInfo } = props;

  return (
    <div style={{ height: "70px" }}>
      <button
        style={Style2.buttonAddList}
        onClick={() => {
          setTaskInfo(initTaskInfo());
          setIsModalOpen(true);
        }}
      >
        <TodleButtonAdd />
        <p style={Style2.buttonAddTaskParagraph}>プロジェクトの追加</p>
      </button>
    </div>
  );
};
