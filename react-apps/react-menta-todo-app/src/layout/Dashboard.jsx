import React, { useEffect } from "react";
import { searchEngine } from "../hooks/searchEngine";
import { TaskList } from "../components/TaskList";
import classNames from "classnames";
import styles from "./styles/Dashboard.module.css";

export const Dashboard = (props) => {
  const {
    tasks,
    setTasks,
    modalData,
    setIsModalOpen,
    setModalData,
    listGroup,
    setListGroup,
    isMenuOpen,
    searchKey,
  } = props;

  const newListGroup = searchEngine(searchKey, listGroup);

  useEffect(() => {
    if (!tasks) return;

    setListGroup((prevListGroup) =>
      prevListGroup.map((list) => {
        const newTasks = tasks.filter((task) => list.listId === task.listId);

        return {
          ...list,
          tasks: [...newTasks],
          isDefault: list.isDefault ?? false,
        };
      })
    );
  }, [tasks, setListGroup]);

  return (
    <div
      className={classNames(styles.container, {
        [styles.menuOpen]: isMenuOpen,
        [styles.menuClose]: !isMenuOpen,
      })}
    >
      {newListGroup.map(
        (list) =>
          list.isDisplay && (
            <TaskList
              key={list.listId}
              list={list}
              setTasks={setTasks}
              setListGroup={setListGroup}
              modalData={modalData}
              setIsModalOpen={setIsModalOpen}
              setModalData={setModalData}
            />
          )
      )}
    </div>
  );
};
