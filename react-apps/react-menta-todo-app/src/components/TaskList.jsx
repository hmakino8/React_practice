import { ButtonAddTask } from "./ButtonAddTask";
import { TasksIncomplete } from "./TasksIncomplete.jsx";
import { TasksComplete } from "./TasksComplete.jsx";
import { generateId } from "../utils/utils";
import { initModalData } from "../utils/initializer";
import { MoreOptions } from "./MoreOptions";
import styles from "./styles/TaskList.module.css";

export const TaskList = (props) => {
  const {
    list,
    setTasks,
    setListGroup,
    modalData,
    setIsModalOpen,
    setModalData,
  } = props;

  const countTaskComplete = list.tasks.filter((task) => task.isComplete).length;

  const handleAddTaskClick = (e) => {
    const listId = e.target.dataset.listId;

    setTasks((tasks) => [
      {
        ...initModalData(),
        listId: listId,
        taskId: generateId(),
        priority: "Low",
        dateCreated: new Date(),
        lastUpdated: new Date(),
      },
      ...tasks,
    ]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <p className={styles.listName}>{list.listName}</p>
        <MoreOptions
          list={list}
          setListGroup={setListGroup}
          task={null}
          setTasks={null}
          setIsModalOpen={null}
          setModalData={null}
        />
      </div>
      <ButtonAddTask list={list} handleAddTaskClick={handleAddTaskClick} />
      <TasksIncomplete
        list={list}
        setTasks={setTasks}
        setListGroup={setListGroup}
        modalData={modalData}
        setModalData={setModalData}
        setIsModalOpen={setIsModalOpen}
      />
      {countTaskComplete > 0 && (
        <TasksComplete
          list={list}
          setTasks={setTasks}
          modalData={modalData}
          setListGroup={setListGroup}
          setModalData={setModalData}
          setIsModalOpen={setIsModalOpen}
          countTaskComplete={countTaskComplete}
        />
      )}
    </div>
  );
};
