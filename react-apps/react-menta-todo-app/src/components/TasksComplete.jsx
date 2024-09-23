import { useState } from "react";
import { IconArrowDown, IconArrowRight } from "./Icon";
import { Task } from "./Task";
import styles from "./styles/TasksComplete.module.css";

export const TasksComplete = (props) => {
  const {
    list,
    setTasks,
    setListGroup,
    modalData,
    setModalData,
    setIsModalOpen,
    countTaskComplete,
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <ButtonToggleTasksComplete
        count={countTaskComplete}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      {isVisible && (
        <div className={styles.wrapper}>
          {list.tasks
            .filter((task) => task.isComplete)
            .map((taskIncomplete) => (
              <Task
                key={taskIncomplete.taskId}
                task={taskIncomplete}
                setTasks={setTasks}
                setListGroup={setListGroup}
                modalData={modalData}
                setModalData={setModalData}
                setIsModalOpen={setIsModalOpen}
                isMoreVertOnList={true}
              />
            ))}
        </div>
      )}
    </>
  );
};

const ButtonToggleTasksComplete = ({ count, isVisible, setIsVisible }) => (
  <div
    className={styles.bottonWrapper}
    onClick={() => setIsVisible((prev) => !prev)}
  >
    <button className={styles.buttonToggleTasksComplete}>
      {isVisible ? <IconArrowDown /> : <IconArrowRight />}
    </button>
    完了（{count}件）
  </div>
);
