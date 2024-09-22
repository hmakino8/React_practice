import { useState, useEffect } from "react";
import { GetModalData } from "./GetModalData";
import { RenderListGroup } from "./RenderListGroup";
import { initListGroup, initModalData } from "../utils/initializer";
import { TodleTitle } from "../utils/TodleTitle";
import { TodleButtonAdd } from "../utils/TodleButtonAdd";
import { LABEL, PLACEHOLDER } from "../utils/constants";
import * as Icon from "../utils/Icon";
import * as Style from "../style/todoApp";
import { generateId } from "../utils/utils";

export const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [modalData, setModalData] = useState(initModalData());
  const [listGroup, setListGroup] = useState(initListGroup());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isAddTask, setIsAddTask] = useState(false);

  useEffect(() => {
    console.log("listGroup=", listGroup);
  }, [listGroup]);

  useEffect(() => {
    console.log("tasks=", tasks);
  }, [tasks]);

  return (
    <div style={Style.todoAppWrapper}>
      <TodoAppHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div style={Style.todoAppBody}>
        {isModalOpen && (
          <GetModalData
            setIsModalOpen={setIsModalOpen}
            modalData={modalData}
            setModalData={setModalData}
            setTasks={setTasks}
            listGroup={listGroup}
            setListGroup={setListGroup}
          />
        )}
        {isMenuOpen && (
          <MenuBar
            tasks={tasks}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            listGroup={listGroup}
            setListGroup={setListGroup}
          />
        )}
        <RenderListGroup
          tasks={tasks}
          setTasks={setTasks}
          setIsModalOpen={setIsModalOpen}
          modalData={modalData}
          setModalData={setModalData}
          listGroup={listGroup}
          setListGroup={setListGroup}
          isAddTask={isAddTask}
          setIsAddTask={setIsAddTask}
          isMenuOpen={isMenuOpen}
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
        <Icon.ToggleMenuProject />
      </button>
      <TodleTitle />
      <label
        style={{
          display: "flex",
          marginLeft: "20px",
          border: "1px solid rgb(240, 240, 240)",
          borderRadius: "20px",
          backgroundColor: "rgb(240, 240, 240)",
          width: "200px",
        }}
      >
        <Icon.search />
        <input />
      </label>
    </div>
  );
};

const MenuBar = (props) => {
  const { tasks, listGroup, setListGroup, isModalOpen, setIsModalOpen } = props;
  const [isCreateTaskList, setIsCreateTaskList] = useState(false);
  const [listName, setListName] = useState("");
  const [isOpenLists, setIsOpenLists] = useState(true);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const enableCreateTaskList = () => {
    if (!isCreateTaskList) setIsCreateTaskList(true);
  };

  const disableCreateTaskList = () => {
    if (isCreateTaskList) setIsCreateTaskList(false);
  };

  const handleCreateTaskList = () => {
    if (listName.trim() !== "") {
      setListGroup((prevListGroup) => [
        {
          listId: generateId(),
          listName: listName,
          isDisplay: true,
          tasks: [],
        },
        ...prevListGroup,
      ]);

      setListName("");
      disableCreateTaskList();
    }
  };

  const handleSetListName = (e) => {
    setListName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCreateTaskList();
    }
  };

  const handleIsOpenList = () => {
    setIsOpenLists((prev) => !prev);
  };

  const handleListContents = (e) => {
    // const { checked } = e.target.checked;
    const listId = e.target.dataset.listId;

    setListGroup((prevListGroup) =>
      prevListGroup.map((prevList) => {
        if (prevList.listId === listId) {
          return { ...prevList, isDisplay: !prevList.isDisplay };
        }
        return prevList;
      })
    );
  };

  return (
    <div style={Style.MenuBarWrapper}>
      <button
        className="buttonAddTaskToList"
        style={Style.buttonAddTaskToList}
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
            borderRadius: "0",
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            backgroundColor: "transparent",
          }}
          placeholder={PLACEHOLDER.CREATE_TASK_LIST}
          autoFocus
          onBlur={disableCreateTaskList}
          value={listName}
          onChange={handleSetListName}
          onKeyDown={handleKeyDown}
        />
      )}
      <div
        style={{
          fontSize: "0.9rem",
          position: "absolute",
          width: "90%",
          top: "160px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        リスト
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            border: "none",
            borderRadius: "100%",
          }}
          onClick={handleIsOpenList}
        >
          {isOpenLists ? (
            <Icon.KeyboardControlKey />
          ) : (
            <Icon.KeyboardArrowDown />
          )}
        </button>
      </div>
      {isOpenLists && (
        <>
          {listGroup.map((list, index) => (
            <label
              className="menu-list"
              key={list.listId}
              style={{
                position: "absolute",
                top: `${200 + 35 * index}px`,
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: "80%",
                border: "none",
                borderRadius: "20px",
                fontSize: "1rem",
                paddingLeft: "5px",
              }}
            >
              <input
                style={{
                  marginRight: "15px",
                  padding: "20px",
                }}
                type="checkBox"
                data-list-id={list.listId}
                checked={list.isDisplay}
                onChange={handleListContents}
                disabled={list.isDefault}
              />
              {list.listName}
            </label>
          ))}
        </>
      )}
    </div>
  );
};
