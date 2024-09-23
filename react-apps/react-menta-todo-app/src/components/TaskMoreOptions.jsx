import { ButtonDeleteTask } from "./ButtonDeleteTask";
import { ButtonTaskInfo } from "./ButtonTaskInfo";
import styles from "./styles/TaskMoreOptions.module.css";

export const TaskMoreOptions = (props) => {
  const { task, setTasks, setIsModalOpen, setModalData, dropdownRef } = props;

  const handleDeleteTask = (e) => {
    e.stopPropagation();
    const taskId = e.currentTarget.dataset.taskId;

    setTasks((prev) => prev.filter((task) => task.taskId !== taskId));
  };

  const handleOpenTaskInfo =
    ({ task, setIsModalOpen, setModalData }) =>
    (e) => {
      e.stopPropagation();

      setModalData((prevModalData) => ({ ...prevModalData, ...task }));
      setIsModalOpen(true);
    };

  return (
    <div ref={dropdownRef}>
      <ul className={styles.wrapper}>
        <li className={styles.delete}>
          <ButtonDeleteTask task={task} handleDeleteTask={handleDeleteTask} />
        </li>
        <li className={styles.info}>
          <ButtonTaskInfo
            task={task}
            setIsModalOpen={setIsModalOpen}
            setModalData={setModalData}
            handleOpenTaskInfo={handleOpenTaskInfo}
          />
        </li>
      </ul>
    </div>
  );
};
