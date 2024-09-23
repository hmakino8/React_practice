import { LABEL } from "../utils/constants";
import styles from "./styles/Icon.module.css";

export const IconClock = () => (
  <span className={`material-symbols-outlined ${styles.clock}`}>schedule</span>
);

export const Close = () => (
  <span className="material-symbols-outlined">close</span>
);

export const IconVisibilityOff = () => (
  <span className="material-symbols-outlined">visibility_off</span>
);

export const IconInfo = () => (
  <span className="material-symbols-outlined">info</span>
);

export const IconTrash = () => (
  <span className="material-symbols-outlined">delete</span>
);

export const IconArrowRight = () => (
  <span className="material-symbols-outlined">arrow_right</span>
);

export const IconArrowDown = () => (
  <span className="material-symbols-outlined">arrow_drop_down</span>
);

export const KeyboardArrowDown = () => (
  <span className="material-symbols-outlined">keyboard_arrow_down</span>
);

export const KeyboardControlKey = () => (
  <span className="material-symbols-outlined">keyboard_control_key</span>
);

export const IconMoreVert = () => (
  <span className={`material-symbols-outlined ${styles.moreVert}`}>
    more_vert
  </span>
);

export const IconAddTask = () => (
  <span className={`material-symbols-outlined ${styles.addTask}`}>
    add_task
  </span>
);

export const CreateTaskList = (props) => {
  const { isActiveCreateList, setIsActiveCreateList } = props;

  return (
    <button
      className={styles.buttonCreateTaskList}
      onClick={() => !isActiveCreateList && setIsActiveCreateList(true)}
    >
      <span className={`material-symbols-outlined ${styles.createTaskList}`}>
        add
      </span>
      {LABEL.CREATE_TASK_LIST}
    </button>
  );
};