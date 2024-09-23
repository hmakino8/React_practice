import { Close as IconClose } from "./Icon";
import styles from "./styles/ButtonClose.module.css";

export const ButtonClose = ({ closeModal }) => (
  <div className={styles.wrapper}>
    <button className={styles.button} onClick={closeModal}>
      <IconClose />
    </button>
  </div>
);
