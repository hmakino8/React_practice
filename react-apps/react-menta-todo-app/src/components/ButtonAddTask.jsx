import { LABEL } from "../utils/constants";
import { IconAddTask } from "./Icon";
import styles from "./styles/ButtonAddTask.module.css";

export const ButtonAddTask = ({ list, handleAddTaskClick }) => (
  <div className={styles.wrapper}>
    <button
      className={styles.buttonAddTask}
      data-list-id={list.listId}
      onClick={handleAddTaskClick}
    >
      <IconAddTask />
      {LABEL.ADD_TASK}
    </button>
  </div>
);
