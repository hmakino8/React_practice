import { IconMoreVert } from "./Icon";
import classNames from "classnames";
import styles from "./styles/ButtonMoreOptions.module.css";

export const ButtonMoreOptions = ({ list, setIsOpen }) => (
  <button
    className={classNames(styles.buttonMoreOptions, {
      [styles.buttonTaskMoreOptions]: !list,
    })}
    onClick={() => setIsOpen((prev) => !prev)}
  >
    <IconMoreVert />
  </button>
);
