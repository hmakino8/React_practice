import { LABEL } from "../utils/constants";
import styles from "./styles/Icon.module.css";

export const Clock = () => (
  <span className={`material-symbols-outlined ${styles.clock}`}>schedule</span>
);

export const Close = () => (
  <span className="material-symbols-outlined">close</span>
);

export const VisibilityOff = () => (
  <span className="material-symbols-outlined">visibility_off</span>
);

export const Info = () => (
  <span className="material-symbols-outlined">info</span>
);

export const Trash = () => (
  <span className="material-symbols-outlined">delete</span>
);

export const ArrowRight = () => (
  <span className="material-symbols-outlined">arrow_right</span>
);

export const ArrowDown = () => (
  <span className="material-symbols-outlined">arrow_drop_down</span>
);

export const KeyboardArrowDown = () => (
  <span className="material-symbols-outlined">keyboard_arrow_down</span>
);

export const KeyboardControlKey = () => (
  <span className="material-symbols-outlined">keyboard_control_key</span>
);

export const MoreVert = () => (
  <span className={`material-symbols-outlined ${styles.moreVert}`}>
    more_vert
  </span>
);

export const AddTask = () => (
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
