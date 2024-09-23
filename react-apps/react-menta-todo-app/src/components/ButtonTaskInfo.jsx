import { IconInfo } from "./Icon";
import { LABEL } from "../utils/constants";
import styles from "./styles/ButtonTaskInfo.module.css";

export const ButtonTaskInfo = (props) => {
  const { task, setIsModalOpen, setModalData, handleOpenTaskInfo } = props;

  return (
    <button
      className={styles.buttonInfo}
      onClick={handleOpenTaskInfo({ task, setIsModalOpen, setModalData })}
    >
      <IconInfo />
      <p>{LABEL.DETAIL}</p>
    </button>
  );
};
