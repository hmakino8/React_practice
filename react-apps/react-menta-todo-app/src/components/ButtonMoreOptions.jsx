import { IconMoreVert } from "./Icon";
import styles from "./styles/ButtonMoreOptions.module.css";

export const ButtonMoreOptions = ({ setIsOpen }) => (
  <button
    className={styles.buttonMoreOptions}
    onClick={() => setIsOpen((prev) => !prev)}
  >
    <IconMoreVert />
  </button>
);
