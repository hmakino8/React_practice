import { LABEL } from "../utils/constants";
import { IconAdd } from "./Icon";
import styles from "./styles/ButtonCreateTaskList.module.css";

export const ButtonCreateTaskList = (props) => {
  const { isActiveCreateList, setIsActiveCreateList } = props;

  return (
    <button
      className={styles.wrapper}
      onClick={() => !isActiveCreateList && setIsActiveCreateList(true)}
    >
      <IconAdd />
      {LABEL.CREATE_TASK_LIST}
    </button>
  );
};
