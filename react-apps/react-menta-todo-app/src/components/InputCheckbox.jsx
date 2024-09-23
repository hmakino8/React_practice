import styles from "./styles/InputCheckbox.module.css";

export const InputCheckbox = ({ isComplete, handleToggleIsComplete }) => (
  <input
    type="checkbox"
    checked={isComplete}
    className={styles.inputCheckbox}
    onChange={handleToggleIsComplete}
  />
);
