import styles from "./styles/TasksIncomplete.module.css";
import { Task } from "./Task";

export const TasksIncomplete = (props) => {
  const {
    list,
    setTasks,
    setListGroup,
    modalData,
    setModalData,
    setIsModalOpen,
  } = props;
  const tasksIncomplete = list.tasks.filter((task) => !task.isComplete);

  return (
    <div className={styles.wrapper}>
      {tasksIncomplete.map((taskIncomplete) => (
        <Task
          key={taskIncomplete.taskId}
          task={taskIncomplete}
          setTasks={setTasks}
          setListGroup={setListGroup}
          modalData={modalData}
          setModalData={setModalData}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </div>
  );
};
