import { LABEL } from "../utils/constants";
import { IconTrash } from "./Icon";
import styles from "./styles/ButtonDeleteTask.module.css";

export const ButtonDeleteTask = ({ task, handleDeleteTask }) => (
  <button
    data-task-id={task.taskId}
    onClick={handleDeleteTask}
    className={styles.buttonDelete}
  >
    <IconTrash />
    <p>{LABEL.DELETE}</p>
  </button>
);
