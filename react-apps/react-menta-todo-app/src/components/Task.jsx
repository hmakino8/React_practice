import { InputCheckbox } from "./InputCheckbox";
import { InputTitle } from "./InputTitle";
import { SelectPriority } from "./SelectPriority";
import { InputDeadline } from "./InputDeadline";
import { MoreOptions } from "./MoreOptions";
import styles from "./styles/Task.module.css";

export const Task = (props) => {
  const { task, setTasks, setListGroup, setModalData, setIsModalOpen } = props;

  const handleToggleIsComplete = () => {
    setTasks((prevTasks) => {
      let index = -1;

      const newTasks = prevTasks.map((prevTask, mapIndex) => {
        if (prevTask.taskId === task.taskId) {
          index = mapIndex;
          return { ...prevTask, isComplete: !prevTask.isComplete };
        } else {
          return prevTask;
        }
      });

      if (index !== -1) {
        const [updatedTask] = newTasks.splice(index, 1);
        newTasks.unshift(updatedTask);
      }

      return newTasks;
    });
  };

  const handleUpdateTaskInfo = (e) => {
    const { name, value } = e.target;
    const taskId = e.target.dataset.taskId;

    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.taskId === taskId ? { ...prevTask, [name]: value } : prevTask
      )
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.target.blur();
  };

  return (
    <div className={styles.wrapper}>
      <div style={styles.contentWrapper}>
        <InputCheckbox handleToggleIsComplete={handleToggleIsComplete} />
        <InputTitle
          task={task}
          handleUpdateTaskInfo={handleUpdateTaskInfo}
          handleKeyDown={handleKeyDown}
        />
        <MoreOptions
          list={null}
          setListGroup={setListGroup}
          task={task}
          setTasks={setTasks}
          setIsModalOpen={setIsModalOpen}
          setModalData={setModalData}
        />
        <SelectPriority
          task={task}
          handleUpdateTaskInfo={handleUpdateTaskInfo}
        />
      </div>
      <div className={styles.inputDeadlineWrapper}>
        {task.deadline && (
          <InputDeadline
            task={task}
            handleUpdateTaskInfo={handleUpdateTaskInfo}
          />
        )}
      </div>
    </div>
  );
};
