import { PLACEHOLDER } from "../../utils/constants";
import styles from "./ModalItemDeadline.module.css";

export const ModalItemDeadline = (props) => (
  <div className={styles.container}>
    <input
      {...props}
      type="datetime-local"
      placeholder={PLACEHOLDER.DEADLINE}
    />
  </div>
);
