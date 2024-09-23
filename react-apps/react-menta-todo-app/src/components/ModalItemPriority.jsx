import { PULLDOWN, PLACEHOLDER } from "../utils/constants";
import styles from "./styles/ModalItemPriority.module.css";

export const ModalItemPriority = (props) => (
  <div className={styles.wrapper}>
    <select {...props}>
      <option value="" disabled>
        {PLACEHOLDER.PRIORITY}
      </option>
      <option value="High">{PULLDOWN.PRIORITY_HIGH}</option>
      <option value="Medium">{PULLDOWN.PRIORITY_MEDIUM}</option>
      <option value="Low">{PULLDOWN.PRIORITY_LOW}</option>
    </select>
  </div>
);
