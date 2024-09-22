import { Close as IconClose } from "../../utils/Icon";
import styles from "./buttonClose.module.css";

export const ButtonClose = ({ closeModal }) => (
  <div className={styles.container}>
    <button className={styles.button} onClick={closeModal}>
      <IconClose />
    </button>
  </div>
);
